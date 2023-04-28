const express = require("express");
const router = express.Router();
const {
    
    addUserData, addUserDataSession
}= require('../controllers/member');


router.post('/Login', addUserData);
router.get("/Login", addUserDataSession);
module.exports = router;
