'use strict';
const express = require('express');
const userModel = require('../../models/admin/User.model');
const moment =  require('moment');
const bcrypt = require('bcrypt-nodejs');
const jwtService = require('../../services/jwt');
const UserModel = require('../../models/admin/User.model');
const { res } = require('express');


function home(req,res,next){
    res.status(202).send({message: "Welcome! at the start of the tibii API manager"})
} 

function saveUser(req,res,next){
    const params =  req.body;
    var user = new UserModel();
    if(params.name && params.email && params.password){
        user.name = params.name;
        user.lastName = params.lastName;
        user.email = params.email;
        user.passwordUser = params.password;
        user.isAdmin = true;
        user.statusUser = true;
        // Sentencia para consultar la Base de Datos
        userModel.find({
            $or:[
                {email:user.email}
            ]
        })
        .exec((error,userRow)=>{
            if(error) return res.status(500).send({message:"Error in request to server"});
            if(userRow && userRow.length >= 1){
                return res.status(200).send({message:"El usuario que intenta guardar ya esta registrado"});
            }else{
                // Encriptar contraseña
                bcrypt.hash(params.password,null,null,(error,hash)=>{
                    if(error) return res.status(505).send({message:"Ha ocurrido un error"});
                    user.passwordUser = hash;
                    // Guardar usuario
                    user.save((error,userStored)=>{
                        if(error) return res.status(500).send({message:"An ocurred error with request to server"});
                        if(userStored){
                            console.log({newUser:userStored});
                            return res.status(202).send({message:"Usuario Creado Exitosamente!"});                            
                        }else{
                            return res.status(400).send({message:"Error, Verifique de nuevo"});
                        }
                    })
                })
            }

        })
    }else{
        return res.status(400).send({message:"Error, los campos no pueden estar vacios"});
    }

}
function loginUser(req, res){
    const params = req.body;
    const emailUser = params.email;
    const password = params.passwordUser;
    /*Query for check if data exists */
    userModel.findOne({email : emailUser},(error,user)=>{
        if (error) return res.status(500).send({ message: 'Error in req, check connection to database' });
        if(user){
            bcrypt.compare(password, user.passwordUser, (error, check) => {
                if (error) return res.status(500).send({ message: "Password couldn't be encrypted" });
                if(check){                
                    if(params.gettoken){
                        return res.status(200).send({token:jwtService.createToken(user)})
                    }else{ return res.status(200).send(user)}
                }else{ return res.status(404).send({message:'user not was identified'})}
            
            });
        }else{return res.status(404).send({message:'The user no exists'})}
    })
}

function getUser(req,res){
    /*We collect the id by URL, when it is by URL we use .params, when it is by post or get we use .body*/
    const userId = req.params.id;
    userModel.findById(userId, (error, user) => {
        /*validate if exists any error with connection that database */
        if(error) return res.status(500).send({message:'was ocurred an error connection or search'})
        if(!user) return res.status(404).send({message:'No se encuentra el usuario o no existe'})
        return res.status(200).send({user});
    });
}

async function getUsers (req,res,next){
    try {
        const user = await userModel.find({});
        return res.status(200).send({user});
    } catch (error) {
        next();
        return res.status(404).send(error);   
         
    }
}

/*async function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;
   await userModel.findByIdAndUpdate({_id:userId}, update, { new: true }, (error, userUpdated) => {
        if (error) return res.status(500).send({ message: 'Error request, error in the server' });
        if (!userUpdated) return res.status(404).send({ message: 'Error, not was updated client' });
        console.log( userUpdated );
        return res.status(202).send({ message: "Usuario actualizado correctamente" });
    });

}*/
function updateUser(req, res){
    //var clientId = req.params.id;
    //var update = req.body;
    await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },(error, clientUpdated) => {
        if (error) return res.status(500).send({ message: 'Error request, error in the server' });
        if (!clientUpdated) return res.status(404).send({ message: 'Error, not was updated client' });
        return res.status(202).send({ Client: clientUpdated });
    });    
}
function deleteUser(req, res){
    //var clientId = req.params.id;
    //var update = req.body;
    await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true },(error, clientUpdated) => {
        if (error) return res.status(500).send({ message: 'Error request, error in the server' });
        if (!clientUpdated) return res.status(404).send({ message: 'Error, not was updated client' });
        return res.status(202).send({ Client: clientUpdated });
    });    
}

module.exports = {
    home,
    saveUser,
    loginUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser
}
