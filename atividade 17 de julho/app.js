const express = require("express")
const app = express()
const porta = 3000
const rotaresult = app.route("/resultado")

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

rotaresult.get((req,res)=>{
    res.redirect("/")
})  

rotaresult.post((req,res)=>{
    let nmr1 = Number(req.body.nmr1)
    let nmr2 = Number(req.body.nmr2)
    let op = req.body.op
    let total
    if(op=="+"){
                total = nmr1 + nmr2
    }
    else if(op=="-"){
            total = nmr1 - nmr2
    }
    else if(op=="*"){
           total = nmr1 * nmr2
    }
    else if(op=="/"){
            total = nmr1 / nmr2
        
    }
    else {
        return res.render("erro")
    }
    res.render("resultado",{total})
})


app.listen(porta,()=>{
    console.log(`Servidor rodando na porta http://localhost:${porta}`)  
})
