'use strict';
const express = require('express');
const app =  express();

// Import Routes
const adminRoutes = require('./routes/admin.routes');
const clientRoutes = require('./routes/client.routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// API write and read permissions or CORS permissions
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// use Routes
app.use('/admin',adminRoutes);
app.use('/client',clientRoutes);

module.exports = app;

