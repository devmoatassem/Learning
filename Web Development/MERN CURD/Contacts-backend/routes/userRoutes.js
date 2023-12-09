const express = require("express")
const router = express.Router();
const { loginUser, registerUser , currentUser } = require("../controllers/userController");
const validate = require("../middleware/tokenHandling");

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/current").get(validate, currentUser);

module.exports = router;