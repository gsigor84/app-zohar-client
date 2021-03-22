const router = require('express').Router();
let Usatechs = require('../models/usatechs.model');

router.route('/').get((req, res)=>{
    Usatechs.find().limit(13)
        .then(usatechs => res.json(usatechs))
        .catch(err => res.status(400).json('Error'+err));
});

module.exports=router;
