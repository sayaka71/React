import mongoose from "mongoose"

// 非同期処理 (async await)
const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb+srv://kanai:mongo-pwd@cluster0.kflyuot.mongodb.net/?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB");
    } catch (error) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error("Failure");
        
    }
};

export default connectDB;