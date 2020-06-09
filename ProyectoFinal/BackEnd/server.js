//Importar librerias
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors");
//Librerias de JWT
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

//Configuración de cors
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

//Se define el puerto
var port = process.env.PORT || 8080;

//URL de la base de datos
var uri = "mongodb+srv://user_web:AllMightyWeb2020.@webapp-7rzpk.mongodb.net/AllMightyBudget?retryWrites=true&w=majority";

//Se conecta el backend a la base de datos mediante mongoose
mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión'));

db.once('open', function(){
    console.log("Me conecté a MongoDb")
});


// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://a01021323.auth0.com/.well-known/jwks.json'
    }),
  
    audience: 'https://allmighty.com/api',
    issuer: 'https://a01021323.auth0.com/',
    algorithm: ['RS256']
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
var Wishlist = require ("./app/models/Wishlist");
var Transaction = require ("./app/models/Transactions");
var Product = require('./app/models/Products');
const { response } = require('express');

//var Products = require ("./app/models/Products");
//Endpoints 


//Crear un usuario
router.route("/user").post(checkJwt, async function (req, res) {
  var new_user = new User();
  
  new_user.nombre = req.body.nombre;
  new_user.apellido = req.body.apellido;
  new_user.profilePic = req.body.profilePic;
  new_user.user_auth_id = req.body.user_auth_id;
  new_user.email = req.body.email;
  new_user.isAdmin = req.body.isAdmin;
  new_user.Family_ids = req.body.Family_ids;
  new_user.job = req.body.job;
  new_user.wishlist_id = req.body.wishlist_id;
  new_user.savings = req.body.savings;
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
//Obtener todos los usuarios
}).get( function(request,response){
    User.find(function(err,usuarios){
        if(err){
            response.send(err);
        }
        response.status(200).send(usuarios);
    });
});

//Obtener un usuario por id
router.route('/user/:user_auth_id')
.get(checkJwt, function(request, response){
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
          response.status(404).send({usuario:"not found"});
          return
      }
      response.status(200).send(usuario);
  });
});

//Crear una transaccion
router.route("/Transaction").post(checkJwt, async function (req, res) {
    console.log("Received a new post for transaction");
    var user_transaction = new Transaction();
    //Para ligarlo a las cuentas del usuario usarán el identificador del usuario
    user_transaction.user_sid = req.body.user_sid;
    //Aquí registraremos la cantidad de la operación. 
    user_transaction.quantity = req.body.quantity;
    //Con este campo se registra el motivo de la operación. Por ahora es obligatorio.
    user_transaction.comment = req.body.comment;
    //Con este campo registramos la moneda que se está manejando. Por lo general serán MXN
    user_transaction.currency = req.body.currency;
    //Con este campo registramos la dirección de la transacción. Es Saving? o es Cost?
    user_transaction.direction = req.body.direction;
    console.log("My new transaction should be ");
    console.log(user_transaction);
    try {
      await user_transaction.save(function (err) {
        if (err) {
          console.log(err);
          res.send(err);
        }
      });
      res.json({ mensaje: "Transacción registrada" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
  }).get(function(request,response){
      Transaction.find(function(err,lista){
          if(err){
              response.send(err);
          }
          response.status(200).send(lista);
      });
  });

//Crear una wishlist
router.route("/Wishlist").post( async function (req, res) {
    var user_wishlist = new Wishlist();
    user_wishlist.wishlist_id = req.body.wishlist_id;
    user_wishlist.Objects = [];
    
    console.log(user_wishlist);
    try {
      await user_wishlist.save(function (err) {
        if (err) {
          console.log(err);
          res.send(err);
        }
      });
      res.json({ mensaje: "Wishlist creada" });
    } catch (error) {
      res.status(500).send({ error: error });
    }
    //Obtener todas las wishlist
  }).get(function(request,response){  
      Wishlist.find(function(err,lista){
          if(err){
              response.send(err);
          }
          response.status(200).send(lista);
      });
  });

//Agregar un producto a una wishlist
router.route("/Wishlist/addItem/:wishlist_id").post(function (request, response) {

  Wishlist.find({wishlist_id: request.params.wishlist_id}, function(error, wishlist){
  
    if(error)
    {
        response.status(404).send({message:"not found"});
        return
    }
    else if(wishlist === null) //ayuda porque si pongo un id de algo que no es objeto, existe y no es error arriba pero entra aquí porque no es alumno
    {
        res.status(404).send({wishlist:"not found"});
        return
    }
    try {  
      new_product = new Product();
      new_product.titulo = request.body.titulo;
      new_product.foto = request.body.foto;
      new_product.precio = request.body.precio;

      wishlist.Objects.push(new_product);

      response.status(200).json({ mensaje: "Producto agregado" });
    }
    catch (error) {
      response.status(500).send({ error: error });
    }
  });
});

//Obtener una wishlist por id
router.route("/Wishlist/:wishlist_id").get(function (request, response) {

  Wishlist.find({wishlist_id: request.params.wishlist_id}, function(error, wishlist){
  
    if(error)
    {
        response.status(404).send({message:"not found"});
        return
    }
    else if(wishlist === null) //ayuda porque si pongo un id de algo que no es objeto, existe y no es error arriba pero entra aquí porque no es alumno
    {
        response.status(404).send({wishlist:"not found"});
        return
    }
    
    response.status(200).send(wishlist);
  });
});

//Actualizar un usuario
router.route("/updateUser")
.get(async function(request, response){
  updated_user = new User();
  const params = {
    user_auth_id : request.body.user_auth_id,
  }
  updated_user.user_auth_id = request.body.user_auth_id;
  updated_user.nombre = request.body.nombre;
  updated_user.apellido = request.body.apellido;
  updated_user.job = request.body.job;
  updated_user.email = request.body.email;
  updated_user.profilePic = request.body.profilePic;
  updated_user.savings = request.body.savings;
  updated_user.isAdmin = request.body.isAdmin;
  updated_user.wishlist_id = request.body.wishlist_id;
  updated_user.Family_ids = request.body.Family_ids;

  console.log("Ill update to " + JSON.stringify(updated_user));
  User.findOne(params, async function(error, usuario){
    try {  
      console.log("Finding user_auth_id of " + request.body.user_auth_id);
        console.log("Antes de update: ");
        console.log(usuario);
        if(error)
        {
            response.status(404).send({message:"not found"});
            return
        }
        if(usuario === null) //ayuda porque si pongo un id de algo que no es objeto, existe y no es error arriba pero entra aquí porque no es alumno
        {
            response.status(404).send({usuario:"not found"});
            return
        }
        usuario.user_auth_id = updated_user.user_auth_id ;
        usuario.nombre = updated_user.nombre;
        usuario.apellido = updated_user.apellido;
        usuario.job =  updated_user.job;
        usuario.email =   updated_user.email;
        usuario.profilePic =   updated_user.profilePic;
        usuario.savings =   updated_user.savings;
        usuario.isAdmin =    updated_user.isAdmin;
        usuario.wishlist_id =    updated_user.wishlist_id;
        usuario.Family_ids =  updated_user.Family_ids;
        usuario.save();
        console.log("Después de update: ");
        console.log(usuario);
        
          response.status(200).send(usuario);
      } 
      catch (error) {
        response.status(500).send({ error: error });
      }
      
  });
  //let res = User.findOneAndUpdate(params, {nombre:'Federico'});
  //console.log(res);
});


app.use('/api', router); //url base de nuestro api que tiene las rutas en el routerglobal. fetch =require('node-fetch');

app.listen(port); //Se abre el puerto del servidor

console.log("Servidor arriba");
