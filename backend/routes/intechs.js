const router = require('express').Router();
let Intechs = require('../models/intechs.model')

router.route('/').get((req,res) => {
    Intechs.find().limit(13)
        .then(intechs => res.json(intechs) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;