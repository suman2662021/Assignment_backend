const router = require("express").Router();

const { getUser, addUser, editUser } = require('../controllers/userdetails');

router.get("/getuser", getUser);
router.post("/adduser", addUser);
router.put("/updateuser", editUser);

module.exports = router;