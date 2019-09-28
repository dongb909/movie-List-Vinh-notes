
//import express framework
const express = require('express');
const path = require('path');
const controller = require('./controllers/controller.js')

//set port# to listen on 
const PORT = 3000;

//create server
const app = express();

//serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/movies', controller.getMovies)   //used to have handleget here. but we are separating concerns a bit more 

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));

