const express = require('express')

const app = express();

app.use("/",(req,res)=>{
    res.status(200).json({message : "Welcome to Express App"})

})

app.listen(3001,()=>{
    console.log("Express Server at 3001")
})