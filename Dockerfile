FROM mhart/alpine-node:latest

WORKDIR /app

ENV NODE_ENV=production

RUN yarn global add lerna

COPY package.json lerna.json yarn.lock /app/
COPY packages/stencil/package.json /app/packages/stencil/package.json
COPY packages/server/package.json packages/server/ormconfig.json /app/packages/server/
COPY packages/react/package.json /app/packages/react/package.json

RUN yarn install

RUN yarn run bootstrap