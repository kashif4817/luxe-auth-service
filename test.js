import nodemailer from 'nodemailer';

const otpStore = new Map();

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const sendEmail = async (email) => {
    const otp = generateOTP();
    const expiry = Date.now() + 2 * 60 * 1000;

    otpStore.set(email, { otp, expiry });

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "0112kashif@gmail.com",
            pass: "cxsjspodnpalxzsu",
        },
    });

    const info = await transporter.sendMail({
        from: '"LUXE Store" <0112kashif@gmail.com>',
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP is ${otp}. It expires in 2 minutes.`,
        html: `
            <div style="font-family:Arial,sans-serif;max-width:400px;margin:0 auto;padding:20px;text-align:center;border:1px solid #e5e5e5;border-radius:12px;">
                <h2 style="color:#1c1917;">Your OTP Code</h2>
                <p style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#d97706;margin:20px 0;">${otp}</p>
                <p style="color:#78716c;font-size:14px;">This code expires in <strong>2 minutes</strong>.</p>
            </div>
        `,
    });

    console.log("OTP sent:", info.messageId);
    return otp;
};

const verifyOTP = (email, userOtp) => {
    const record = otpStore.get(email);
    if (!record) return { success: false, message: "No OTP found" };
    if (Date.now() > record.expiry) {
        otpStore.delete(email);
        return { success: false, message: "OTP expired" };
    }
    if (record.otp !== userOtp) return { success: false, message: "Invalid OTP" };
    otpStore.delete(email);
    return { success: true, message: "Verified" };
};

// Usage
console.log('Sending OTP...');
await sendEmail("0874ba478brs112luyboy@gmail.com");
console.log('OTP sent!');

// To verify later:
// const result = verifyOTP("0112luckyboy@gmail.com", "123456");

export { sendEmail, verifyOTP };