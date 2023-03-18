import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const signIn = async (req, res) => {
    const {email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        console.log(existingUser.email);

        if(!existingUser) return res.status(404).json({message: "User doesn't Exist"}); 

        const isPasswordCorrect = bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) {
            return res.status(400).json({message: "Invalid Credentials"});
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'test', {expiresIn: "1h"});

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({message: "Something went wrong"});
    }
};

export const signUp = async (req, res) => {
    const { email, password, confirmPassword,firstName, lastName } = req.body;
    console.log(email);

    try {
        const oldUser = await User.findOne({ email });
        // console.log(oldUser);
        if (oldUser) {
            return res.status(400).json({message: "User already exists"});
        }

        if(password !== confirmPassword) {
            return res.status(400).json({message: "Passwords don't match"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id: result._id}, `test`, {expiresIn: "1h"});

        res.status(201).json({result, token});
    } catch (error) {
        res.status(500).json({message: "Something Went Wrong"});
    }

}