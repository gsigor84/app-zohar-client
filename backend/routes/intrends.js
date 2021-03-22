const router = require('express').Router();
let Intrends = require('../models/intrends.model')

router.route('/').get((req,res) => {
    Intrends.find().limit(13)
        .then(intrends => res.json(intrends) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;