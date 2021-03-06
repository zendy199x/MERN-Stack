const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");

// start app
const app = express();
app.use(express.json());
app.use(cors());

// connect DB
connectDB();

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
