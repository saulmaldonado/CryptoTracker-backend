import { Schema } from 'mongoose';

export const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
      // unique: true,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
  },
  { collection: 'auth' }
);