import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description?: string;
  price: number;
  category: Schema.Types.ObjectId;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

export default model<IProduct>('Product', ProductSchema);
