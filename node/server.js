const http=require('http')
const server=http.createServer((req,res)=>{
    res.statuscode=200;
    res.setHeader('content type','text explain');
    res.end("helllo from the server! \n")

});
server.listen(3001,'127.0.0.1',()=>{
    console.log(`server running at http//127.0.0.1:3001`)
})