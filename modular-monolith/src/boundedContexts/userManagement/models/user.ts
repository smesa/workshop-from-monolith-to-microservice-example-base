import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
});

export default model<IUser>("User", UserSchema);
