const express = require('express');
const router = express.Router();

// Middleware
const authenticateUser = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      error: 'User is not authenticated',
    });
  }

  next();
};

/* 
  TODO: 
  Setup API Routes
*/
// temporary hook to confirm base routing is working
router.get('/', function(req, res) {
  res.send('NOT IMPLEMENTED: Users View');
})

router.get('/users/current', authenticateUser, (req, res) => {
  res.status(200).send({});
});

module.exports = router;
