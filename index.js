const PORT = process.env.PORT || 3000
const express = require("express")
const tickets = require("./tickets")
const app = express()


app.use(express.json())
app.use("/getAnswer", (req, res)=>{
    res.setHeader("Content-Type", "application/json")

    if(req.query.t && req.query.q){
        res.send(JSON.stringify(tickets[req.query.t][req.query.q - 1]))
    } else {
        res.send(JSON.stringify({
            status:{
                code:500,
                message:"Set t and q for query parameters"
            }
        }))
    }
    res.end()
})
app.use("/", (req, res)=>{
    res.send(JSON.stringify({
        status:{
            code:200,
            message:""
        },
        data:{
            text:"Complete"
        }
    }))
    res.end()
})



app.listen(PORT, ()=>{
    console.log("Started on port", PORT)
})