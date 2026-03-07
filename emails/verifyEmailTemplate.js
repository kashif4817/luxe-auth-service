export const verifyEmailTemplate = (otp) => {

    return `
            <div style="font-family:Arial,sans-serif;max-width:400px;margin:0 auto;padding:20px;text-align:center;border:1px solid #e5e5e5;border-radius:12px;">
                <h2 style="color:#1c1917;">Your OTP Code</h2>
                <p style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#d97706;margin:20px 0;">${otp}</p>
                <p style="color:#78716c;font-size:14px;">This OTP expires in <strong>2 minutes</strong>.</p>
            </div>
        `
}