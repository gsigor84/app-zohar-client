const router = require('express').Router();
let Gbtechs = require('../models/gbtechs.model');

router.route('/').get((req, res)=>{
    Gbtechs.find().limit(14)
        .then(gbtechs => res.json(gbtechs))
        .catch(err => res.status(400).json('Error'+err));
});

module.exports=router;
