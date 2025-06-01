const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookController');
const validate = require('../middleware/validate'); 
const { isAuthenticated } = require('../middleware/authMiddleware');


// GET all books
router.get('/', 
  /* #swagger.tags = ['Books']
  #swagger.path = '/api/books'*/
  controller.getAll
);

// GET a book by ID
router.get('/:id', 
  /*
    #swagger.tags = ['Books']*/
  controller.getOne
);

// POST create a book
router.post('/', 
  /* #swagger.tags = ['Books']
  #swagger.path = '/api/books'*/
  validate.book,
  isAuthenticated, 
  controller.create
);

// PUT update a book
router.put('/:id', 
  /* #swagger.tags = ['Books']*/
  validate.book,
   isAuthenticated,  
  controller.update
);

// DELETE a book
router.delete('/:id', 
  /*#swagger.tags = ['Books']*/
   isAuthenticated, 
  controller.remove
);

module.exports = router;
