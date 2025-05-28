const Book = require('../models/book');

exports.getAll = async (req, res) => {
  //#swagger.tags=["Books"]
  try {
    const books = await Book.find().populate('authorId');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOne = async (req, res) => {
  //#swagger.tags=["Books"]
  try {
    const book = await Book.findById(req.params.id).populate('authorId');
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  //#swagger.tags=["Books"]
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  //#swagger.tags=["Books"]
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.remove = async (req, res) => {
  //#swagger.tags=["Books"]
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
