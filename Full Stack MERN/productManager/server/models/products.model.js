const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "A title is required"],
        minlength: [2, "Title must be at least 2 characters"]
    },
    price: { 
        type: Number,
        required: [true, "There must be a price!"]
    },
    description: {         
        type: String, 
        required: [true, "A description"],
        minlength: [5, "Description must be at least 5 characters"] 
    }
}, { timestamps: true })
module.exports.Product = mongoose.model('Product', ProductSchema)