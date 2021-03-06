var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    user_auth_id:{
        type:String,
        required:true,
    },
    nombre:{
            type:String,
            required:true,
    },
    apellido: {
        type:String,
        required:true,
    } ,
    username: {
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    savings:{
        type:Number,
        required:true,
        default:0.00,
    },
    expenses:{
        type:Number,
        required:true,
        default:0.00,
    },
    email: {
        type: String,
        required: true,
    },
    Family_ids: [],
    job:String,
    wishlist_id:{
        type:String,
        required:true,
    },
    Creation_date :  {
        type:String,
        required:true,

    },
    salario: Number,
});

//Aquí extendemos el módulo que hicimos a un modelo que sea de mongoose. 
module.exports = mongoose.model('User', UsersSchema);
