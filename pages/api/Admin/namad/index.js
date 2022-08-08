import dbConnect from '../../../../helpers/dataBase';
import Namad from "../../models/namad";

dbConnect();

export default async (req,res) => {
  const {method} = req;

  switch(method) {
        case("POST"):
        try{
            const sendPost = new Namad({
               image:req.file.originalname
            })
            
              const savePOst = await sendPost.save()
              res.json("نماد ارسال شد!")
              }catch(err){
                res.send(true)
              } 
    break;
  case("GET"):
  try{
    const namad = await Namad.find()
    
      res.json(namad)
      }catch(err){
       res.json({errMessage:"namad  err"})
      } 
  break;
 
}
}