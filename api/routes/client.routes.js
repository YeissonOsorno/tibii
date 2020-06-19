'use strict';
const express = require('express');
const Router = express.Router();

// Import controllers
const testController = require('../controllers/client/test.controller');
// Routes of API
Router.get('/',testController.home);

module.exports = Router;