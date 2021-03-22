const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const eutrendskeysSchema = new Schema({
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

const Eutrendskeys = mongoose.model('Eutrendskeys', eutrendskeysSchema)
module.exports = Eutrendskeys;