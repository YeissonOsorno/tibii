'use strict';
 const mongoose = require('mongoose');
 let Schema = mongoose.Schema;

 const ProductSchema =  Schema({
     name : String,
     price : Number,
     description : String,
     quantity : Number,
     category:String,
     image:String
 });

 module.exports = mongoose.model('PRODUCTS',ProductSchema);