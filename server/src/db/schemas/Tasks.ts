import mongoose,{ Schema } from "mongoose";
import { ITask } from "../../types/Tasks";

const taskSchema = new Schema<ITask>({
  title: {type:String, required:true},
  status: {type:String, required:true},
  tags:{type:[String], required:true},
  priority:{type:String, required:true},
  projectId: {type:String, required:false, unique:true}
},{timestamps:true});

export const Task = mongoose.model<ITask>("Task", taskSchema);