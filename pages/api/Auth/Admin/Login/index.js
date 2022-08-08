import dbConnect from '../../../../../helpers/dataBase';
const jwt = require('jsonwebtoken')
import Admin from '../../../models/adminModel';
const bcrypt = require('bcryptjs');

dbConnect();

export default async (req,res) => {
  const {method} = req;

  switch(method) {
        case("POST"):
        try{
            const {email , password } = req.body;
      
            if(!email || !password) {
              return res.json({errMessage:"please enter all require feilds"})
            }
         
          const existingUser = await Admin.findOne({email});
      
          if(!existingUser){
          return res.json({errMessage:"wrong email or password"})
          }
       const correct = await bcrypt.compare(password, existingUser.passwordHash)
        if(!correct){
          return res.json({errMessage:"wrong email or password"})
        }
      
        //sign the token
        const token =jwt.sign(
          {
          email:email
          }
        , process.env.JWT_SECRET
        );
      
      
        // send the token
        res.cookie("Admin" ,token , {
          httpOnly:true,
          secure:true
        })
        .send()
      
          }catch(err){
            res.json({errMessage:err})
          }
    break;

  case("GET"):
    try{
    const token = req.cookies.Admin;

    if(!token) return res.json(false);

if(token){
  jwt.verify(token , process.env.JWT_SECRET ,async function(err,decodedToken){
    if(err){   
     return res.json(false)
    } 
    if(!err && decodedToken.email){
      const {email} = decodedToken;
      const find = await Admin.find({email});
      const allAdmin = await Admin.find();
      
      if(find[0].roll === "master"){
       return res.json({email,find ,allAdmin})
      }
      if(find[0].roll !== "master"){
        return res.json({email,find})
      }
    }
 
   })
}

}catch(err){
    res.json(false)
}
  break;
  case("PUT"):
  const { password ,username ,id } = req.body;

  try{

    if(!password , !username || !id){
      return res.json({errMessage:"تمامی فیلد ها الزامی است"})
    }
    if(username.length > 16){
      return res.json({errMessage:"نام کاربری نمیتواند بیشتر از 16 کاراکتر باشد"})
    }
    if(password.length < 6){
      return res.json({errMessage:" رمز عبور نمیتواند کمتر از 6 کاراکتر باشد"})
    }

    const exist = await Admin.findById(id);

    if(!exist) {
      return res.json({errMessage:"این ادمین وجود ندارد"})
    }

    if(exist){
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password ,salt);
      const filter = {_id:id}
      const update = {username:username ,passwordHash:passwordHash}
      const existing = await Admin.findOneAndUpdate(filter, update, {
        new: true,
        returnOriginal:false,
        upsert: true,
        rawResult: true // Return the raw result from the MongoDB driver
      });
       res.json({message:"پروفایل آپدیت شد !"})
    }

  }catch(err){
    res.json({errMessage:"مشکلی پیش آمده !"})
  }

  break;
 
}

}