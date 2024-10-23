import { schema, model, models, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "email already exists"],
    required: [true, "Email is required"],
  },

  username: {
    type: String,
    required: [true, "Username is required"],
  },

  image: {
    type: String,
  },

  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
}, {
  timestamps: true,
});

const User = models.User || model("User", userSchema);

export default User;