const router = require('express').Router();
let Eutechskeys = require('../models/eutechskeys.model')

router.route('/').get((req,res) => {
    Eutechskeys.find()
        .then(eutechskeys => res.json(eutechskeys) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;