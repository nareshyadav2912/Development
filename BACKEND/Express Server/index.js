import ex from "express"
const app=ex()
app.get("/",(req,res)=>{
    res.send("Hey, Naresh!")
    console.log(req.rawHeaders)
})
const port=3000
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})