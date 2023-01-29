import bcrypt from "bcrypt";
import { Jwt } from "jsonwebtoken";
import User from "../models/User.js" ;


/* REGISTER USER */

export const register = async(req, res)=>{
    try{
        const{
            firstname,
            lastname,
            email,
            password,
            picturePath,
            friends,
            location,
            occupation

        }=req.body;
         
        const salt = await bcrypt.genSalt();
        const passwordHash =await bcrypt.hash(password, salt);

        const newUser = new User({
            firstname,
            lastname,
            email,
            password:passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedprofile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000)
             

        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json({error:err.message});

    }

};