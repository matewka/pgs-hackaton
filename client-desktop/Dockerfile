FROM node:4

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY *.json /usr/src/app/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/app

EXPOSE 4000
WORKDIR /usr/src/app
RUN npm rebuild node-sass
CMD npm start