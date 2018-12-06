const express = require('express');
const server = express();
const routers = require('./routers');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

//set up environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

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
const staticPath = path.resolve(__dirname, '../client/build');
server.use(express.static(staticPath));

//routers: use
server.use('/api/notes', routers.notes);

if(process.env.NODE_ENV === 'production') {
  server.use('*', (req, res) => {
    const index = path.join(staticPath, 'index.html');
    res.sendFile(index);
  });
}

server.listen(port, () => {
  console.log(`Now listening on port: ${port}`);
});
