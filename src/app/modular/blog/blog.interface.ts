import { Schema } from 'mongoose';

export interface Iblog {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
  isPublished: boolean;
}
