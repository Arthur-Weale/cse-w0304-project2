const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorController');
const validate = require('../middleware/validate');

//#swagger.tags = ['Author'] 
//#swagger.path = '/authors'
router.get(
    '/', 
    //#swagger.summary = 'Get all authors'
    // #swagger.path = '/api/authors'
    controller.getAll);


// #swagger.tags = ['Author']
//#swagger.path = '/authors'
router.post(
    '/', 
    //#swagger.summary = 'Post an authors'
    // #swagger.path = '/api/authors'
    validate.author, controller.create);

module.exports = router;
