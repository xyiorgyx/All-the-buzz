import { Schema, model } from "mongoose"

const hiveSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        owner: {
            type: String,
            maxLength: 40,
        },
        location: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    },
)

export const Hive = model('Hive', hiveSchema)