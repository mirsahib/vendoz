FROM node:16-alpine

# Create app directory
WORKDIR /frontend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# copying packages first helps take advantage of docker layers
COPY package.json /frontend/
RUN yarn install 
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /frontend/

EXPOSE 3000

CMD [ "yarn", "run", "dev" ]