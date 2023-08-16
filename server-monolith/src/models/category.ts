import { Schema, model, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  description?: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true },
  description: String,
});

export default model<ICategory>("Category", CategorySchema);
