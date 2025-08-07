
import jwt from 'jsonwebtoken'
import  twilio  from 'twilio';
import  User  from "../../models/user.model.js";



const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountSid, authToken);
export default class UserController{

    async SignUpuser  (req,res){
       const {userType,name,mobile,email,password}= req.body
       console.log("hi1")
       console.log(mobile)
       if (!mobile || !/^\+\d{10,15}$/.test(mobile)) {
        return res.status(400).send("Invalid phone number format. Must be in E.164 format (e.g., +917068051712).");
    }

   
       const alreadyExist = await User.findOne({mobile})
       if(alreadyExist){
        return res.send("user is already exist")
       }
       
        const verification = await client.verify.v2
          .services("VA7d25418b57e3326829e7e99b7520a947")
          .verifications.create({
            channel: "sms",
            to: mobile,
          })

         res.status(200).json({ status: verification.status, sid: verification.sid });

     
    }

      async verifyOtp(req,res){
        try {
          const { mobile, otp } = req.body; // Accept phone number and OTP from request body
      console.log(otp)
        //   if (!mobile || !otp) {
        //     return res.status(400).json({ error: "Phone number and OTP are required" });
        //   }
      
          // Verify the OTP
          const verificationCheck = await client.verify.v2
            .services(process.env.VERIFICATION_CHECKS)
            .verificationChecks.create({
              code: otp,
              to: '+918299372124'
            });
      
          // Respond with the verification status
          if (verificationCheck.status === "approved") {
            return res.status(200).json({ message: "Verification successful", status: verificationCheck.status });
          } else {
            return res.status(400).json({ message: "Verification failed", status: verificationCheck.status });
          }
        } catch (error) {
          console.error("Error verifying OTP:", error);
          res.status(500).json({ error: "Failed to verify OTP" });
        }
      };

   loginUser(req,res){

        const {email,password}= req.body
        const loginUser = User.findOne({email,password})
        if(loginUser){
            const token = jwt.sign({userID:loginUser.mobile, email:email},
               'hellpvjiwrjv',
              {expiresIn:'5h'});
              return res.json({token})
        }
        else{
            return res.send("Plz check email and password")
        }
    }

    getUsers(req,res){
        const users = UserModel.getAllUserDetail()
       return res.status(200).json(users)
    }

}
