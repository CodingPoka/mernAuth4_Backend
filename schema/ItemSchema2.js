const mongoose = require('mongoose');

// Define the item schema
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true, // Ensures the item name is mandatory
        trim: true // Removes unnecessary spaces from the string
    },
    price: {
        type: Number,
        required: true, // Ensures the price is mandatory
        min: 0 // Enforces that price must be a positive number
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the item model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
