const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const usatrendsSchema = new Schema({
    top:{
        type:String
    },
    title: {
        type:String
    },
    link: {
        type:String
    },
    date:{
        type:String
    }



})

const Usatrends = mongoose.model('Usatrends', usatrendsSchema)
module.exports = Usatrends;