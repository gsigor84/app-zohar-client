const express = require('express');
const cors = require('cors');
const mongoose =require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true,  useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connected")
})

const usatrendsRouter = require('./routes/usatrends');
const gbtrendsRouter = require('./routes/gbtrends');
const detrendsRouter = require('./routes/detrends');
const intrendsRouter = require('./routes/intrends');
const usatechsRouter = require('./routes/usatechs');
const gbtechsRouter = require('./routes/gbtechs');
const detechsRouter = require('./routes/detechs');
const intechsRouter = require('./routes/intechs');
const usatrendskeysRouter = require('./routes/usatrendskeys');
const eutrendskeysRouter = require('./routes/eutrendskeys');
const eutechskeysRouter = require('./routes/eutechskeys');
const inwordkeysRouter = require('./routes/inwordkeys');


app.use('/usatrends',usatrendsRouter);
app.use('/gbtrends',gbtrendsRouter);
app.use('/detrends',detrendsRouter);
app.use('/intrends',intrendsRouter);
app.use('/usatechs',usatechsRouter);
app.use('/gbtechs',gbtechsRouter);
app.use('/detechs',detechsRouter);
app.use('/intechs',intechsRouter);
app.use('/usatrendskeys',usatrendskeysRouter);
app.use('/eutrendskeys',eutrendskeysRouter);
app.use('/eutechskeys',eutechskeysRouter);
app.use('/inwordkeys',inwordkeysRouter);






app.listen(port,()=> {
    console.log(`Server is running`);
})