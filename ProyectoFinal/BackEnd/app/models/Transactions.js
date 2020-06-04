var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var TransactionSchema = new Schema({
    user_sid:{
        type:String,
        required:true,
    },
    currency:{
        type:String,
        required:true,
        default:'MXN'
    },
    direction:
    {
        type:String,
        required:true,
        default: 'Saving/Cost'
    },
    quantity:{
        type:Number, 
        required:true,
    },
    comment:{
        type:String,
        required:true
    }
    
});

//Aquí extendemos el módulo que hicimos a un modelo que sea de mongoose. 
module.exports = mongoose.model('Transaction', TransactionSchema);
