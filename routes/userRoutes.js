const express = require("express");
const router = express.Router();

const UserController = require("../controller/userController");
const checkUserAuth = require("../middleware/auth-middleware");


router.get("/auth",checkUserAuth,UserController.auth);
router.post("/register",UserController.auth);
router.post("login",UserController.login);


module.exports = router;
