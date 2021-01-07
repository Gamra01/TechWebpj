const { Router } = require("express");
const router = Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    const token = req.headers.authorization;

    if (!token) return res.status(400).json({ message: 'invalid token provided ' });

    const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
    console.log('isTokenValid:', isTokenValid);

    if (isTokenValid.admin) {
        return res.status(200).json({ message: 'you are admin' });
    }
    res.status(401).json({ message: 'you are not admin' });
});


module.exports = router;
