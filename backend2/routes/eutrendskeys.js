const router = require('express').Router();
let Usatrendskeys = require('../models/eutrendskeys.model')

router.route('/').get((req,res) => {
    Usatrendskeys.find()
        .then(eutrendskeys => res.json(eutrendskeys) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;