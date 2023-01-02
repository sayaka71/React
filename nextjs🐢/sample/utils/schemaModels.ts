import mongoose from "mongoose";

const Schema = mongoose.Schema

const ItemSchema = new Schema({
    uploadTime: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        require: true,
    },
    description: String,
    image: {
        data: Buffer,
        contentType: String,
    }
})

export const ItemModel = mongoose.models.Item || mongoose.model("Item", ItemSchema);