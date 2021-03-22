const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const usatrendskeysSchema = new Schema({
    top:{
        type:String
    },
    keys: {
        type:String
    },
    date:{
        type:String
    }



})

const Usatrendskeys = mongoose.model('Usatrendskeys', usatrendskeysSchema)
module.exports = Usatrendskeys;