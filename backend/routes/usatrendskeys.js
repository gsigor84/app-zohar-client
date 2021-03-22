const router = require('express').Router();
let Usatrendskeys = require('../models/usatrendskeys.model')

router.route('/').get((req,res) => {
    Usatrendskeys.find()
        .then(usatrendskeys => res.json(usatrendskeys) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;