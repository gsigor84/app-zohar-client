const router = require('express').Router();
let Detechs = require('../models/detechs.model')

router.route('/').get((req,res) => {
    Detechs.find().limit(13)
        .then(detechs => res.json(detechs) )
        .catch(err =>res.status(400).json('Error'+err));
})

module.exports = router;