const express = require("express");
const router = express.Router();

const messageController = require("../controllers/messageController");

// Handlers for create message page
router.get("/create", messageController.getCreateMessage);
router.post("/create", messageController.postCreateMessage);

// Handlers for editing message page
router.get("/:message_id/edit", messageController.getEditMessage);
router.post("/:message_id/edit", messageController.postEditMessage);

// Handler for deleting messages
router.post("/:message_id/delete", messageController.postDeleteMessage);

module.exports = router;
