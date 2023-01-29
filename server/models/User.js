import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type:string,
            required: true,
            min:2,
            max:50,

        },
        lastname:{
            type:string,
            required: true,
            min:2,
            max:50,

        },
        email:{
            type:string,
            required: true,
            max:50,
            unique:true,
        },
        email:{
            type:string,
            required: true,
            min:5,
        },
        picturePath:{
            type:string,
            default:"",
        },
        friends:{
            type:Array,
            default:[]
        },
        location: string,
        occupation: string,
        viewedprofile:Number,
        impressions: Number,

  
    },
    {timestamps:true}
);  

const User = mongoose.model("User", UserSchema);
export default User;
 