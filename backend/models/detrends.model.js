const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const detrendsSchema = new Schema({
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

const Detrends = mongoose.model('Detrends', detrendsSchema)
module.exports = Detrends;