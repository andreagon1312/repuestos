const express = require('express');
const app = express();
const routerAPI = require('./server/router');
const cors = require('cors');


app.use(cors());
app.use(express.json());
routerAPI(app);

app.use('/', (req, res)=>{
    res.send("<h1>Funciona</h1>");
});

app.listen(3100, () =>{
    console.log('aplicacion corriendo en el puerto 3100');
});