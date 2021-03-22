const mongoose = require('mongoose')

const Schema =mongoose.Schema

const ustechSchema= new Schema({
    top:{
        type:String
    },
    title:{
        type:String
    },
    link:{

    }
})

const Ustech =mongoose.model('Ustech', ustechSchema);
module.exports =Ustech;