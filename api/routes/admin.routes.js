'use strict';
const express = require('express');
const Router =  express.Router();

// Import controllers
const userController =  require('../controllers/admin/users.controller');
const productController = require('../controllers/admin/products.controller');
const companyController = require('../controllers/admin/companies.controller');

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

// Routes Products
Router.post('/products', productController.saveProduct);
Router.get('/products/:id',productController.getProduct);
Router.get('/products',productController.getProducts);
Router.put('/products/:id',productController.updateProduct);
Router.delete('/products/:id',productController.deleteProduct);

// Routes Companies
Router.post('/companies', companyController.saveCompany);
Router.put('/companies/:id', companyController.updateCompany);

module.exports = Router;