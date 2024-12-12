import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: { type: String, requried: true },
    description: { type: String, requried: true },
    requirements: [{ type: String }],
    salary: { type: String, requried: true },
    location: { type: String, requried: true },
    jopType: { type: String, requried: true },
    position: { type: String, requried: true },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', requried: true },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', requried: true },
    applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application', }],
}, { timestamps: true });

export const Job = mongoose.model('Job', jobSchema)