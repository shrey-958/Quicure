const pool = require("../config/database.js");

module.exports = class allDoctors {

    static insertAppointment(data){
        const result =  pool.execute(`INSERT INTO APPOINTMENT (d_uid,p_uid,reason,remarks,isBooked,isDone,timeslot,doa) VALUES (?,?,?,?,?,?,?,?)`
        ,[data.d_uid,data.p_uid,data.reason,data.remarks,data.isBooked,data.isDone,data.timeslot,data.doa]);
        return result;
    }
    static updateAppointment(data,id){
       return pool.execute(`UPDATE APPOINTMENT SET d_uid = ?,p_uid = ?,reason = ?,remarks = ?,isBooked = ?,isDone = ?,timeslot = ?,doa = ? WHERE aid = ?`
        ,[data.d_uid,data.p_uid,data.reason,data.remarks,data.isBooked,data.isDone,data.timeslot,data.doa,id]);
       
    }
    
    static fetchDoctor(){
        
        return pool.execute(`SELECT user.uid,user.fname,user.mname,user.lname,user.email,user.aadharid,user.contactno,user.street,user.city,user.state,user.pincode,user.dob,user.blood_group,user.role,doctor.degree,doctor.specialization,doctor.isPrivate,doctor.start_dop,doctor.work_street,doctor.work_city,doctor.work_state,doctor.work_pincode,doctor.hospital_work_for FROM user INNER JOIN doctor ON user.uid = doctor.uid`);

    }
    static fetchDoctorById(id){
        
        return pool.execute(`SELECT * FROM (SELECT user.uid,user.fname,user.mname,user.lname,user.email,user.aadharid,user.contactno,user.street,user.city,user.state,user.pincode,user.dob,user.blood_group,user.role,doctor.degree,doctor.specialization,doctor.isPrivate,doctor.start_dop,doctor.work_street,doctor.work_city,doctor.work_state,doctor.work_pincode,doctor.hospital_work_for FROM user INNER JOIN doctor ON user.uid = doctor.uid) AS RESULTS WHERE uid = ?`
        ,[id]);
    }


    static fetchPrivateDoctors(){
        
        return pool.execute(`SELECT * FROM (SELECT user.uid,user.fname,user.mname,user.lname,user.email,user.aadharid,user.contactno,user.street,user.city,user.state,user.pincode,user.dob,user.blood_group,user.role,doctor.degree,doctor.specialization,doctor.isPrivate,doctor.start_dop,doctor.work_street,doctor.work_city,doctor.work_state,doctor.work_pincode,doctor.hospital_work_for FROM user INNER JOIN doctor ON user.uid = doctor.uid) AS RESULTS WHERE isPrivate = 1`);
    }

    static fetchPrivateDoctorById(id){
        
        return pool.execute(`SELECT * FROM (SELECT user.uid,user.fname,user.mname,user.lname,user.email,user.aadharid,user.contactno,user.street,user.city,user.state,user.pincode,user.dob,user.blood_group,user.role,doctor.degree,doctor.specialization,doctor.isPrivate,doctor.start_dop,doctor.work_street,doctor.work_city,doctor.work_state,doctor.work_pincode,doctor.hospital_work_for FROM user INNER JOIN doctor ON user.uid = doctor.uid) AS RESULTS WHERE isPrivate = 1 AND uid = ?`
        ,[id]);
    }

    static fetchAppointment(date){
        return pool.execute("SELECT * FROM appointment WHERE doa >= ? ORDER BY doa",[date]);
    }
    static fetchAppointmentById(id,date){
        return pool.execute(`SELECT * FROM APPOINTMENT WHERE d_uid = ? AND doa>=? ORDER BY doa`,[id,date]);


    }
    static fetchAppointmenHistoryById(id,date){
        return pool.execute(`SELECT * FROM APPOINTMENT WHERE d_uid = ? AND doa<=? ORDER BY doa`,[id,date]);


    }
    


   








       
}


