import mongoose, { mongo } from "mongoose";

const infoSchema = mongoose.Schema({
  contactNo: { type: String },
  address: { type: String },
  institute: { type: String },
  degree: { type: String },
  institute_description: { type: String },
})

const preferencesSchema = mongoose.Schema({
  appearance: [String],
})

const userSchema = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  info: [infoSchema],
  preferences:preferencesSchema,
});

const User = mongoose.model("User", userSchema);

export default User;
