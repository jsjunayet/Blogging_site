import { model, Schema } from 'mongoose';
import { Iblog } from './blog.interface';

const userSchema = new Schema<Iblog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const blogmodel = model('blog', userSchema);
