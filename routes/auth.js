const express = require("express");
const router = express.Router();

//@route   GET api/auth
//@desc    Get logged in user
//@access  private

router.get("/", (req, res) => {
  res.send("Get logged in user");
});

//@route   POST api/auth
//@desc    Auth user and get token
//@access  public

router.post("/", (req, res) => {
  res.send("Auth user and get token ");
});
module.exports = router;
