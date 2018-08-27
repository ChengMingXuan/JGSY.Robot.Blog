const url= require('url');
const fs= require('fs');
// const http= require('http');
  GetUrl("https://ke.qq.com/webcourse/index.html#cid=255101&term_id=100300751&taid=1763771270030461&vid=d1422qhapo5",data=>{
       
        fs.writeFileSync("asd.html",data,()=>{
            console.log("成功！！！！！！！！！！！");
        });
})

function GetUrl(sUrl,success){
        var urlObj=url.parse(sUrl);
        var http;
        if(urlObj.protocol == "http:")
        {
            http=require("http")
        }else if(urlObj.protocol == "https:"){
            http=require("https")
        }
  
        let req=http.request({
            'hostname':urlObj.hostname,
            'path':urlObj.path
            },res=>{
                        var arr=[];
                        var str=''
                        res.on('data',buffer=>{
                            console.log(buffer)
                            arr.push(buffer)
                            str+=buffer; 
                        });
                        res.on('end',()=>{
                            let b = Buffer.concat(arr);

                            success && success(b);
                            console.log(str,arr)
                            // fs.writeFile("index.html",str,(err)=>{
                            //     console.log("抓取成功！")
                            // });
                        });
                });
        req.end();
        req.on('error',err=>{ 
             console.log("404!!!!!!!!!!!!!!"); 
             console.log(err.stack); 
            });
}


