FROM node:12.13.1-alpine3.9

RUN mkdir app
COPY . ./app
WORKDIR ${pwd}/app

RUN npm i -g typescript
RUN npm install --only=production

RUN npm run build 

WORKDIR ${pwd}/app/dist

CMD node index.js