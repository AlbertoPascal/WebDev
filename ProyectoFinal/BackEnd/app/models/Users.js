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
    profilePic:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    email: {
        type: String,
        required: true,
    },
    Family_ids: [],
    job:String,
});

//Aquí extendemos el módulo que hicimos a un modelo que sea de mongoose. 
module.exports = mongoose.model('User', UsersSchema);
