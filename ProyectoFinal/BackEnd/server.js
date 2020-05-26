//Importar librerias
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

app.use(morgan('dev'));

//Se configura el body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//URL de la base de datos
//TEMPORAL
var uri = "mongodb+srv://admin:admin@app-yj5wi.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión'));

db.once('open', function(){
    console.log("Me conecté a MongoDb")
});

//Middleware
var router = express.Router();

//Función que habilita el middleware
router.use(function(req,res,next){
    next();
});

// Ruta base
router.get('/', function(req, res){
    res.json({
        mensaje: "Keep alive",
    });
});
router.post('/', function(req, res){
    res.json({
        mensaje: "Keep alive",
    });
});


//Se declaran los modelos

//Endpoints 
app.use('/api', router); //url base de nuestro api que tiene las rutas en el routerglobal. fetch =require('node-fetch');

app.listen(port); //Se abre el puerto del servidor

console.log("Servidor arriba");
