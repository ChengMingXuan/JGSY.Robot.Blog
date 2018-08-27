const http = require('http');
const url= require('url');
 
// console.log(http)
const fs= require('fs');
let req=http.request({
    'hostname':'dncblocks.com',
    'path':''
},res=>{ 
    var arr=[];
    var str=''
    res.on('data',buffer=>{
        console.log(buffer)
        arr.push(buffer)
        str+=buffer; 
    });
    res.on('end',()=>{
    //  console.log(str,arr)
    fs.writeFile("index.html",str,(err)=>{
console.log("抓取成功！")
    })
     });
});  
req.end();
 


