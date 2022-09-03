FROM node:16-slim

ARG APP_BUNDLE_PATH

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ${APP_BUNDLE_PATH} .

EXPOSE 4000

CMD [ "node", "server/main.js" ]
