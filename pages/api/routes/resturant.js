import dbConnect from '../../../helpers/dataBase';
import Products from '../../../models/products/products';

dbConnect()

export default async (req ,res) => {
    const {method} = req;
    let { page } = req.query;
 
    if(!page) {
       page = 1;
    }

    switch(method) {
        case("GET"):
        try{
            let size = 10;
            const limit = parseInt(size);
            const skip = (page - 1 ) * size;
      
         const total = await Products.find({category:"resturant"}).countDocuments();
         const pages = Math.ceil(total / limit);
         
         const findPost = await Products.find({category:"resturant"}).sort({"_id":-1}).limit(limit).skip(skip);
     
            res.json({ findPost, pages ,page ,route:"shop-website" });
           }catch(err){
              res.send(true);
           } 
        break;
    }
   
}