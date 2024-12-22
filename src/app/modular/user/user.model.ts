import { model, Schema } from "mongoose";
import { Iuser } from "./user.interface";

const userSchema = new Schema<Iuser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isBlocked: { type: Boolean, default: false },
}, { timestamps: true });

export const usermodel = model('user', userSchema)