const mongoose = require("mongoose")

const authorSchema = mongoose.Schema({
    first_name: {type:String, required: true},
    last_name: {type:String, required: true},
},{
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model("author", authorSchema)