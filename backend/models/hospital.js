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
        return pool.execute(`INSERT INTO BOOK_HOSPITAL (hosp_id, u_id, admitDate, dischargeDate, cause, remarks) VALUES (?,?,?,?,?,?)`,[hospid,data.u_id,data.admitDate,data.dischargeDate,data.cause,data.remarks]);

    }
    static hospitalHistoryOfUser(uid){
        return pool.execute(`SELECT * from BOOK_HOSPITAL WHERE u_id = ?`,[uid]);

    }
}
