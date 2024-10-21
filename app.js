require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Israel Lozano',
        titulo: 'Curso de Node'
    });
});
// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Israel Lozano',
        titulo: 'Curso de Node'
    });
    
});
app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Israel Lozano',
        titulo: 'Curso de Node'
    });
});

// app.get('*', (req, res) => res.send('404 Page not found'))

app.listen(port,'0.0.0.0', () => console.log(`Example app listening on port ${port}!`))