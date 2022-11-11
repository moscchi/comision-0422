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
const auth = require("../utils/middlewares/auth");
const router = express.Router();

router.get("/user", auth,getUserController);
router.get(
  "/user/:username",
  getOcupationMiddleware,
  getUserByUsernameController
);
router.put("/user/:username", updateUserController);
router.post(
  "/user",
  body("username")
    .isLength({ min: 5, max: 15 }).withMessage("El username debe tener como mínimo 5 caracteres y un maximo de 15.")
    .isEmail().withMessage("Debes ingresar un email valido."),
  body("password")
    .isLength({ min: 5, max: 15 })
    .withMessage("La contraseña debe tener como mínimo 5 caracteres y un maximo de 15.")
    .matches(/[0-9]/)
    .withMessage("La contraseña debe tener al menos 1 número."),
  validator,
  getOcupationMiddleware,
  addUserController
);
router.delete("/user/:username", deleteUserController);

module.exports = router;
