const express = require('express');
const router = express.Router();
const product= require('../models/watchesFormat');
const mongoose= require ('mongoose');

router.get('./', (req,res,next)=> {
    res.status(200).json({
        message: "GET req works "
    });
});

router.post('./', (req,res,next)=> {
   const products = new product({
    _id: new mongoose.Types.ObjectId,
    type: req.body.type ,
    price: req.body.price,
    img: req.body.img,
    description: req.body.description
   });
   product.save()
   .then(result=> {
    console.log(result) ;

   })
   .catch(err => console.log(err));
   res.status(201).json({
    message: 'created a product with POST' ,
    createdProduct: products
   });
    });

    router.get('./:productsID', (req,res,next)=> {
        const id = req.params.productsID;
        product.findById(id)
        .exec()
        .then(doc=> {
            console.log(doc);
            res.status(200).json(doc)
        })
        .catch(err=> {
            console.log(err) ;
            res.status(500).json({error: err}) ;
        });
    });

module.exports= router ;