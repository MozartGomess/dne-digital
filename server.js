// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const bodyParser = require('body-parser');

dotenv.config();

// Conectar ao banco de dados
connectDB();

const app = express();

// Middleware para permitir requisições de diferentes origens
app.use(cors());

// Middleware para ler o corpo das requisições como JSON
app.use(express.json());
app.use(bodyParser.json()); // Para ler o corpo das requisições em JSON

// Definir as rotas da API
app.use("/api/auth", authRoutes); // Rotas de autenticação (login, cadastro, redefinição de senha)
app.use("/api/students", studentRoutes); // Rotas de estudantes

// Definir a porta e iniciar o servidor
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
