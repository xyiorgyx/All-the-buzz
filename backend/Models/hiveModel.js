import mongoose from "mongoose"

const hiveSchema = mongoose.Schema(
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
        hives:[{
            type: objectID
        }]
    },
    {
        timestamps: true
    },
)

export const Hive = mongoose.model('Hive', hiveSchema)