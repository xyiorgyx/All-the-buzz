import mongoose from "mongoose"

const hiveSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: false,
        },
        owner: {
            type: String,
            maxLength: 40,
        },
        location: {
            type: String,
            required: true,
        },
        inspections: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Inspection"
            }
        ],
    },
    {
        timestamps: true
    },
)

export const Hive = mongoose.model('Hive', hiveSchema)