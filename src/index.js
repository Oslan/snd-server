const app = require('express');
const cors = require('cors');
const routes = require('./routes');

const server = app();

server.use(cors());
server.use(routes);

server.listen(process.env.PORT || 3000,()=>{
  console.log('RODANDO');
});
