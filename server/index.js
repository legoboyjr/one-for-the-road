const express = require('express');
const server = express();
const routers = require('./routers');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//set up environment variables
dotenv.config();

//grab the mongo uri
const { MONGO_URI } = process.env;

//connect to the database
mongoose.connect(MONGO_URI, { useNewUrlParser: true });

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

//routers: use
server.use('/api/notes', routers.notes);


server.get('/', (req, res) => res.status(200).send('works'));

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});
