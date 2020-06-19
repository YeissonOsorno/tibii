'use strict';
const express = require('express');
const app =  express();

// Do it Routes
const Routes = require('');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Permisos de escritura y lectura de la API o permisos de CORS
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// Do it
app.use('/api',Routes);

module.exports = app;

