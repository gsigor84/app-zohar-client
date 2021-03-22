const router = require('express').Router();
let Inwordkeys = require('../models/inwordkeys.model')

router.route('/').get((req,res) => {
    Inwordkeys.find()
        .then(inwordkeys => res.json(inwordkeys) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;