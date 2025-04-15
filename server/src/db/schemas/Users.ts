import mongoose,{ Schema } from "mongoose";
import { IUser } from "../../types/Users";

const userSchema = new Schema<IUser>({
  userName: {type:String, required:true, unique:true},
  email: {type:String, required:true, unique:true},
  password: {type:String, required:false},
  role: {type: String}
},{timestamps:true});

export const User = mongoose.model<IUser>("User", userSchema);