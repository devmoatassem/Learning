const asyncHandler = require("express-async-handler")
const Contact = require("../models/contactModel")
// @desc Get All contacts
// @route GET /api/contacts
// @acess public
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts)
})

// @desc Get one contact
// @route GET /api/contacts/:id
// @acess public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404)
        throw new Error("Contact Not found")
    }
    else {
        res.status(200).json(contact)
    }

})

// @desc Create new contact
// @route POST /api/contacts
// @acess public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400)
        throw new Error("Please Fill All fields")
    }
    else {
        const contact = await Contact.create({
            name,
            email,
            phone,
        })
        res.status(201).json(contact)
    }

})

// @desc Update contacts
// @route PUT /api/contacts/:id
// @acess public
const updateContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    console.log(contact)
    if (!contact) {
        res.status(404)
        throw new Error("Contact Not found")
    }

    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    )
    res.status(200).json(updatedcontact)



})

// @desc Get All contacts
// @route delete /api/contacts/:id
// @acess public
const deleteContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    
    if (!contact) {
        res.status(404)
        throw new Error("Contact Not found")
    }
    await Contact.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: `Contact Deleted for ${req.params.id}` })
})

module.exports = { getContacts, getContact, createContact, deleteContacts, updateContacts }