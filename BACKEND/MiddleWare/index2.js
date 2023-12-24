import ex from 'express'
import morgan from 'morgan'
const app=ex()
app.use(morgan("combined"))
app.use(morgan("tiny"))
app.use(morgan("dev"))
app.get("/",(req,res)=>{
    res.send("Hello")
})
app.listen(3000,()=>{
    console.log("Listnening");
})