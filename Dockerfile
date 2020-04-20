FROM mhart/alpine-node:latest

RUN mkdir /app

WORKDIR /app

ENV NODE_ENV=production

RUN yarn global add lerna

COPY package.json lerna.json yarn.lock tsconfig.json ormconfig.json /app/
COPY packages/stencil/package.json /app/packages/stencil/
COPY packages/server/package.json packages/server/nodemon.json /app/packages/server/
COPY packages/react/package.json /app/packages/react/

RUN yarn global add nodemon ts-node

RUN yarn install

RUN yarn run bootstrap