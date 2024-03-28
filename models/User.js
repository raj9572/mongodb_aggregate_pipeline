const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    index: Number,
    name: String,
    isActive: Boolean,
    register: Date,
    age: Number,
    gender: String,
    eyeColor: String,
    favoriteFruit: String,
    company: {
        title: String,
        email: String,
        phone: String,
        location: {
            country:String,
            address:String
        }
    },
    tags:[]
});


const User = mongoose.model('user', userSchema);

module.exports = User