//postgresql://postgres:901206@localhost:5432/eventos_exer
require("dotenv").config();
const express = require("express")
const router = require("./router")

const app = express()

app.use(express.json())

app.use("/api", router)

const PORT = 5000
app.listen(PORT, () => console.log(`Servidor iniciado em <http://localhost>:${PORT}/`))