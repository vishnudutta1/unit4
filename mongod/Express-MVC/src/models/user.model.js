const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    gender: {type: String, required: true},
    date_of_birth: {type: String, required: true},
    role: {type: String, required: true}
}, {
    versionKey: false,
    timestamps: true
})


module.exports = mongoose.model("user", userSchema)