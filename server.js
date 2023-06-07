const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('accueil');
})

app.get('/GET', function(req, res){
    res.render('get');
})

app.get('/POST', function(req, res){
    res.render('post');
})

app.get('/PUT', function(req, res){
    res.render('put');
})

app.get('/DELETE', function(req, res){
    res.render('delete');
})

app.listen(3000, function(){
    console.log("Server is running at http://localhost:3000");
})