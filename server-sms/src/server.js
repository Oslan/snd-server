const app = require('express');
const cors = require('cors');
const routes = require('./routes');


const server = app();

server.use('/api',routes);
server.use(cors());

server.listen(3333,()=>{

});