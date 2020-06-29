'use strict';
const companyModel = require('../../models/admin/Company.model');

function saveCompany(req,res){
    const params =  req.body;
    var company = new companyModel();
    if(params.name && params.phone && params.categoryCode){
        company.name = params.name;
        company.phone = params.phone;
        company.categoryCode = params.categoryCode;
        company.overview = params.overview;
        company.location.city = params.city; 
        company.location.state = params.state; 
        company.location.country = params.country; 
        company.location.address = params.address; 
        
        // Sentencia para consultar la Base de Datos
        companyModel.find({
            $or:[
                {name:company.name}
            ]
        })
        .exec((error,companyRow)=>{
            if(error) return res.status(500).send({message:"Error in request to server"});
            if(companyRow && companyRow.length >= 1){
                return res.status(200).send({message:"La empresa que intenta guardar ya esta registrado"});
            }else{            
                company.save((error,companyStored)=>{
                    if(error) return res.status(500).send({message:"An ocurred error with request to server"});
                    if(companyStored){
                        console.log({newCompany:companyStored});
                        return res.status(202).send({message:"Empresa registrada Exitosamente!"});                            
                    }else{
                        return res.status(400).send({message:"Error, Verifique de nuevo"});
                    }
                })
            
            }

        })
    }else{
        return res.status(400).send({message:"Error, los campos no pueden estar vacios"});
    }
}

function updateCompany(request, response){
    var companyId = request.params.id;
    var update = request.body;
    companyModel.findByIdAndUpdate(companyId, update, { new: true }, (error, companyUpdated) => {
        if (error) return response.status(500).send({ message: 'Error request, error in the server' });
        if (!companyUpdated) return response.status(404).send({ message: 'Error, not was updated company' });
        return response.status(202).send({ company: companyUpdated });
    });
}

module.exports = {
    saveCompany,
    updateCompany
}