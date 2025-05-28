const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');
const validate = require('../middleware/validate'); 

// GET all books
router.get('/', 
  // #swagger.tags = ['Books']
  // #swagger.summary = 'Get all books'
  // #swagger.path = '/api/books'
  controller.getAll
);

// GET a book by ID
router.get('/:id', 
  /*
    #swagger.tags = ['Books']
    #swagger.summary = 'Get a book by ID'
    #swagger.path = '/api/books/{id}'
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Book ID',
      required: true,
      type: 'string'
    }
  */
  controller.getOne
);

// POST create a book
router.post('/', 
  // #swagger.tags = ['Books']
  // #swagger.summary = 'Create a new book'
  // #swagger.path = '/api/books'
  /*
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Book data',
      required: true,
      schema: {
        type: 'object',
        properties: {
          title: { example: 'any' },
          authorId: { example: 'any' },
          isbn: { example: 'any' }
        }
      }
    }
  */
  validate.book, 
  controller.create
);

// PUT update a book
router.put('/:id', 
  // #swagger.tags = ['Books']
  // #swagger.summary = 'Update a book'
  // #swagger.path = '/api/books/{id}'
  /*
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Book ID',
      required: true,
      type: 'string'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Book data to update',
      required: true,
      schema: {
        type: 'object',
        properties: {
          title: { example: 'any' },
          authorId: { example: 'any' },
          isbn: { example: 'any' }
        }
      }
    }
  */
  validate.book, 
  controller.update
);

// DELETE a book
router.delete('/:id', 
  // #swagger.tags = ['Books']
  // #swagger.summary = 'Delete a book'
  // #swagger.path = '/api/books/{id}'
  /*
    #swagger.parameters['id'] = {
      in: 'path',
      description: 'Book ID',
      required: true,
      type: 'string',
      example: '6835f50ec0132b48c535f444'
    }
  */
  controller.remove
);

module.exports = router;
