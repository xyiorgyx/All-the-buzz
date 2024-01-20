import mongoose from "mongoose"

const inspectionSchema = mongoose.Schema(
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

export const Inspectrion = mongoose.model('Inspection', inspectionSchema)