const router = require('express').Router();
const flickr = require('./controllers/flickrController.js')


router.get('/flickr', flickr.getPhoto)

module.exports = router;