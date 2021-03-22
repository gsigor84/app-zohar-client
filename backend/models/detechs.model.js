const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const detechsSchema = new Schema ({
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

const Detechs =mongoose.model('Detechs',detechsSchema);
module.exports = Detechs;