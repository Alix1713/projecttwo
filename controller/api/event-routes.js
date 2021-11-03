const router = require('express').Router();
const { Event } = require('../../models');

console.log(Event);

// create an event
router.post('/', async, (req, res) => {
    try {
        console.log(req.body)
        const eventData = await Event.create({

        });
        res.status(200).json(eventData)
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// Get all events
router.get('/', async (req, res) => {
    try{
        const eventData = await Event.findall();
        res.status(200);
    }catch (err){
        res.status(500).json(err);
    }
});

// Get one events
router.get('/:id', async (req, res) => {
    try{
        const eventData = await Event.findbyPk(req.params.id);
        if(!eventData){
            res.status(404).json ({message: 'Sorry, can not find this "Event" please check ID again.'})
        }

    }
})