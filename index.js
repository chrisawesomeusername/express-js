const express = require('express');
const app = express();
const path = require('path');
const apiData = require('./plant.json');
const port = 3000;

app.use((req, res, next)=>{    
    console.log(`${req.method} request for ${req.url}`);
    next();
});


//used to send a default message
// app.get('/', (req, res) => res.send('Hello World!'));



app.use(express.static('public'));

app.use('/boostrap', express.static(path.join(__dirname, node_modules/bootstrap/dist)));
app.use('/jquery', express.static(path.join(__dirname, node_modules/jquery/dist)));
app.use('/popper', express.static(path.join(__dirname, node_modules/@popperjs/core/dist/umd)));


//set the route for index.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
//set the route for about.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
});
//get access to plant data
app.get('/plant', (req, res)=>{
    res.json(apiData);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))