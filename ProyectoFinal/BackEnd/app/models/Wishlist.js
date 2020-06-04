var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var WishlistSchema = new Schema({
    wishlist_id:{
        type:String,
        required:true,
    },
    Objects: [],    
});

//Aquí extendemos el módulo que hicimos a un modelo que sea de mongoose. 
module.exports = mongoose.model('Wishlist', WishlistSchema);
