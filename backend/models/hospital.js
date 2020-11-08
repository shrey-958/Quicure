const pool = require("../config/database.js");

module.exports = class allHospitals {

    static fetchAllHospitals(){
        return pool.execute("SELECT * FROM HOSPITAL where nbeds > 0");
    }
    static fetchHospitalById(hospid){
        return pool.execute(`SELECT * FROM HOSPITAL WHERE hospid = ?`,[hospid]);

    }
    static bookHospitalBed(data,hospid){
        pool.execute(`UPDATE HOSPITAL SET nbeds = ? WHERE hospid = ?`,[data.newBeds,hospid]);
        return pool.execute(`INSERT INTO BOOK_HOSPITAL (hospid, uid, admitDate, dischargeDate, reason, remarks) VALUES (?,?,?,?,?,?)`,[hospid,data.u_id,data.admitDate,data.dischargeDate,data.cause,data.remarks]);

    }
    static hospitalHistoryOfUser(uid){
        return pool.execute(`SELECT b.hospid,b.name,a.admitDate,a.dischargeDate,a.reason,a.remarks FROM(
            SELECT hospid, admitDate,dischargeDate,reason,remarks
            FROM BOOK_HOSPITAL where uid = ? GROUP BY hospid) a INNER JOIN HOSPITAL b
            on b.hospid = a.hospid`,[uid]);

    }
}
