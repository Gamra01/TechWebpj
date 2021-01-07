const { Router } = require("express");
const router = Router();
const User = require("../models/user");

router.get('/', (_, res) => {
    res.json({ message: 'OK' });
});

router.post("/", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) return res.status(400).json({ message: 'Please enter an email and password' });

    try {
        const checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.status(400).json({ message: 'email already used.' });
        }
        await User.create({ email, password });
        res.status(201).json({ message: 'success' });
    } catch (error) {
        console.log('error:', error);
    }
});

module.exports = router;
