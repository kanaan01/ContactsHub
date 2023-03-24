const express = require("express");
const router = express.Router();

//@route   POST  api/contacts
//@desc    Add new contacts
//@access  private

router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route   GET  api/contacts
//@desc    Get all users contacts(yours)
//@access  private

router.get("/", (req, res) => {
  res.send("Get all contacts");
});

//@route   PUT  api/contacts/:id
//@desc    Update contact
//@access  private

router.put("/:id", (req, res) => {
  res.send("Update contact");
});

//@route   DELETE  api/contacts/:id
//@desc    Delete contact
//@access  private

router.delete("/:id", (req, res) => {
  res.send("delete contact");
});

module.exports = router;
