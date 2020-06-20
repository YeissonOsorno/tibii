'use strict';
const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'secret_key_user';

exports.createToken =  function(modelUser){
    let payload = {
        sub:modelUser.id,
        name:modelUser.name,
        lastName : modelUser.lastName,
        email:modelUser.email,

        iat:moment().unix,
        exp:moment.add(10,'minutes').unix
    };
    return jwt.encode(payload,secret)
};
