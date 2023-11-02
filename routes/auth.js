// Import required libraries and modules
const express = require('express'); // Import the Express.js framework
const router = express.Router(); // Create an Express router

const CLIENT_URL = 'https://www.smilesupply.net/dashboard'
const LOGOUT_URL = 'https://www.smilesupply.net'

router.get('/google',
  passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });