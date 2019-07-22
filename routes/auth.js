const express = require('express');
const router = express.Router();


// @route    GET api/auth
// @desc     get user
// @access   Private
router.get('/', (req, res) => {
    res.send('Get logged in user');
});

// @route    POST api/auth
// @desc     authenticate user/ get token
// @access   Public
router.post('/', (req, res) => {
    res.send('Authenticate user');
});



module.exports = router;