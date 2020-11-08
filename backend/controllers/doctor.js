const allDoctors = require('../models/doctor.js');

exports.postAppointment = (req,res,next) =>{
    const body = req.body;
    
    allDoctors.insertAppointment(body)

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

exports.updateAppointmentById = (req,res,next) =>{
    const id = req.params.id;
    const body = req.body;
    allDoctors.updateAppointment(body,id)
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


exports.getAllDoctors = (req,res,next) =>{
    
    allDoctors.fetchDoctor()
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

exports.getDoctorById = (req,res,next) =>{
    const id = req.params.id;
    allDoctors.fetchDoctorById(id)
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


exports.getPrivateDoctors = (req,res,next) =>{
    
    allDoctors.fetchPrivateDoctors()
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


exports.getPrivateDoctorById = (req,res,next) =>{
    const id = req.params.id;
    allDoctors.fetchPrivateDoctorById(id)
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


exports.getAppointments = (req,res,next) =>{
    
    var date = new Date();
    date = date.toJSON().slice(0,10);
    allDoctors.fetchAppointment(date)

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

exports.getAppointmentById = (req,res,next) =>{
    var date = new Date();
    date = date.toJSON().slice(0,10);
    const id = req.params.id;
    allDoctors.fetchAppointmentById(id,date)
    .then(result => {
     if(result[0].length != 0)
     {

     res.status(200).json({
         success:1,
        
         data:result[0] 
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

exports.getAppointmentHistoryById = (req,res,next) =>{
    var date = new Date();
    date = date.toJSON().slice(0,10);
    const id = req.params.id;
    allDoctors.fetchAppointmenHistoryById(id,date)
    .then(result => {
     if(result[0].length != 0)
     {

     res.status(200).json({
         success:1,
        
         data:result[0] 
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
