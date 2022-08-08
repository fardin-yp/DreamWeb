import dbConnect from '../../../../helpers/dataBase';
import jwt from 'jsonwebtoken';
import Sells from "../../models/sells/sells";
import Users from '../../models/userModel';

dbConnect();

export default async (req, res) => {
  const {method} = req;

  switch(method) {
  case("GET"):

  const token = req.cookies.token;

  if(!token){
    return res.json({errMessage:"لطفا وارد اکانت خود شوید"})
  }

  if(token){
  jwt.verify(token , process.env.USERS_JWT_SECRET ,async function(err,decodedToken){
   if(err){   
     res.json({errMessage:"لطفا وارد اکانت خود شوید"})
   } 
   if(decodedToken){
     const {email ,username} = decodedToken;
     const find = await Users.find({email:email});
     const purchases = await Sells.find({email:email})
     res.json({email ,username ,number:find ,purchases:purchases})
   }

  })
}

  break;
 
}
}