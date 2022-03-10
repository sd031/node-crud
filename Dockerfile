FROM --platform=linux/amd64 node:16.13.0
ENV NODE_ENV=production

WORKDIR /node_app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]