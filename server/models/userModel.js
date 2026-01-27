import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        required: [true, 'A user must have an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email' ]
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minLength: 8,
        maxLength: 16
    }
})

const User = mongoose.model('User', userSchema)

export default User