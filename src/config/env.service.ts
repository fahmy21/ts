import { config } from "dotenv";
import path from "path";

config({
    path: path.resolve(`./.env.${process.env.NODE_ENV}`)
});

console.log("NODE_ENV =", process.env.NODE_ENV);
console.log("PORT =", process.env.PORT);

const port = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}
const mood = process.env.MOOD;
const salt = process.env.SALT;
const adminsignature = process.env.ADMIN_SIGNATURE;
const usersignature = process.env.USER_SIGNATURE;
const userRefreshTokensignature = process.env.USER_REFRESH_TOKEN;
const adminRefreshTokensignature = process.env.ADMIN_REFRESH_TOKEN;
const googleAppPassword = process.env.GOOGLE_APP_PASSWORD;
const googlAccountEmail = process.env.GOOGLE_ACCOOUNT_EMAIL;
const serverUrl = process.env.SERVER_URL;
const redisUrl = process.env.REDIS_URL;

export const env = {
    port,
    mood,
    salt,
    adminsignature,
    usersignature,
    userRefreshTokensignature,
    adminRefreshTokensignature,
    googleAppPassword,
    googlAccountEmail,
    serverUrl,
    redisUrl,
    MONGO_URI
};