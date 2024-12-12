import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: { type: String, requried: true },
    description: { type: String },
    website: { type: String },
    location: { type: String },
    logo: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", requiried: true }
}, { timestamps: true })

export const Company = mongoose.model('Company', companySchema)