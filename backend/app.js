const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

const authRoutes = require("./routes/authRoutes");
const cropRoutes = require("./routes/cropRoutes");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/crops", cropRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use(errorMiddleware);







// Health Check Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "KrishiMitra Backend Running 🚜"
    });
});

module.exports = app;