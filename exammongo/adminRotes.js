import { Router } from "express";
import mongoose from "mongoose";

const adminRoute=Router()
mongoose.connect('mongodb://localhost:27017/exam1')
const hospitalSchema= new mongoose.Schema({
    tokenid:{type:String,required:true,unique:true},
     patientname:{type:String,required:true,},
      doctorname:{type:String,required:true,unique:true}, 
      appoinmentdate:{type:String,required:true,},
      time:{type:String,required:true,}




})
const hospital=mongoose.model('hospital',hospitalSchema)

adminRoute.post('/add',async(req,res)=>{
    try{
        const  { tokenid,patientname,doctorname,appoinmentdate,time}=req.body
        const tokenidexists=await hospital.findOne({tokenid})
        console.log(tokenidexists)
        if(tokenidexists){
            res.status(400).json({mesage:"token already exists"})
        }
        else{
            const newhospital=new hospital({
                tokenid:tokenid,
                patientname:patientname,
                doctorname:doctorname,
                appoinmentdate:appoinmentdate,
                time:time
                
            })
            await newhospital.save()
            res.status(200).json({message:"added sucessfully"})

        }


    }
    catch(error){
        res.status(500).json({error:error.message})
    }

})
adminRoute.patch('/update',async(req,res)=>{
    try{
        const  { tokenid,patientname,doctorname,appoinmentdate,time}=req.body
        const tokenidexists=await hospital.findOne({tokenid})
        console.log(tokenidexists)
        if(tokenidexists){

            tokenidexists.patientname=patientname,
            tokenidexists.doctorname=doctorname,
            tokenidexists.appoinmentdate=appoinmentdate,
            tokenidexists.time=time;
            await  tokenidexists.save();
        }
        else{
            res.status(400).json({mesage:"token doesnot exists"})
            2
           

        }


    }
    catch(error){
        res.status(500).json({error:error.message})
    }

})
adminRoute.get('/search/:id',async(req,res)=>{
    try{
        const pa=req.params.id
        const tokenidexists=await hospital.findOne({tokenid:pa})
        console.log(tokenidexists)
        if(tokenidexists){
            res.send(tokenidexists)
        }
        else{
          
           

        }


    }
    catch(error){
        res.status(500).json({error:error.message})
    }

})
adminRoute.delete('/delete/:id',async(req,res)=>{
        try{
            const pa=req.params.id
            const tokenidexists=await hospital.findOneAndDelete({tokenid:pa})
            console.log(tokenidexists)
            if(tokenidexists){
                res.status(200).json({message:'deleted successfully'})
            }
            else{
                res.status(500).json({message:'not exist'})
              
               
    
            }
    
    
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
    
    })
  adminRoute.get('/all/:dn',async(req,res)=>{
        try{
            const pa=req.params.dn
            const doctoridexists=await hospital.find({doctorname:pa})
            console.log(doctoridexists)
            if(doctoridexists){
                res.send(doctoridexists)
                // const a[]= hospital()
                // res.send( res.send(a))
            
               

            }
            else{
                res.status(400).json({message:"not exist"})

              
               
    
            }
    
    
        }
        catch(error){
            res.status(500).json({error:error.message})
        }
    
    })
// adminRoute.get('/all/:dn', async (req, res) => {
//     try {
//         const pa = req.params.dn;  
//         const doctoridexists = await hospital.findOne({ doctorname: pa });  
        
//         if (doctoridexists) {
           
//             const doctorDetailsArray = [doctoridexists];
//             res.send(doctorDetailsArray);  
//         } else {
//             res.status(400).json({ message: "Doctor does not exist" });  
//         }
//     } catch (error) {
//         res.status(500).json({ error: error.message });  
//     }
// });




    



export {adminRoute} ;