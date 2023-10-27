import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: String,
    description: String
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export default Job;
