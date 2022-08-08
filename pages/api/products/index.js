const AdminRoute = require("express").Router();
const Products = require('../../models/products/products');
const multer = require('multer');
import dbConnect from '../../../helpers/dataBase';

dbConnect()

const storage = multer.diskStorage({
    destination:(req , file ,callback) => {
       callback(null , './public/uploads/')
    },
    filename:(req ,file , callback) => {
      callback(null , file.originalname);
    }
  })
  
  const upload = multer({storage:storage});
  const date = new Date().toLocaleDateString("fa-IR" ,{timeZone:"Asia/Tehran" } )

  export default async (req , res) => {
    switch(method){
        case("GET"):
    const newPost = new Products({
      name:req.body.name,
      image:req.file.originalname,
      price:req.body.price,
      off:req.body.off,
      category:req.body.category,
      property:[],
      description:req.body.description
    })
    
    try {

      const savedPost = await newPost.save();
      res.json({Message:"پست با موفقیت ارسال شد!"})
  
    }catch(err){
     console.log(err)
    }
}
    break;
}