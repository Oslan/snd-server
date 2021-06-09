const app = require('express');
const cors = require('cors');
const routes = require('./routes');

server.use(routes);
const server = app();


server.use(cors());

server.listen(process.env.PORT || 3000,()=>{
  console.log('RODANDO');
});
