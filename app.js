const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
 
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/',(req, res) => {

    res.render('home');

    app.get('/contact', (req, res) => {
        res.render('contact', { contactContenido: contactContent });
      });

});


app.listen(4000,() =>{
    console.log('Server started on local port 4000 bitchaos');
});




