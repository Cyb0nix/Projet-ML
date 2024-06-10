FROM node:20.14 AS build

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
COPY /model ./model

RUN npm install

# Copy source files
COPY . .

RUN npm run build

############################################################
#                          RUN                             #
############################################################
FROM node:20.14

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
COPY /model ./model

RUN npm install

# Copy the built assets of the api app
COPY --from=build /usr/src/app/dist /usr/src/app/dist


CMD node dist/main.js