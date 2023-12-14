//console.log("hello")
const fs=require("fs")
fs.writeFile("one.txt","hello heyy",(err)=>{
    if(err) throw err
    console.log("saved")
})
fs.readFile("one.txt",'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})