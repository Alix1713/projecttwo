const router = require('express').Router();

router.get ('/', async (req,res) =>
{
res.render('homepage')

    //res.render handlebars here review previous activity!!
}
)
router.get('/menu', async (req,res) =>
{
    res.render('menu')
})

module.exports = router;
