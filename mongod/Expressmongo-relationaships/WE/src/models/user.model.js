
// USERS Schema
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
    first_name: {type: String, required:true},
    last_name: {type: String, required:true},
    email: {type: String, required:true, unique: true},
    gender: {type: String, required: false, default: "Female"},
    age: {type: String, required: false}
    },
    {
        versionKey: false,
        timestamps: true,

    });

module.exports = mongoose.model("user", userSchema)