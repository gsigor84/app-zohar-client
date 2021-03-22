const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intechsSchema = new Schema ({
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

const Intechs =mongoose.model('Intechs',intechsSchema);
module.exports = Intechs;