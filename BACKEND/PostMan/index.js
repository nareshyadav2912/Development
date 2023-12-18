import ex from "express"
const app=ex()
app.get("/", (req,res)=>{
    res.send("Hello!")
})
app.post("/register",(req,res)=>{
    res.sendStatus(201)
})
app.put("/user/naresh",(req,res)=>{
    res.sendStatus(200)
})
app.patch("/user/naresh",(req,res)=>{
    res.sendStatus(200)
})
app.delete("/user/naresh",(req,res)=>{
    res.sendStatus(200)
})
app.listen(3000,()=>{
    console.log("Server Started")
})