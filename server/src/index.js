const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");

// start app
const app = express();

// connect DB
connectDB();

app.get("/", (_req, res) => res.send(`Hello World`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
