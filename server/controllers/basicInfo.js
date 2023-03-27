import mongoose from "mongoose";
import User from "../models/user";

export const getInfos = async (req, res) => {
    try {
        const infos = await User.info.find()

        res.status(200).json(infos);
    } catch (error) {
        res.status(404).json({ message: error})
        
    }
}

export const createInfo = async (req, res) => {
    const info = req.body;

    const newInfo = new User.info({...info});

    try {
        await newInfo.save();
        res.status(201).json(newInfo);
    } catch (error) {
        res.status(404).json({ message: error});
    }
}

export const infoUpdate = async (req, res) => {
    const {id }= req.params;
    const { info } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedInfo = { ...info, id };
    await User.info.findByIdAndUpdate(id, updatedInfo, {new: true});

    res.json(updatedInfo)
}

export const deleteInfo = async (req, res) => {
    const { id } = req.params;

    if (!req.userId) res.status(403).json({ message: "Forbidden"});

    if(!mongoose.Types,ObjectId.isValid(id)) return res.status(404).send("No info found");

    const info = await User.info.findbyIdAndRemove(id);

    res.json({message: "Info Credentials deleted successfully"});
}