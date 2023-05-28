FROM node:17-alpine3.12

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start", "app"]