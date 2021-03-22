const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usatechsSchema = new Schema ({
    top:{
        type: String
    },
    title: {
        type: String
    },
    title : {
        type: String
    }
});

const Usatechs =mongoose.model('Usatechs',usatechsSchema);
module.exports = Usatechs;
