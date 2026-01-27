import mongoose from "mongoose"
import validator from "validator"
import bcrypt from "bcryptjs"

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

userSchema.pre('save', async function() {
     if(!this.isModified('password')) return;

     this.password = await bcrypt.hash(this.password, Number(process.env.SALT_ROUND))
}
)
userSchema.methods.validPassword = async function(candidatePassword, userPassword) {
    return bcrypt.compare(candidatePassword, userPassword)
}

 const User = mongoose.model('User', userSchema)

 export default User