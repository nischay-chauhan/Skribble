import {model , Schema , Document} from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    username : {
        type : String,
        required : true,
        unique : true,
    },
    resetToken : {
        type : String,
    },
});

const User = model ('User' , userSchema );

export default User