const express = require("express")
const router = express.Router();
const {getContacts,getContact,createContact,deleteContacts,updateContacts} = require("../controllers/contactController");
const validate = require("../middleware/tokenHandling");

router.use(validate)
router.route("/").get(getContacts).post(createContact)
router.route("/:id").get(getContact).put(updateContacts).delete(deleteContacts)


module.exports = router;