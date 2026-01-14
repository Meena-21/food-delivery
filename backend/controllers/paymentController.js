export const processPayment = async (req, res) => {
  try {
    const { orderId, amount, method } = req.body;

    if (process.env.PAYMENT_MODE === "FAKE") {
      return res.json({
        success: true,
        message: "Payment Successful (Simulated)",
        transactionId: "TXN" + Date.now(),
        orderId,
        amount,
        method,
        status: "PAID"
      });
    }

  } catch (error) {
    res.status(500).json({ success: false, message: "Payment Failed" });
  }
};
