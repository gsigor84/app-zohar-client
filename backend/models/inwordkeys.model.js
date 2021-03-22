const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const inwordkeysSchema = new Schema({
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

const Inwordkeys = mongoose.model('Inwordkeys', inwordkeysSchema)
module.exports = Inwordkeys;