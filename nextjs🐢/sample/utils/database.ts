import mongoose from "mongoose"
import { SystemConst } from "./const";

// 非同期処理 (async await)
const connectDB = async() =>{
    try {
        await mongoose.connect(SystemConst.Server.dbURL);
        console.log("Success: Connected to MongoDB");
    } catch (error) {
        console.log("Failure: Unconnected to MongoDB");
        throw new Error("Failure");
        
    }
};

export default connectDB;