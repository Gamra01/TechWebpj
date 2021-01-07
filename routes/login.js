const { Router } = require("express");
const jwt = require('jsonwebtoken');
const router = Router();
const User = require("../models/user");

router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) return res.status(400).json({ message: 'Please enter an email and password' });

    try {
        const checkUser = await User.findOne({
            email: email,
            password: password,
        });

        if (checkUser) {
            const token = jwt.sign({ email, admin: false }, process.env.JWT_SECRET);
            return res.status(200).json({ token });
        }

        res.status(404).json({ message: 'Incorret information' });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
