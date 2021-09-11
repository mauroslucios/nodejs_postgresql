FROM node:latest
MAINTAINER mauroslucios
WORKDIR /var/www/exemplo-nodejs
COPY ./ ./
RUN npm install 
RUN npm i pg
ENTRYPOINT ["npm","start"]
EXPOSE 3000
CMD ["node","server.js"]