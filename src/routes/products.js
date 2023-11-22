const express = require('express');
const productsSchema = require('../model/products.js')

const router = express.Router();

//create user
router.post('/products', (req,res) => {
    const products = productsSchema(req.body);
    products.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

//get all users
router.get('/products', (req,res) => {
    productsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
})

//get a user
router.get('/products/:id', (req,res) => {
    const { id } = req.params;
    productsSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// update a user
router.put('/products/:id', (req,res) => {
    const { id } = req.params;
    const {name, price, stock} = req.body;
    productsSchema
    .updateOne({_id: id},{$set: {name, price, stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//delete a user
router.delete('/products/:id', (req,res) => {
    const { id } = req.params;
    productsSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router; 