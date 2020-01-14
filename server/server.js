


const express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
var authroute = require('./routes/authroute');
var todoroute = require('./routes/todoroute');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true} , ()=>
console.log("Success connection to dB"));

app.use(bodyParser.json());

app.use('/todo', todoroute);
app.use('/auth' , authroute);



app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
