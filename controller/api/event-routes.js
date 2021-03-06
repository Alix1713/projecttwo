const router = require("express").Router();
const { Event } = require("../../models");
// Event is not coming up

// create an event
router.post('/', async, (req, res) => {
    try {
        console.log(req.body)
        const eventData = await Event.create({

      },
    post_id:
      
  })

        });
        res.status(200).json(eventData)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
=======

// Get all events
router.get("/", async (req, res) => {
  try {
    const eventData = await Event.findall();
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one events
router.get("/:id", async (req, res) => {
  try {
    const eventData = await Event.findbyPk(req.params.id),{
 include: [
    {
      model: event,
      attributes: [
        'wine_id',
        'user_id',
        'menu_id',
      ],
    },
  ],
});
} catch (err) {
res.status(400).json(err);
}
});

// create an event
router.post("/event", async, (req, res) => {
  try {
    console.log(req.body);
    const eventData = await Event.create({});
    res.status(200).json(eventData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update events

router.put('/:id', async (req, res) => {
    try{
        const eventData = await Event.update(req.body, {
            where: {
              id: req.params.id,  
            },
        });
        if(!eventData[0]){
            res.status(404).json({message: 'Sorry, can not find this "Event" please check ID again.'});
            return;
        }
        res.status(200).json(eventData);
    } catch(err){
        res.status(500).json(err);
    }
=======
router.put("/:id", async (req, res) => {
  try {
    const eventData = await Event.update(req.body, {
      where: {
        id: req.params.id,
      },

    });
    if (!eventData[0]) {
      res.status(404).json({
        message: 'Sorry, can not find this "Event" please check ID again.',
      });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});


    module.exports = router;

