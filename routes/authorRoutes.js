const express = require('express');
const router = express.Router();
const controller = require('../controllers/authorController');
const validate = require('../middleware/validate');

router.get(
    '/', 
    //#swagger.tags = ['Author']
    //#swagger.summary = 'Get all authors'
    // #swagger.path = '/api/authors'
    controller.getAll);

router.get(
    '/:id',
    // #swagger.tags = ['Author']
    // #swagger.summary = 'Get an author by ID'
    // #swagger.path = '/api/authors{id}'
    controller.getOne);


router.post(
    '/', 
    // #swagger.tags = ['Author']
    //#swagger.summary = 'Post an authors'
    // #swagger.path = '/api/authors'
    controller.create);

router.put(
    '/:id', 
    // #swagger.tags = ['Author']
    //#swagger.summary = 'Update an author'
    // #swagger.path = '/api/authors{id}'
    validate.author, controller.update);


router.delete(
    '/:id', 
    // #swagger.tags = ['Author']
    //#swagger.summary = 'Delete an author'
    // #swagger.path = '/api/authors{id}'
    validate.author, controller.remove);

module.exports = router;
