const express=require("express");

const app=express()

app.get("/",(req,res)=>{
    res.status(200).json({message:"this is docker container"})
})
let port=8000
app.listen(port,()=>{
    console.log(`server start on ..${port}`);
})