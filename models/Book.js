const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title: String,
    author_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author"
    },
    genre:String
});


const Book = mongoose.model('book', bookSchema);

module.exports = Book