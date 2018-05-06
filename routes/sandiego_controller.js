var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    // res.send('index route for sandiego_controller');
    res.render('sandiego/index');

})


module.exports = router;