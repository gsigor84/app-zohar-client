const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const intrendsSchema = new Schema({
    top:{
        type:String
    },
    title: {
        type:String
    },
    link: {
        type:String
    }

})

const Intrends = mongoose.model('Intrends', intrendsSchema)
module.exports = Intrends;