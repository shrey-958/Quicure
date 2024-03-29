const allUsers = require('../models/user.js');
const { sign } = require("jsonwebtoken");
const { genSaltSync,hashSync, compareSync } = require('bcrypt');

exports.postUsers = (req,res,next) =>{
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    allUsers.insertUsers(body)

    .then(
        
     res.status(200).json({
         success:1,
         message:"Data inserted successfully"
     })   

    )
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};

exports.getUsers = (req,res,next) =>{
    
    allUsers.fetchUsers()
    .then(result => {
        
     res.status(200).json({
         success:1,
         message:result[0]
     });   
    }
    )
    
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};

exports.getUsersbyId = (req,res,next) =>{
    const id = req.params.id;
    allUsers.fetchUsersbyId(id)
    .then(result => {
     if(result[0].length != 0)
     {

     res.status(200).json({
         success:1,
        
         data:result[0][0]
     });
    }
    else if(result[0].length == 0)
    {

        res.status(501).json({
            success:0,
           
            message:"No User Found"
        });
       }   
    }
    )
    
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};

exports.updateUsersbyId = (req,res,next) =>{
    const id = req.params.id;
    const body = req.body;
    allUsers.updateUsers(body,id)
    .then(
     res.status(200).json({
         success:1,
        
         message:"Data updated successfully"
     })
    
    
    )
    
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};

exports.updateDoctor = (req,res,next) =>{
    const id = req.params.id;
    const body = req.body;
    allUsers.updateDoctor(body,id)
    .then(
     res.status(200).json({
         success:1,
        
         message:"Data updated successfully"
     })
    
    
    )
    
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};

exports.login = (req,res,next) =>{
    const body = req.body;
    allUsers.login(body)
    .then(results => {
     if(results[0].length !=0)
     {
     /*    
     var obj = JSON.parse(JSON.stringify(results[0]));    
     console.log(obj[0].Password);

     */
    
     const check = compareSync(body.password,results[0][0].password);
     if(check)
     {
     results.password = undefined;      
     const jsonwebtoken = sign({result:results[0]},process.env.JWT_AUTH,{
         expiresIn: "24h"
     });       
     res.status(200).json({
         success:1,
         message:"Login was successful",
         data:{uid:results[0][0].uid,role:results[0][0].role,blood_group:results[0][0].blood_group,fname:results[0][0].fname,lname:results[0][0].lname},
         token:jsonwebtoken

     })
     }
     else if(!check){
        res.status(501).json({
            success:0,
            message:"Invalid Password"
   
        })

     }
    }
    
     else if(results[0].length == 0)
     {
        res.status(501).json({
            success:0,
            message:"Invalid Details"
        })
     }   
    }
    )
    .catch(err => {
        console.log(err);
        return res.status(501).json({
            success:0,
            message:"Database Connection Error"
        });
        }
            );
};
