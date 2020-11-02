const pool = require("../config/database.js");

module.exports = class allUsers {
    static insertUsers(data){
        
        
       
    const results =  pool.execute(`INSERT INTO USER(fname,mname,lname,email,aadharid,contactno,street,city,state,pincode,dob,blood_group,role,password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        [data.fname,data.mname,data.lname,data.email,data.aadharid,data.contactno,data.street,data.city,data.state,data.pincode,data.dob,data.blood_group,data.role,data.password]);
    if(data.role == "Doctor")
    {
       
        pool.execute(`INSERT INTO DOCTOR (uid) VALUE ((SELECT uid FROM USER WHERE email = ?))`,[data.email]);
    }
    
        return results;   
         
    }
    static fetchUsers(){
        
        return pool.execute("SELECT * FROM USER");
    }

    static fetchUsersbyId(id){
        
        return pool.execute(`SELECT fname,mname,lname,email,aadharid,contactno,street,city,state,pincode,dob,blood_group,role FROM USER WHERE uid = ?`,[id]);
    }
    static updateUsers(data,id){
        
        return pool.execute(`UPDATE USER SET fname = ?,mname = ?,lname = ?,email = ?,aadharid = ?,contactno = ?,street = ?,city = ?,state = ?,pincode = ?,dob = ?,blood_group = ?,role = ? WHERE uid = ?`,
        [data.fname,data.mname,data.lname,data.email,data.aadharid,data.contactno,data.street,data.city,data.state,data.pincode,data.dob,data.blood_group,data.role,id]);
    }

    static updateDoctor(data,id){
        
        pool.execute(`UPDATE USER SET fname = ?,mname = ?,lname = ?,email = ?,aadharid = ?,contactno = ?,street = ?,city = ?,state = ?,pincode = ?,dob = ?,blood_group = ?,role = ? WHERE uid = ?`,
        [data.fname,data.mname,data.lname,data.email,data.aadharid,data.contactno,data.street,data.city,data.state,data.pincode,data.dob,data.blood_group,data.role,id]);
        
        if(data.isPrivate == 1)
        return pool.execute(`UPDATE DOCTOR SET degree = ?,specialization = ?,isPrivate = ?,start_dop = ?,work_street= ?,work_city = ?,work_state = ?,work_pincode = ? WHERE uid = ?`,
        [data.degree,data.specialization,data.isPrivate,data.start_dop,data.work_street,data.work_city,data.work_state,data.work_pincode,id]);
        

        if(data.isPrivate == 0)
        return pool.execute(`UPDATE DOCTOR SET degree = ?,specialization = ?,isPrivate = ?,start_dop = ?,hospital_work_for = ? WHERE uid = ?`,
        [data.degree,data.specialization,data.isPrivate,data.start_dop,data.hospital_work_for,id]);
        
    }

    static login(data){
        
        return pool.execute(`SELECT uid,role,password FROM USER WHERE email = ?`,[data.email]);
    }
   
}


