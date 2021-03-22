const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gbtechsSchema = new Schema ({
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

const Gbtechs =mongoose.model('Gbtechs',gbtechsSchema);
module.exports = Gbtechs;
