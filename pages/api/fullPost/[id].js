import Products from '../models/products/products';
import dbConnect from '../../../helpers/dataBase';

dbConnect()

export default async (req , res) => {

    const {method} = req;
    const id = req.query.id;

    switch(method){
      case("GET"):
      try{
            const findPost = await Products.findById(id)
        
            res.json(findPost);
      }catch(err){
            res.send(true)
      } 
      break;
    }

    
}