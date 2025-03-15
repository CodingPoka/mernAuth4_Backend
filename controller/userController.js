


 // Import the schema/model
 const Register=require("../schema/userSchema");

// Controller for registering a new user
exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate required fields
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        // Check if the email already exists
        const existingUser = await Register.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already registered!' });
        }

        // Create a new user
        const newUser = new Register({
            name,
            email,
            password
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!', user: newUser });
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for logging in a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input fields
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required!' });
        }

        // Find the user by email
        const user = await Register.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'Incorrect email!' });
        }

        // Check if the password matches
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password!' });
        }

        res.status(200).json({ message: 'Login successful!', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller for logging out a user
exports.logoutUser = (req, res) => {
    try {
        // Clear the authentication cookie
       // res.clearCookie('token'); // Replace 'token' with your cookie name
        res.status(200).json({ message: 'Logout successful!' });
    } catch (error) {
        console.error('Error during logout:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


 // Import the Item schema/model
 const Item=require("../schema/ItemSchema2");
// Controller for adding a new item
exports.addItem = async (req, res) => {
    try {
        const { itemName, price } = req.body;

        // Validate required fields
        if (!itemName || !price) {
            return res.status(400).json({ message: 'Item name and price are required!' });
        }

        // Create a new item
        const newItem = new Item({
            itemName,
            price
        });

        // Save the item to the database
        await newItem.save();

        res.status(201).json({ message: 'Item added successfully!', item: newItem });
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


// Controller for viewing all items
exports.viewItems = async (req, res) => {
    try {
        // Fetch all items from the database
        const items = await Item.find();

        // Check if there are no items
        if (items.length === 0) {
            return res.status(404).json({ message: 'No items found!' });
        }

        res.status(200).json({ message: 'Items retrieved successfully!', items });
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};