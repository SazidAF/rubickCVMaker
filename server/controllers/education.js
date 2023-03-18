import mongoose from "mongoose";
// import User from "../models/user";
import User from "../models/user.js";

export const educationInfo = async (req, res) => {
  //   const { id } = req.params;
  console.log(req.body);
  const { userId, institute, degree, description } = req.body;
  console.log(userId);
  const isUser = User.findById(userId);
  await User.findByIdAndUpdate(
    userId,
    {
      institute: institute,
      degree: degree,
      institute_description: description,
    }
    // { new: true }
  );

  //   if (!mongoose.Types.ObjectId.isValid(id))
  //     return res.status(404).send(`No post with id: ${id}`);

  // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  // await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  // res.json(updatedPost);
};
