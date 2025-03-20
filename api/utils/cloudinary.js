import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloud upload
export const cloudUpload = async (files) => {
  const uploads = files.map((file) => cloudinary.v2.uploader.upload(file.path));
  const urls = await Promise.all(uploads);
  return urls.map((url) => url.secure_url);
};
