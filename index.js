const express = require('express');
const app = express();
const path = require('path');
const apiData = require('./plant.json');

const apiData2 = require('./cars.json');
const port = 3000;

app.use((req, res, next)=>{
    console.log(`${req.method} request for ${req.url}`);
    next();
});


//used to send a default message
// app.get('/', (req, res) => res.send('Hello World!'));



app.use(express.static('public'));
//all files must be included
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/css', express.static(path.join(__dirname,'public/css')));



//set the route for index.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
//set the route for about.html
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
});
//get access to api data
app.get('/plant', (req, res)=>{
    res.json(apiData);
});
app.get('/cars', (req, res)=>{
    res.json(apiData2);
});

// 
// app.get('/plant_family/p=:plant_family', (req,res)=>{
//   const plantParam = req.params.plant_family;
//   if ((plantParam === 'Hydrangeaceae') || (plantParam === 'Polemoniaceae')) {
//     let filteredArray = [];
//     for (let i = 0; i < apiData.length; i++){
//       if(plantParam.toLowerCase() === apiData[i].plant_family.toLowerCase()){
//         filteredArray.push(apiData[i]);
//       }
//     }
//     res.send(filteredArray)
//   } else {
//     res.send('Invalid Parameter')
//   }
// });


app.get('/cars/name=:first_name&car=:car_model', (req,res)=>{
  const nameParam = req.params.first_name;
  const carParam = req.params.car_model;


    let filteredArray = [];
    for (let i = 0; i < apiData2.length; i++){
      if((nameParam.toLowerCase() === apiData2[i].first_name.toLowerCase()) && (carParam.toLowerCase() === apiData2[i].car_model.toLowerCase())){
        filteredArray.push(apiData2[i]);
      }
    }
    res.send(filteredArray)
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
