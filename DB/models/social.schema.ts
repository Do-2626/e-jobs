import mongoose from "mongoose";

const socialSchema = new mongoose.Schema(
  {
    idProfile: String,
    views: [],
    likes: [],
  },
  {
    timestamps: true,
  }
);

const Social = mongoose.models.social || mongoose.model("social", socialSchema);

export default Social;
