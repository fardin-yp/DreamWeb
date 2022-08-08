import dbConnect from '../../../helpers/dataBase';
import nextConnect from 'next-connect';
const request = require("request");
const Contact = require("../models/contact");


dbConnect();


handler.post(async (req, res) => {
  const {email ,name ,message ,des ,captcha} = req.body;
  const date = new Date().toLocaleDateString("fa-IR" ,{timeZone:"Asia/Tehran" } )

  try {

  if(!captcha){
       return res.json({errMessage:"به دلیل امنیتی ارسال پیام امکان پذیر نمیباشد"})
    }     

  if(!name || !email || !des || !message){
      return res.json({errMessage:"تمام فیلد ها الزامی است!" ,err:"all"})
  }
  const index = email.indexOf("@");
  const com = email.indexOf("com");

  if(index === -1 || com === -1){
      return res.json({errMessage:"لطفا ایمیل خود را به درستی وارد کنید!" ,err:"email"})
  }
  if(name.length > 16){
      return res.json({errMessage:"نام نمیتواند بیش از 16 کارکتر باشد!" ,err:"name"})
  }
  const secret = "6LfMd88dAAAAAJH3mPde_pSETx_RXS8pjDzHsnY3";
  // captcha url
  const verificationUrl ="https://www.google.com/recaptcha/api/siteverify?secret=" + secret + "&response=" + captcha + "&remoteip=" + req.connection.remoteAddress;
  
  request(verificationUrl,async function(error,response,body) {
   body = JSON.parse(body);
   // Success will be true or false depending upon captcha validation.
   if(body.success !== undefined && !body.success) {
     return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
   }
  const newExclusive = new Contact({
      email,
      name,
      des,
      message,
      timestamp:date
  })
  const saveEx = await newExclusive.save();
  res.json({Message:"پیام شما ارسال شد!"})
 });
        }catch(err){
          res.json({errMessage:"درخواست ارسال نشد لطفا مجدد تلاش کنید!"})
        }
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler;
