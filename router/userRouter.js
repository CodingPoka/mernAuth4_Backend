



const express=require("express");
const { registerUser, loginUser, logoutUser, addItem, viewItems } = require("../controller/userController");
const router=express.Router();


router.post("/register",registerUser);
router.post("/login",loginUser);

// Route for logging out the user
router.post('/logout', logoutUser);

// Route for adding an item
router.post('/addItem', addItem);

// Route for viewing all items
router.get('/viewItems', viewItems);




module.exports=router;