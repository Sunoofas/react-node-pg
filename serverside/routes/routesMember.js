const express = require("express");
const router = express.Router();
const {
    getUserData,
    addUserData
}= require('../controllers/member');

router.get('/login', getUserData);
router.post('/login', addUserData);

module.exports = router;
