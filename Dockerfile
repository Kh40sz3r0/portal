# [START all]
FROM node:latest
EXPOSE 8001

ENV port_api 9000
ENV NODE_ENV local
CMD mkdir -p /opts/node/portal
COPY src /opts/node/portal/src
COPY node_modules /opts/node/portal/node_modules
CMD node /opts/node/portal/src/server/app.js
# [END all]
