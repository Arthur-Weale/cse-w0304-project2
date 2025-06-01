const express = require('express');
const passport = require('passport');
const router = express.Router();

// Redirect to GitHub for login
router.get('/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// GitHub callback
router.get('/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/auth/failure',
    successRedirect: '/api-docs', // redirect somewhere useful
  })
);

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Failure route
router.get('/failure', (req, res) => {
  res.send('Login failed');
});

module.exports = router;
