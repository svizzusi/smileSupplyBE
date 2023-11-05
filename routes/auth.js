// Import required libraries and modules
const passport = require('passport');
const express = require('express'); // Import the Express.js framework
const router = express.Router(); // Create an Express router

const CLIENT_URL = 'https://www.smilesupply.net/dashboard'
const LOGOUT_URL = 'https://www.smilesupply.net'
router.get('/login/failed', (req, res) => {
  console.log('Login Failed')
  try {
    res.status(401).json({
      success: false,
      message: `Login Failed`
    })
  } catch (error) {
    console.log(error)
  }
})
router.get('/login/success', (req, res) => {
  console.log('Login Success')
  if (req.user) {
    try {
      res.status(200).json({
        success: true,
        message: `Login Success`,
        user: req.user
      })
    } catch (error) {
      console.log(error)
    }
  } else {
    try {
      res.status(401).json({
        success: false,
        message: `Login Failed`
      })
    } catch (error) {
      console.log(error)
    }
  }
})
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get("/google/callback", passport.authenticate("google", {
successRedirect: CLIENT_URL,
failureRedirect: "/login/failed"
}));


const authRouter = router;
module.exports = authRouter; // Export the authRouter for use in other parts of the application