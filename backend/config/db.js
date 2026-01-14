import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Meenakshi:Meenakshi_2003@cluster0.gz4sc1l.mongodb.net/food-del').then(() => console.log("DB Connected"))
}