const express = require("express");
const {
  addUserController,
  getUserController,
  getUserByUsernameController,
  updateUserController,
  deleteUserController,
} = require("../controller/userController");
const validator = require("../utils/middlewares/validator");
const { body } = require("express-validator");
const getOcupationMiddleware = require("../utils/middlewares/getOcupationMiddleware");
const router = express.Router();

router.get("/user", getUserController);
router.get("/user/:username", getOcupationMiddleware,getUserByUsernameController);
router.put("/user/:username", updateUserController);
router.post(
  "/user",
  body("password").isLength({ min: 5, max: 15 }),
  body("username").isLength({ min: 5, max: 15}).isEmail(),
  validator,
  getOcupationMiddleware,
  addUserController
);
router.delete("/user/:username", deleteUserController);

module.exports = router;
