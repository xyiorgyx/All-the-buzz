import mongoose from "mongoose"


const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
          },
          lastName: {
            type: String,
            required: true,
          },
          profilePicture: String,
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
          },
        isAdmin: {
            type: Boolean,
            default: false,
          },
          accountStatus: {
            type: String,
            enum: ['active', 'inactive', 'suspended'],
            default: 'active',
          },
        hives: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hive"
            }
        ],

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

