'use strict';
const mongoose = require('mongoose');
require('dotenv').config({ path: './variables.env' });

const app = require('./app');

const PORT = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

mongoose.Promise = global.Promise;

mongoose.connect(connectionString,{useNewUrlParser:true,useUnifiedTopology:true})
.then(function callBackMongoDB(){
    console.log('Welcome!, The connection with database was established correctly');
    app.listen(PORT,function callBackExpress(){
        console.log(`Server in NodeJS runnig and listening in port: ${PORT}`);
    })
}).catch(error => console.log(error));


