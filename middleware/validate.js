exports.book = (req, res, next) => {
  if (!req.body) {
    return res.status(400).json({ error: 'Request body is missing' });
  }
  const { title, authorId, isbn} = req.body;
  if (!title || !authorId || !isbn) {
    return res.status(400).json({ error: 'Title, Author ID, and ISBN are required' });
  }
  next();
};

exports.author = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Author name is required' });
  }
  next();
};
