const express =require('express')
const server = express();
server.listen(9000,error=>{
    if(error) console.log(error.stact)
});
server.use('msg',(req,res)=>{
    res.send({ok:1})
})
server.use(express.static('./'))