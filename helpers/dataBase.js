import mongoose from 'mongoose';
const connection = {}

async function dbConnect (){
    if(connection.isConnected){
        return;
    }

    const db = await mongoose
    .connect("mongodb+srv://fardin:fardin0078@realmcluster.eepea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });

    connection.isConnected = db.connections[0].readyState;

}

export default dbConnect;

