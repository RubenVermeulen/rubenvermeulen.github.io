FROM node:16-slim

ARG FOLDER_APP_BUNDLE

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ${FOLDER_APP_BUNDLE} .

EXPOSE 4000

CMD [ "node", "server/main.js" ]
