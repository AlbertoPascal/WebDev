//Importar librerias
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors");

//Configurar el cors
var corsOptions = {
    origin: "*", //Wildcard
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.options("*", cors()); //Utiliza wildcard para todas las fuentes

//Se agrega morgan al proyecto
app.use(morgan('dev'));

//Se configura el body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//URL de la base de datos
//TEMPORAL
var uri = "mongodb+srv://user_web:AllMightyWeb2020.@webapp-7rzpk.mongodb.net/AllMightyBudget?retryWrites=true&w=majority";

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
var User = require("./app/models/Users");
//Endpoints 
router.route("/user").post(async function (req, res) {
    var new_user = new User();
   
    new_user.nombre = req.body.nombre;
    new_user.apellido = req.body.apellido;
    new_user.profilePic = req.body.profilePic;
    new_user.user_auth_id = req.body.user_auth_id;
    new_user.email = req.body.email;
    new_user.isAdmin = req.body.isAdmin;
    new_user.Family_ids = req.body.Family_ids;
    new_user.job = req.body.job;

    console.log(new_user);
    try {
      await new_user.save(function (err) {
        if (err) {
          console.log(err);
          res.send(err);
        }
      });
      res.json({ mensaje: "Usuario creado" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }).get(function(request,response){
      User.find(function(err,usuarios){
          if(err){
              response.send(err);
          }
          response.status(200).send(usuarios);
      });
  });

router.route('/user/:user_auth_id')
.get(function(request, response){
    User.find({user_auth_id: request.params.user_auth_id}, function(error, usuario){
        console.log("Finding user_auth_id of " + request.params.user_auth_id);

        console.log(request.params);
        if(error)
        {
            response.status(404).send({message:"not found"});
            return
        }
        if(usuario === null) //ayuda porque si pongo un id de algo que no es objeto, existe y no es error arriba pero entra aquí porque no es alumno
        {
            res.status(404).send({usuario:"not found"});
            return
        }
        response.status(200).send(usuario);
    });
});
app.use('/api', router); //url base de nuestro api que tiene las rutas en el routerglobal. fetch =require('node-fetch');

app.listen(port); //Se abre el puerto del servidor

console.log("Servidor arriba");
