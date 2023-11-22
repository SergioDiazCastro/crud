const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    stock:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('product', productsSchema);