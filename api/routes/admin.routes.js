'use strict';
const express = require('express');
const Router =  express.Router();

// Import controllers
const userController =  require('../controllers/admin/users.controller');

// Routes of API
Router.get('/',userController.home);
// Routes Users
Router.post('/users',userController.saveUser);
Router.get('/users/:id',userController.getUser);
Router.get('/users',userController.getUsers);
Router.put('/users/:id',userController.updateUser);
Router.put('/users/:id',userController.deleteUser);

// Routes Json Web Token
Router.post('/account',userController.loginUser);

module.exports = Router;