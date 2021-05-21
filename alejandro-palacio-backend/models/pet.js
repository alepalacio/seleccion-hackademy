const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: String,
    age: Number,
    race: String,
    image_url: String,
    __v: {
        type: Number,
        select: false
    }});

//Model
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;