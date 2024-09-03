const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productname : {
        type: String,
        required: true
    },
    productprice : {
        type: Number,
        required: true
    },
    brandname:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    }
})

const Product = mongoose.model("Product",schema);

module.exports = Product;