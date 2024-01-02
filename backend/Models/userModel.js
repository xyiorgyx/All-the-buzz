import mongoose from "mongoose"
const Schema = mongoose.Schema;

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
            match: [/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/]
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        },
        hives: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Hive'
            }],
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

