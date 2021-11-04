const router = require('express').Router();
const { Event } = require('../../models');

console.log(Event);

// create an event
router.post('/', async, (req, res) => {
    try {
        console.log(req.body)
        const eventData = await Event.create({

