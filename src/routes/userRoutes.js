const express = require("express");
const {
  createUser,
  getCounter,
  updateCounter,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user", createUser);
router.get("/counter", getCounter);
router.post("/counter", updateCounter);

module.exports = router;
