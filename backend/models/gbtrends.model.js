const mongoose = require('mongoose')

const Schema =mongoose.Schema;

const gbtrendsSchema = new Schema({
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

const Gbtrends = mongoose.model('Gbtrends', gbtrendsSchema)
module.exports = Gbtrends;