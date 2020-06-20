'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema =Schema({
    name : String,
    lastName : String,
    profileImage : String,
    email : String,
    passwordUser : String,
    isAdmin : Boolean,
    statusUser : Boolean
}); 

module.exports = mongoose.model('USERS',UserSchema);