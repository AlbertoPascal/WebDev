var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var ProductsSchema = new Schema({
    search_term:{
        type:String,
        required:true,
    },
});
module.exports = mongoose.model('Bestseller', ProductsSchema);