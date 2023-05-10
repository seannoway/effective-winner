const router = require('express').Router();
const path = require('path');

// defines route for index.html GET requests
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
// defines routes for notel.html GET requests
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});
//exports router object to be available for other modules to use
module.exports = router;