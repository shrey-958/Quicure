const { postUsers } = require("../controllers/user.js");
const { getUsers } = require("../controllers/user.js");
const { getUsersbyId } = require("../controllers/user.js");
const { updateUsersbyId } = require("../controllers/user.js");
const { updateDoctor } = require("../controllers/user.js");
const { login } = require("../controllers/user.js");


const router = require("express").Router();

const { checkToken } = require("../auth/token_validation.js");

router.post("/",postUsers);

router.get("/",checkToken,getUsers);
router.get("/:id",checkToken,getUsersbyId);
router.put("/doctor/:id",updateDoctor);
router.put("/:id",updateUsersbyId);


router.post("/auth/login",login);


module.exports = router; 
