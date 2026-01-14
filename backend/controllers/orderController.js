import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js'

const placeOrder = async (req, res) => {
  const frontend_url = "http://localhost:5174";

  try {
    // 1. Create Order (payment is FALSE by default)
    const newOrder = new orderModel({
      userId: req.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();

    // 2. Clear cart
    await userModel.findByIdAndUpdate(req.userId, { cartData: {} });
    console.log("USER ID:", req.userId);

    // 3. Redirect to verify page
    res.json({
      success: true,
      session_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Order Failed" });
  }
};


// orderController.js
export const verifyOrder = async (req, res) => {
  try {
    const { orderId, success } = req.body;

    if (!success) {
      return res.json({ success: false, message: "Payment Failed" });
    }

    await orderModel.findByIdAndUpdate(orderId, {
      payment: true
    });

    res.json({ success: true, message: "Payment Verified" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

export const myOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

// user order for frontend

export const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({userId:req.userId});
    res.json({success:true, data:orders})
  } catch (error) {
    console.log(error)
    res.json({success:false, message:"Error"})
  }
}

//listing orders for admin panel
export const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({success:true, data:orders})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }
}

// api for updating order status
export const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {status:req.body.status})
    res.json({success:true, message:"Status Updated"})
  } catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})
  }
}

export { placeOrder};
