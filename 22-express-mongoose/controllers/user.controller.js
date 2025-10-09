const User = require("../models/user.model");

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.find();
            res.json({
                message: "Successfully get all users",
                data: users
            })
        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    getUserById: (req, res) => {},
    createUser: (req, res) => {
        try {
            const {name, email, password} = req.body;
            const newUser = new User({
                name,
                email,
                password
            });
            newUser.save()
              
            res.status(201).json({message: "User created successfully"});

        } catch (error) {
            res.status(500).json({message: "Internal server error", error: error.message});
        }
    },
    updateUser: (req, res) => {},
    deleteUser: (req, res) => {}
}
