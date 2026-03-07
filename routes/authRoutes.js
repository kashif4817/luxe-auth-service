
import express from "express";
<<<<<<< HEAD
import { signup, signin, refreshToken, checkEmail, verifyEmail, forgetPassword, verifyOtp } from "../controllers/authControllers.js";
import { signupSchema, signinSchema, checkEmailSchema } from "../validations/auth.validation.js";
=======
import { signup, signin, refreshToken } from "../controllers/authControllers.js";
import { signupSchema, signinSchema } from "../validations/auth.validation.js";
>>>>>>> 22be10d6f065883ada81fbf96d7ece494df7a5cf
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);
router.post("/refresh-token", refreshToken);
<<<<<<< HEAD
router.post("/check-email", validate(checkEmailSchema), checkEmail);
router.post("/verify-email", verifyEmail)
router.post("/forget-password", validate(checkEmailSchema), forgetPassword)
router.post("/verify-otp", verifyOtp)
=======
>>>>>>> 22be10d6f065883ada81fbf96d7ece494df7a5cf


export default router;