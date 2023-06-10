FROM node:16
# Installing libvips-dev for sharp Compatibility
#RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash libvips-dev
RUN apt-get update && apt-get install libvips-dev -y

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /backend/
COPY package.json yarn.lock ./
RUN yarn config set network-timeout 600000 -g && yarn install
ENV PATH /backend/node_modules/.bin:$PATH

RUN mkdir -p /backend/app
WORKDIR /backend/app
#RUN chown -R node:node /backend/app
COPY . .
RUN ["yarn", "build"]
#USER node
EXPOSE 1337
CMD ["yarn", "develop"]