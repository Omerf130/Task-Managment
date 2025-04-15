import mongoose,{ Schema } from "mongoose";
import { IProjectForm } from "../../types/Projects";

const projectSchema = new Schema<IProjectForm>({
  name: {type:String, required:true},
  description: {type:String, required:true},
  dueDate: {type:Date, required:true},
  userId: {type:String, required:false},
},{timestamps:true});

export const Project = mongoose.model<IProjectForm>("Project", projectSchema);