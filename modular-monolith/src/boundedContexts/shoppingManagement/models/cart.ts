import { Schema, model, Document } from 'mongoose';

interface ICartItem {
  product: Schema.Types.ObjectId;
  quantity: number;
}

interface ICart extends Document {
  user: Schema.Types.ObjectId;
  items: ICartItem[];
}

const CartItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 }
});

const CartSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [CartItemSchema]
});

export default model<ICart>('Cart', CartSchema);
