// routes/profileRoutes.js
const express = require('express');
const { updateProfile } = require('../controllers/profileController');
const auth = require('../middleware/auth');
const router = express.Router();

router.put('/', auth, updateProfile);

module.exports = router;
