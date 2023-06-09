#
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

# Create app directory
WORKDIR /frontend
COPY package.json ./
RUN yarn install 

FROM node:16-alpine AS builder
WORKDIR /frontend
COPY --from=deps /frontend/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
ARG NODE_ENV
ENV NODE_ENV=”${NODE_ENV}”
RUN yarn run build

# Production image, copy all the files and run next
FROM mhart/alpine-node AS runner
WORKDIR /frontend

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs


ENV NEXT_TELEMETRY_DISABLED 1
# COPY --from=builder /frontend/.next/standalone ./standalone
# COPY --from=builder /frontend/public /frontend/standalone/public
# COPY --from=builder /frontend/.next/static /frontend/standalone/.next/static
COPY --from=builder --chown=nextjs:nodejs /frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /frontend/.next/static ./.next/static

USER nextjs


EXPOSE 3000
ENV PORT 3000

CMD ["node", ".next/standalone/server.js"]
