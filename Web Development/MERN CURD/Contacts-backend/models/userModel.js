const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"]
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: [true, "Email address already exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide strong password"],
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema)
