const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @desc Login
// @route POST /user/login
// @acess public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400)
        throw new Error("Please Fill All fields")
    }
    const user = await User.findOne({ email }).exec()
    if (user && (await bcrypt.compare(password, user.password))) {
        const acessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            },

        },
            process.env.ACESS_TOKEN_SECRET,
            { expiresIn: "100m" }
        )
        res.status(200).json({ acessToken })
    }
})

// @desc Register
// @route POST /user/register
// @acess public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const user = await User.findOne({ email }).exec()
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Please Fill All fields")
    }
    else if (user) {
        res.status(400)
        throw new Error("User Already exists")
    }
    else {

        const hashPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            username,
            email,
            password: hashPassword
        })
        res.status(200).json({ message: "Registration Successful", user })
    }
    // const user = await User.findOne({ email }).exec()

})


// @desc Current User info
// @route GET /user/current
// @acess private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})

module.exports = { loginUser, registerUser , currentUser }
