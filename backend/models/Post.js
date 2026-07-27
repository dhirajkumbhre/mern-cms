import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    excerpt: {
      type: String,
      default: "",
      trim: true,
    },


    imageUrl: {
  type: String,
  default: "",
},

    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Draft",
    },

    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Post", postSchema);