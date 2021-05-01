const winston = require('winston');
// const winston = _winston.configure({
//   transports: [
//     new (_winston.transports.File)({ filename: 'producer.log' })
//   ]
// });

const broker = require('./broker');

broker.start().catch((err) => {
  winston.error(err);
});
