const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATA_BASE_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(()=> console.log('run data base :D'));

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || 3000,()=>{
    console.log('INIT');
});