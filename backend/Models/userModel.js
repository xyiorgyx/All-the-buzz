import mongoose from "mongoose"


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password:{
            type:String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        },
    },
    {
        timestamps: true
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
            
        },
        id: false,
    }
);

userSchema
    .virtual('hiveCount')
    .get(function () {
        return `${this.hives.length}`;
    });

export const User = mongoose.model('User', userSchema);

