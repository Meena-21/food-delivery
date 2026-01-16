import React, { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "../../contest/StoreContext";
import './verify.css'

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { token, url } = useContext(StoreContext);

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        await axios.post(
          url + "/api/order/verify",
          {
            orderId,
            success: success === "true",
          },
          {
            headers: { token },
          }
        );

        // ✅ REDIRECT TO MAIN PAGE AFTER 3 SECONDS
        setTimeout(() => {
          navigate("/myorders", { replace: true });
        }, 2000);

      } catch (error) {
        console.log(error);
      }
    };

    if (token && orderId) {
      verifyPayment();
    }
  }, [token, orderId, success, navigate, url]);

  return (
    <div className="verify">
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>{success === "true" ? "Payment Successful 🎉" : "Payment Failed ❌"}</h2>
        <p>Order ID: {orderId}</p>
        <p>Redirecting to orders...</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Verify;
