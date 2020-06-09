var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    titulo:{
        type:String,
        required:true,
    },
    foto:{
        type:String,
        required:true,
    },
    precio:{
        type:Number,
        required:true,
    }
});

module.exports = mongoose.model('Products', ProductsSchema);