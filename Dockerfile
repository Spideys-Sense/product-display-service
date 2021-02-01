FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install --only=production
RUN npm build
EXPOSE 12345
CMD [ "node", "server" ]
# RUN npm run start.docker