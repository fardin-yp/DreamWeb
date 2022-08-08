import dbConnect from '../../../../helpers/dataBase';
const jwt = require('jsonwebtoken')
import Users from '../../models/userModel';
const bcrypt = require('bcryptjs');
const request = require("request");
import { serialize } from 'cookie';

dbConnect();

export default async (req,res) => {
  const {method} = req;
  const token = req.cookies.token;

  switch(method) {
        case("POST"):
        const {email , password ,captcha} = req.body;
        try{
          
         if(!email || !password) {
              return res.json({errMessage:"تمامی فیلد ها الزامی است"})
         }
         if(!captcha){
          return res.json({errMessage:"به دلیل امنیتی ارسال پیام امکان پذیر نمیباشد"})
         }
         
          const existingUser = await Users.findOne({email});
      
         if(!existingUser){
          return res.json({errMessage:"ایمیل یا رمز اشتباه"})
          }
          if(existingUser.blocked === true){
            return res.json({errMessage:"این اکانت بن شده است "})
          }
        const correct = await bcrypt.compare(password, existingUser.passwordHash)
         if(!correct){
          return res.json({errMessage:" ایمیل یا رمز اشتباه"})
        }
        
        const secret = process.env.INVISIBLE_CAPTCHA;
        // captcha url
        const verificationUrl ="https://www.google.com/recaptcha/api/siteverify?secret=" + secret + "&response=" + captcha + "&remoteip=" + req.connection.remoteAddress;
        
        request(verificationUrl, async function(error,response,body) {
         body = JSON.parse(body);
         // Success will be true or false depending upon captcha validation.
         if(body.success !== undefined && !body.success) {
           return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
         }
        //sign the token
        const token =jwt.sign(
          {
            email:email,username:existingUser.username
          },
          process.env.USERS_JWT_SECRET
          
         );
        // send the token
        res.setHeader('Set-Cookie', serialize("token", token))
        res.end(res.getHeader('Set-Cookie'))
      })

    }catch(err){
      res.json({errMessage:"خطا در لاگین لطفا دوباره تلاش نمایید"})
    }
    break;
  case("GET"):
    try{
  
      if(!token) return res.json(false);
  
      jwt.verify(token, process.env.USERS_JWT_SECRET)

      res.json(true)
  
  }catch(err){
    res.json(false)
  }
  break;
 
}
}