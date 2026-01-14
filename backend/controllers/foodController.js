import foodModel from "../models/foodModel.js";
import fs from 'fs'

export const addFood = async (req, res) => {
  try {
    console.log("FILE:", req.file);
    console.log("BODY:", req.body);

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: req.file.filename
    });

    await food.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully",
      food
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }

};

export const listFood = async (req, res) => {
  try{
    const foods = await foodModel.find({});
    res.json({success:true, data:foods})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Error"})
  }
}

export const removeFood = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Food ID is required"
      });
    }

    const food = await foodModel.findById(id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food item not found"
      });
    }

    // delete image safely
    fs.unlink(`uploads/${food.image}`, (err) => {
      if (err) console.log("Image delete error:", err.message);
    });

    await foodModel.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Food item removed successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
