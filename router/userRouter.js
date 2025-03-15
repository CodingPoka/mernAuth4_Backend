



const express=require("express");
const { registerUser, loginUser, logoutUser, addItem, viewItems } = require("../controller/userController");
const router=express.Router();

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://mernauth4-frontend.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200); // ✅ Properly handle preflight request
    }

    next();
});

router.post("/register",registerUser);
router.post("/login",loginUser);

// Route for logging out the user
router.post('/logout', logoutUser);

// Route for adding an item
router.post('/addItem', addItem);

// Route for viewing all items
router.get('/viewItems', viewItems);




module.exports=router;