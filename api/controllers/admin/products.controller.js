'use strict';
const productModel = require('../../models/admin/Product.model');

function saveProduct(req,res){
    const params =  req.body;
    var product = new productModel();
    if(params.name && params.price && params.category){
        product.name = params.name;
        product.price = params.price;
        product.description = params.description;
        product.quantity = params.quantity;        
        // Sentencia para consultar la Base de Datos
        productModel.find({
            $or:[
                {name:product.name}
            ]
        })
        .exec((error,productRow)=>{
            if(error) return res.status(500).send({message:"Error in request to server"});
            if(productRow && productRow.length >= 1){
                return res.status(200).send({message:"El producto que intenta guardar ya esta registrado"});
            }else{            
                product.save((error,productStored)=>{
                    if(error) return res.status(500).send({message:"An ocurred error with request to server"});
                    if(productStored){
                        console.log({newProduct:productStored});
                        return res.status(202).send({message:"Producto Creado Exitosamente!"});                            
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

function getProduct(req,res){
    /*We collect the id by URL, when it is by URL we use .params, when it is by post or get we use .body*/
    const productId = req.params.id;
    productModel.findById(productId, (error, product) => {
        /*validate if exists any error with connection that database */
        if(error) return res.status(500).send({message:'was ocurred an error connection or search'})
        if(!product) return res.status(404).send({message:'No se encuentra el usuario o no existe'})
        return res.status(200).send({product});
    });
}

async function getProducts (req,res,next){
    try {
        const product = await productModel.find({});
        return res.status(200).send({product});
    } catch (error) {
        next();
        return res.status(404).send(error);   
         
    }
}



function updateProduct(request, response){
    var productId = request.params.id;
    var update = request.body;
    productModel.findByIdAndUpdate(productId, update, { new: true }, (error, productUpdated) => {
        if (error) return response.status(500).send({ message: 'Error request, error in the server' });
        if (!productUpdated) return response.status(404).send({ message: 'Error, not was updated product' });
        return response.status(202).send({ product: productUpdated });
    });
}
function deleteProduct(req, res){
    var productId = req.params.id;
     productModel.findByIdAndRemove(productId,(error, productDeleted) => {
        if (error) return res.status(500).send({ message: 'Error request, error in the server' });       
         return res.status(202).send({message:"Producto eliminado correctamente"});
    });    
}

module.exports = {
    saveProduct,   
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}
