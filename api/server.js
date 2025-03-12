import express from "express";
import cors from "cors";
import "dotenv/config";
import colors from "colors";
import cookieParser from "cookie-parser";
import mongoDbConnection from "./config/db.js";
import router from "./routes/api.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// routes
app.use("/api", router);

// connect to mongodb
mongoDbConnection();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.bold);
});
