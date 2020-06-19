'use strict';
const express = require('express');
const Router = express.Router();

// Routes of API
Router.get('/',function Home(req,res,next){
    res.status(202).send({message:"Welcome! at the start of the tibii API client"})
});

module.exports = Router;