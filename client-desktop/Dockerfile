FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD *.json /usr/src/app/
RUN npm install --quiet --development
RUN npm run typings-install
# to avoid problems with node-sass
RUN npm rebuild node-sass

# Bundle app source
ADD . /usr/src/app

EXPOSE 4000
# start dev server
CMD npm start