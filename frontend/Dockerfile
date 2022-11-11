# base image
FROM node:16-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install -g npm@8.19.3
RUN npm install -g @angular/cli@14.2.4

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0