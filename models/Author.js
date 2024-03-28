const mongoose = require("mongoose")


const authorSchema = new mongoose.Schema({
    name:String,
    birthday:Number
});


const Author = mongoose.model('author', authorSchema);

module.exports = Author