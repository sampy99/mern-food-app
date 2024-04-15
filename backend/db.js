
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const mongoURL = "mongodb+srv://easyfood:EasyFood1234@cluster0.xvseyfu.mongodb.net/easyfoodmern?retryWrites=true&w=majority&appName=Cluster0"
const mongoDB = async() => {
    await mongoose.connect(mongoURL, {useNewUrlParser: true}, async (err,result)=> {
        if(err) console.log("-------",err)
        else{
            console.log("connected successfully");
            const fetched_data =  await mongoose.connection.db.collection("foodData");
            fetched_data.find({}).toArray(function(err,data){
                if(err) console.log(err);
                else console.log();
            })
    
        }      
            
    });

}

module.exports = mongoDB;

// const mongoose = require('mongoose');

// const mongoURL = "mongodb+srv://easyfood:EasyFood1234@cluster0.xvseyfu.mongodb.net/yourDatabaseNameHere?retryWrites=true&w=majority";

// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected successfully");
//     } catch (error) {
//         console.error("Connection error:", error);
//     }
// }

// module.exports = mongoDB;




    


