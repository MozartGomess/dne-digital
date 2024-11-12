// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const bodyParser = require('body-parser');

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json()); // Para ler o corpo das requisições em JSON

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});




