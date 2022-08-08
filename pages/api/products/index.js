const Products = require('../models/products/products');
import dbConnect from '../../../helpers/dataBase';

dbConnect()
  
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
    break;
}
    
}