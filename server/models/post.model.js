import mongoose, { Schema } from 'mongoose';
import modelOptions from './model.options.js';

const postSchema = new Schema(
  {
    title: {
      type: String,
      default: '',
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
      required: true,
    },
    priority: {
      type: String,
      enum: ['High', 'Medium', 'Low'],
      required: true,
    },
    timeStart: {
      type: String,
      // default: Date.now(),
      required: true,
    },
    timeEnd: {
      type: String,
      // default: Date.now(),
      required: true,
    },
    date: {
      type: String,
      // default: Date.now(),
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
  },
  modelOptions,
);

const postModel = mongoose.model('posts', postSchema);

export default postModel;
