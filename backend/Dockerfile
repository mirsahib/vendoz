FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /backend
COPY package.json /backend
ENV PATH /backend/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
COPY . /backend/
RUN yarn build
EXPOSE 1337
CMD ["yarn","run" ,"develop"]
