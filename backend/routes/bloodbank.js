const {getBloodbanks, donateToBloodbank, bloodbankHistoryOfUser} = require("../controllers/bloodbank.js");

const router = require("express").Router();

router.get("/all", getBloodbanks);
router.post("/book/:bbid",donateToBloodbank);
router.get("/history/:uid",bloodbankHistoryOfUser);

module.exports = router; 

