const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const eutechskeysSchema = new Schema({
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

const Eutechskeys = mongoose.model('Eutechskeys', eutechskeysSchema)
module.exports = Eutechskeys;