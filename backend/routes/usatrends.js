const router = require('express').Router();
let Usatrends = require('../models/usatrends.model')

router.route('/').get((req,res) => {
    Usatrends.find()
        .then(usatrends => res.json(usatrends) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;