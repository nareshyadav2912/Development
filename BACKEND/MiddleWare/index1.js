import ex from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url"
const _dirname=dirname(fileURLToPath(import.meta.url))

const app=ex()

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.sendFile(_dirname+"/Public/index.html") 
})

app.post("/submit",(req,res)=>{
    console.log(req.body)
})
app.listen(3000,()=>{
    console.log("Listening!")
})