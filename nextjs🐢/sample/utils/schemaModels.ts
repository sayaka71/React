import mongoose from "mongoose";
import { ItemDataType } from "./types";

const Schema = mongoose.Schema

const ItemSchema = new Schema<ItemDataType>({
    uploadTime: {
        type: Date,
        default: Date.now,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: false,
    },
    image: {
        data: Buffer,
        contentType: String,
    }
})

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
})

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);
export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);