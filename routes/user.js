const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// Handlers for create message page
router.get("/sign-up", userController.getSignUpUser);
router.post("/sign-up", userController.postSignUpUser);

// Handlers for editing message page
router.get("/log-in", userController.getLoginUser);
router.post("/log-in", userController.postLoginUser);

// Handler for deleting messages
router.get("/log-out", userController.getLogoutUser);

module.exports = router;
