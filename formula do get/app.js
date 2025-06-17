const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("conta")
})

app.get("/resultado", (req, res) => {
    let nmr = Number(req.query.numero)
    let total = nmr**2
    res.render('resultado', {total})
})

app.listen(port, () => {
    console.log(`Servidor aberto na página https://localhost:${port}`)
})