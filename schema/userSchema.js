

const mongoose=require("mongoose");

// Define the schema
const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Makes it mandatory
        trim: true, // Removes unnecessary spaces
      
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        trim: true,
       
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Ensures the password has at least 6 characters
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields automatically

// Create the model
const Register = mongoose.model('Register', registerSchema);

module.exports = Register;
