const express = require('express');
const mongoose = require('mongoose');
const mongoURI = require('./model/mongoConnection')
const app = express();
const port = 5000;

app.get('/',(req, res) => {
  res.send('This is backend side of Find A Project');
})

mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(port, () => {
        console.log('Server started, listening at localhost:5000');
        }))
        .catch((err) => console.log(err));


