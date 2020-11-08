const {getBloodbanks, donateToBloodbank, bloodbankHistoryOfUser, getBBbyId} = require("../controllers/bloodbank.js");

const router = require("express").Router();

router.get("/all", getBloodbanks);
router.get("/:id", getBBbyId);
router.post("/book/:bbid",donateToBloodbank);
router.get("/history/:uid",bloodbankHistoryOfUser);

module.exports = router; 

