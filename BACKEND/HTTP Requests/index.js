console.log("hello")
import ex from 'express'
const app=ex()
app.get("/",(req,res)=>{
    res.send("Hello Naresh")
    console.log(req.rawHeaders);
})
app.get("/about",(req,res)=>{
    res.send("I'm from Siddipet.")
})
app.get("/contact",(req,res)=>{
    res.send("Contact Me:naresh.g2912@gmail.com")
})
app.listen(3000,()=>{
    console.log("Server started")
})
