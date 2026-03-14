import dotenv from 'dotenv'

dotenv.config();

export function validateEnv() {
    const requiredEnv = [
        "DB_HOST",
        "DB_USER",
        "DB_PASSWORD",
        "DB_NAME",
        "JWT_SECRET",
        "JWT_EXPIRES_IN",
        "REFRESH_SECRET",
        "JWT_REFRESH_IN",
        "EMAIL_USER",
        "EMAIL_PASS",
        "PORT"
    ];

    requiredEnv.forEach((key) => {
        if (!process.env[key]) {
            console.error(`Missing environment variable: ${key}`)
            process.exit(1)
        }
    });

}
