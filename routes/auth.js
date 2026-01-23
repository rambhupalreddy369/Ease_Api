const express = require("express");
const { sendOTPHandler, verifyOTPHandler } = require("../controllers/auth");

const router = express.Router();

// Send OTP
router.post("/send-otp", sendOTPHandler);

// Verify OTP
router.post("/verify-otp", verifyOTPHandler);

module.exports = router;
