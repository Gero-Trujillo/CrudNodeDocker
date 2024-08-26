FROM node:20

WORKDIR /home/app

COPY . .

RUN npm install

EXPOSE 4000

CMD npm start