const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true },
  genre: String,
  publishedYear: Number,
  pages: Number,
  language: String,
  isbn: { type: String, unique: true },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
