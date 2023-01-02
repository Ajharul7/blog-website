import mongoose from "mongoose";


const Connection = async(URL) => {
    let URL = "mongodb+srv://ajharul7:ajharul1234@cluster0.c94fagc.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL,{useNewUrlParser : true,useUnifiedTopology: true});
        console.log("database connect");
    }
    catch (error) {
        console.log("Error in connect MDB");
        console.log(error);
    }
}

export default Connection;
