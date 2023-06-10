FROM node:16.20.0-alpine3.17 AS development
WORKDIR /frontend
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=development
EXPOSE 3000
CMD [ "yarn", "dev" ]

FROM node:16.20.0-alpine3.17 AS dependencies
ENV NODE_ENV=production
WORKDIR /frontend
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.20.0-alpine3.17 AS builder
ENV NODE_ENV=development
WORKDIR /frontend
COPY . .
RUN yarn install --frozen-lockfile && NODE_ENV=production yarn build

FROM node:16.20.0-alpine3.17 AS production
WORKDIR /frontend
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
COPY --chown=node --from=builder /frontend/next.config.js ./
COPY --chown=node --from=builder /frontend/public ./public
COPY --chown=node --from=builder /frontend/.next ./.next
COPY --chown=node --from=builder /frontend/yarn.lock /frontend/package.json ./
COPY --chown=node --from=dependencies /frontend/node_modules ./node_modules
USER node
EXPOSE 3000
CMD [ "yarn", "start" ]