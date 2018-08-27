const express =require('express')
const server = express();
server.listen(9000);
server.use('msg',(req,res)=>{
    res.send({ok:1})
})
server.use(express.static('./'))