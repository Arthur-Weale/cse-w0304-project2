const Author = require('../models/author');

exports.getAll = async (req, res) => {
  //#swagger.tags=["Author"]
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  //#swagger.tags=["Author"]
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
