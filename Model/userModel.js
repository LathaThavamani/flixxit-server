
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        useremail: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },

        likes: { type: Schema.Types.Array },
        dislikes: { type: Schema.Types.Array },
        myList: { type: Schema.Types.Array }
    }
);
const User = mongoose.model('Users', userSchema)
export { User }