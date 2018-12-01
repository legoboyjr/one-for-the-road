const express = require('express');
const server = express();

const port = process.env.PORT || 8080;

//middleware: import
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');
const compression = require('compression');


//middleware: use
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(logger('dev'));
server.use(compression());
server.use(helmet());


server.get('/', (req, res) => res.status(200).send('works'));

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});
