'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const CompanySchema =  Schema({
    name:String,
    location :{
        city : String,
        state : String,
        country : String,
        address :String
    },
    phone : Number,
    overview : String,
    categoryCode : String,
    image : String
});

module.exports = mongoose.model('COMPANIES',CompanySchema);