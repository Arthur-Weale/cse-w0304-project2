const Author = require('../models/author');

// GET all authors
exports.getAll = async (req, res) => {
  // #swagger.tags = ["Author"]
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one author by ID
exports.getOne = async (req, res) => {
  // #swagger.tags = ["Author"]
  // #swagger.summary = "Get author by ID"
  // #swagger.parameters['id'] = { in: 'path', description: 'Author ID', required: true, type: 'string' }
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// POST create a new author
exports.create = async (req, res) => {
  // #swagger.tags = ["Author"]
  // #swagger.summary = "Create a new author"
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT update an existing author
exports.update = async (req, res) => {
  // #swagger.tags = ["Author"]
  // #swagger.summary = "Update an existing author"
  // #swagger.parameters['id'] = { in: 'path', description: 'Author ID', required: true, type: 'string' }
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE an author
exports.remove = async (req, res) => {
  // #swagger.tags = ["Author"]
  // #swagger.summary = "Delete an author"
  // #swagger.parameters['id'] = { in: 'path', description: 'Author ID', required: true, type: 'string' }
  try {
    const author = await Author.findByIdAndDelete(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json({ message: 'Author deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};