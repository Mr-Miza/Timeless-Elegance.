const mongoose= require ('mongoose') ;

const WatchSchema = mongoose.Schema({
    __id : mongoose.Schema.Types.ObjectId,
    type : String,
    description: String,
    price: Number,
});

module.exports= mongoose.model('Watches', WatchSchema);