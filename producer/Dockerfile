FROM node:8.11.1-alpine

LABEL maintainer="robertoachar@gmail.com"

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app" ]

RUN npm install -g nodemon

CMD npm i && nodemon -L src/index.js 
# CMD [ "npm", "i", "&&", "nodemon", "-L", "src/index.js" ]
