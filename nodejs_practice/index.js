const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        let fileLocation = path.join(__dirname,'index.html')
        fs.readFile(fileLocation,(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'application/json'})
                res.end(JSON.stringify({message : 'Error loading file'}))
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)

        })
    }
    else if(req.url === '/users'){
        const fileLocation = path.join(__dirname,'users.json')
        fs.readFile(fileLocation,(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'application/json'})
                res.end(JSON.stringify({message : 'Error loading file'}))
            }
            res.writeHead(200, {'Content-Type' : 'application/json'})
            res.end(data)
        })
    }
    else if(req.url === '/about'){
        const loc = path.join(__dirname,"about.txt")
        fs.readFile(loc,(err,data)=>{
            if(err){
                res.writeHead(500,{'Content-Type':'application/json'})
                res.end(JSON.stringify({message : 'Error loading file'}))
            }
            res.writeHead(200,{'Content-Type':"text/html"})
            res.end(data)
        })

    }else{
        res.writeHead(404,{'Content-Type' : "application/json"})
        res.end(JSON.stringify({message : "No URL found"}))
    }
})

server.listen(3002,()=>{
    console.log("server listning in 3002")
})