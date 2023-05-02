import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;
const URL_DATABASE_PRODUCT = process.env.URL_DATABASE_PRODUCT || "";
const URL_DATABASE_DEV = process.env.URL_DATABASE_DEV || "";
const SECRET_KEY = process.env.SECRET_KEY;
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

export {
  PORT,
  URL_DATABASE_PRODUCT,
  URL_DATABASE_DEV,
  SECRET_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
};
