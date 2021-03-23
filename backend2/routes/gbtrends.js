const router = require('express').Router();
let Gbtrends = require('../models/gbtrends.model')

router.route('/').get((req,res) => {
    Gbtrends.find()
        .then(gbtrends => res.json(gbtrends) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;