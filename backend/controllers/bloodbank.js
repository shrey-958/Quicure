const allBloodbanks = require('../models/bloodbank.js');

exports.getBloodbanks=(req,res,next)=>{

    allBloodbanks.fetchAllBloodbanks()
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
        })

}

exports.donateToBloodbank = (req,res,next)=>{
    const bbid = req.params.bbid;
    const data = req.body;
    allBloodbanks.makeDonationToBloodBank(data,bbid)
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
        })

}

exports.bloodbankHistoryOfUser=(req,res,next)=>{
    const uid = req.params.uid;
    allBloodbanks.userHistoryBloodDonation(uid)
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
        })
}

exports.getBBbyId = (req,res,next) =>{
    const id = req.params.id;
    allBloodbanks.fetchBBbyId(id)
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
           
            message:"No Blood Bank Found"
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
