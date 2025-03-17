const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"product"
        }
    ],
    total:{
        type:Number
    }
})
const cart = mongoose.model('cart',cartSchema);
module.exports={cart};