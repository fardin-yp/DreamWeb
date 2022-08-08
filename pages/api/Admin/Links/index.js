import dbConnect from '../../../../helpers/dataBase';
import Links from "../../models/Links/Links";

dbConnect();

export default async (req,res) => {
  const {method} = req;

  switch(method) {
        case("POST"):
        const { email , instagram ,telegram ,twitter ,phone} = req.body;

        try{
         const exist = await Links.find();
         
         if(!exist || exist.length === 0){
           const newLinks = new Links({
             email:"dream.web.webiste@gmail.com",
             phone:"09905027669",
             instagram:"#",
             telegram:"#",
             twitter:"#"
           })
           const save = await newLinks.save();
           res.json("Links created")
         }
        if(exist && exist.lenght > 0){
          const filter = exist._id;
          const update = {email ,phone ,instagram ,telegram ,twitter}
          await Links.findOneAndUpdate(filter, update, {

            returnOriginal: false
      
          });
         res.json("Links Updated !")
         }
        }catch(err){
          res.json("Links didnt created !")
        }
    break;
  case("GET"):
  try{
    const findPost = await Links.findOne();
    res.json(findPost)
}catch(err){}
  break;
 
}
}