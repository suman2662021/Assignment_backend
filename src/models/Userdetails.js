const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const userdetails = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
});
module.exports = mongoose.model("userdetails", userdetails);