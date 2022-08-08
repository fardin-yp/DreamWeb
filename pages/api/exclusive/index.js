import dbConnect from '../../../helpers/dataBase';
import Exclusive from '../../../models/Exclusive/exclusive'

dbConnect()

export default async (req ,res) => {
    const date = new Date().toLocaleDateString("fa-IR" ,{timeZone:"Asia/Tehran" } )
    const {method} = req;
    const {email ,number ,name ,des} = req.body;

    switch(method) {
        case("POST"):
        try {

            if(!number){
                return res.json({errMessage:"فیلد شماره همراه الزامی است" ,err:"number"})
            }
            if(number.length !== 11){
                return res.json({errMessage:" تعداد رقم های شماره تلفن باید 11 رقم باشد!" ,err:'number'})
              }
            if(number.charAt(0) !== "0" || number.charAt(1) !== "9" ) {
                return res.json({errMessage:" لطفا شماره تلفن صحیح را وارد نمایید!" ,err:"number"})
              }
            if(!name){
                return res.json({errMessage:"فیلد  نام الزامی است" ,err:"name"})
            }
            // const exist = Exclusive.find({number:number});
            // if(exist){
            //     return res.json({errMessage:"درخواست شما قبلا ارسال شده است منتظر تایید بمانید"})
            // }
        
            const newExclusive = new Exclusive({
                email,
                number,
                des,
                name,
                timestamp:date
            })
            const saveEx = await newExclusive.save();
            res.json({Message:"درخواست با موفقیت ارسال شد!"})
        }catch(err){
           res.json({errMessage:"درخواست ارسال نشد لطفا مجدد تلاش کنید!"})
        }
        break;
    }
   
}