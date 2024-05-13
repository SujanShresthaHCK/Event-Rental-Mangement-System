const app = require ('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://np03cs4a220191:Vbh2YUhlLkt845Ob@test-pro-db.ovwbanl.mongodb.net/?retryWrites=true&w=majority&appName=test-pro-db")

const User = require('./userModels');
http.listen(3000, function(){
    console.log('Server is running');
})