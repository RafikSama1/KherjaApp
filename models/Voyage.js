const {model} = require("mongoose");

module.exports = model("Voyage", {
    name: String,
    destinations: Array,
    description: Array,
    price: Number,
    rating: String,
    picture_link: String
});