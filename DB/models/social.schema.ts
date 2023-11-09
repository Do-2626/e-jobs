import mongoose from "mongoose";
// import { any } from "zod";

const socialSchema = new mongoose.Schema(
  {
    uidProfile: String,
    react: {
      views: [],
      likes: [],
    }
  },
  {
    timestamps: true,
  }
);

const Social1 = mongoose.models.Social1 || mongoose.model("Social1", socialSchema);

export default Social1;
