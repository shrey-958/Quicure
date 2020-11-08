const pool = require("../config/database.js");

module.exports = class allBloodbanks {

    static fetchAllBloodbanks(){
        return pool.execute("SELECT * FROM BLOOD_BANK");
    }



    static makeDonationToBloodBank(data, bbid){

        return pool.execute(`INSERT INTO DONATE_BLOODBANK (bbid,uid,blood_group,nunits) VALUES (?,?,?,?)`,[bbid,data.uid,data.blood_group,data.nunits]);

    }

    static userHistoryBloodDonation(uid){
        return pool.execute(`SELECT b.bbid, b.name, a.total FROM (SELECT bbid, SUM(nunits) as total from DONATE_BLOODBANK WHERE uid = ? GROUP BY bbid) a INNER JOIN BLOOD_BANK b ON b.bbid = a.bbid`,[uid]);
        
    }

    static fetchBBbyId(id){
        
        return pool.execute(`SELECT * FROM blood_bank WHERE bbid = ?`,[id]);
    }





}