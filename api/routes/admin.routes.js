'use strict';
const express = require('express');
const Router =  express.Router();

// Import controllers
const userController =  require('../controllers/admin/users.controller');

// Routes of API
Router.get('/',userController.home);
// Routes Users
Router.post('/users',userController.saveUser);
Router.post('/account',userController.loginUser);

module.exports = Router;