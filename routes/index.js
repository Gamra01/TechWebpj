const { Router } = require("express");
const router = Router();

router.get('/', (_, res) => {
    // database check....
    // ---
    // respond
    res.json({ message: 'THIS IS INDEX PAGE!!!!!' });
});


module.exports = router;
