const router = require('express').Router();
let Detrends = require('../models/detrends.model')

router.route('/').get((req,res) => {
    Detrends.find().limit(16)
        .then(detrends => res.json(detrends) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;