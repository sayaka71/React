import mongoose from "mongoose";
import { ItemDataType } from "./types";

const Schema = mongoose.Schema

const ItemSchema = new Schema<ItemDataType>({
    uploadTime: {
        type: Date,
        default: Date.now,
        required: true,
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

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);