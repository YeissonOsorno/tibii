'use strict';
const express = require('express');

function home(req,res,next){
    res.status(202).send({message:"Welcome! at the start of the tibii API client"})
}

module.exports = {
    home
}
