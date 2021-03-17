import dotenv from 'dotenv'
dotenv.config()
export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD : process.env.PASSWORD
    },
    INVALID_USER: {
        USERNAME: process.env.INVALID_USER,
        PASSWORD: process.env.INVALID_PASSWORD
    },
    CHECKOUT_USER_INFO:{
        FIRSTNAME: process.env.FIRSTNAME,
        LASTNAME: process.env.LASTNAME,
        ZIP: process.env.ZIP
    }
}