const express = require('express');
const logger = require('morgan');
const path = require('path');
const axios = require('axios');
const fs = require('fs');
const app = express();

app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    let fileReaded = fs.readFileSync("simple.txt", 'utf-8');
    res.render('index', {text: fileReaded, title: "Основная страница"});
})

app.get('/about', function (req, res) {
    
   /* axios.get('about.txt').then(data => {
        console.log(data);
        res.render('index', {text: "faf", title: "data"});
   })*/
   let fileReaded = fs.readFileSync("about.txt", 'utf-8');
   res.render('index', {title: "О нас", text: fileReaded});
})

app.listen(3000, function () {
    console.log("Запущен");
})