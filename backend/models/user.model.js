import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: { type: String, requried: true },
    email: { type: String, requied: true, unique: true },
    phoneNumber: { type: Number, requied: true },
    password: { type: String, requied: true },
    role: { type: String, enum: ['student', 'recruiter'], requied: true },
    profile: {
        bio: { type: String },
        skills: [{ type: String }],
        resume: { type: String },
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: { type: String, default: "" }
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);