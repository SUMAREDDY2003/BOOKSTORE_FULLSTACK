const express =require('express');
const { signup, login, verifyToken } = require('../controllers/user-controller');

const router1 = express.Router();

router1.post("/signup",signup);
router1.post("/login",login);
router1.get("/user",verifyToken);

module.exports = router1;