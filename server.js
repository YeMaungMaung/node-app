const http = require('http');

const app = require('./app');

const { PORT, NODE_ENV } = process.env;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Nodejs App running → PORT ${PORT} in ${NODE_ENV}!`);
});
