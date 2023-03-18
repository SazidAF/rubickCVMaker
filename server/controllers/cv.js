import mongoose from "mongoose";
import express from "express";
import CV from "../models/cv";


export const createCV = async (req, res) => {
  const post = req.body;

  const newCV = new CV({});

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json( { message: err.message } );
  }
}

export const updateCV = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No CV with id: ${id}`);

    const updatedCV = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedCV, { new: true });

    res.json(updatedPost);
}

export const deleteCV = async (req, res) => {
  const { id } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No CV with id: ${id}`);

  await CV.findByIdAndRemove(id);

  res.json({ message: "CV deleted Successfully!"});
}

