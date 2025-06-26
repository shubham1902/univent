const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const { createEvent } = require("../controllers/eventController");
const { getAllEvents } = require("../controllers/eventController");
const { getEventById } = require("../controllers/eventController");
const { updateEvent } = require("../controllers/eventController");
const { deleteEvent } = require("../controllers/eventController");
router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.put("/:id", deleteEvent);
router.module.exports = router;
// Middleware to validate event data
