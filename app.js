const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    res.send('el pepe');
});
app.get('/panel', (req,res) => {
    res.render('workspaces/panel');
});

app.listen(3000, ()=>{
    console.log('server running on port 3000');
});
