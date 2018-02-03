const express = require('express');
const router = express.Router();

router.get('/register', (req, res, next) => {
    res.json({success: true, msg: 'from api'});
});

module.exports = router;