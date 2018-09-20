#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Node4.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "cf4d0edb06239b15e6cb563d2ae5ea15a9a20849"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_Node4), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/Node4.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/Node4.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_Node4))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"cf4d0edb06239b15e6cb563d2ae5ea15a9a20849", @"/Areas/NodeJs/Views/Node/Node4.cshtml")]
    public class Areas_NodeJs_Views_Node_Node4 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2442, true);
            WriteLiteral(@"<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h4>nodejs 入门简单爬虫案例</h4>
</div>
<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h4>express 是 Node.js 上最流行的 Web 开发框架，下面就使用express框架实现一个入门级的小案例</h4>
</div>
<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h5>备注：推荐 淘宝 NPM 镜像，如 cnpm install express --save</h5>
    <h5>
        1、创建一个文件夹，TheCrawler,在文件夹中添加一个app.js。通过 npm init命令创建一个package.json文件，package.json主要是用来管理依赖版本，初始化文件时会有一些设置，空文件夹entry point你默认的是（index.js），
        这里我已经提前创建了，默认就会是app.js。,其它的设置可以忽略，一路回车即可。当然也可以通过package.json修改文件来设置
    </h5>
    <h5>2、接下来安装express ,并且通过命令 --save 保存到package.json（<a title=""了解 package.json 是如何起作用的"" href=""https://docs.npmjs.com/files/package.json"" target=""_blank"">more</a>）文件中。执行命令：npm install express --save （临时安装命令：npm install express）</h5>
    <h6>安装 Node 模块时，如果指定了 --save 参数，那么此模块将被添加到 package.json 文件中 dependencies 依赖列表中。 然后通过 npm install 命令即可自动安装依赖列表中所列出的所有模块。</h6>
    <h5>3、简单测试一下环境</h5>
    <pre>
        var express = require('express');
        var app = expr");
            WriteLiteral(@"ess();

        app.get('/',  (req, res) =>{
          res.send('测试成功!');
        });

        var server = app.listen(3000,   () =>{
          var host = server.address().address;
          var port = server.address().port;
          console.log('服务启动成功',);
          console.log('访问服务测试路径> http://%s:%s', host=='::'?'localhost':host, port);
        });
</pre>
    <h5>4、中间件安装，使用中间件处理更便捷、灵活。</h5>
    <pre>

        body-parser ：解析body中的数据，并将其保存为Request对象的body属性。

        cookie-parser ：解析客户端cookie中的数据，并将其保存为Request对象的cookie属性

        express-session ：解析服务端生成的sessionid对应的session数据，并将其保存为Request对象的session属性

        query：这个中间件将一个查询字符串从URL转换为JS对象，并将其保存为Request对象的query属性。这个中间件在第四个版本中已经内置了无需安装。
      
         以上是简单的举例
    </pre>
    <h6>这里我们用到 body-parser 安装 cnpm i body-parser --save </h6>
    <h6>以下也是案例中用到的中间件，在这里统一说一下，后续不在赘述</h6>
    <h6><a href=""https://npm.taobao.org./"">淘宝 NPM 镜像 </a></h6>
    <h6><a href=""https://npm.taobao.org./package/gbk"">乱码处理,安装 cnpm i gbk ，转换utf-8</a></h6>
");
            WriteLiteral(@"    <h6><a href=""https://npm.taobao.org./package/jsdom"">虚拟dom环境,安装 cnpm i jsdom 获取信息 </a></h6>
    <h6><a href=""https://npm.taobao.org./package/segment"">中文分词模块,安装 cnpm install segment 获取信息 </a></h6>
    <h5>5、创建文件夹static,用与存放静态资源文件 ，并在该文件加下安装jquery、bootstrap </h5>
    <h6>安装： cnpm i jquery  bootstrap --save </h6>
    <h6>在static创建一个index.html文件，简单客户端代码如下</h6>
    <pre> 
    <xmp>
    ");
            EndContext();
            BeginContext(2442, 1067, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "588191f61cc2427892876217789d49e4", async() => {
                BeginContext(2448, 1054, true);
                WriteLiteral(@"
    <meta charset=""UTF-8"">



    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">



    <meta http-equiv=""X-UA-Compatible"" content=""ie=edge"">



    <title>爬虫客户端测试</title>
    <link rel=""stylesheet"" type=""text/css"" href=""node_modules/bootstrap/dist/css/bootstrap.css"">



    <script type=""text/javascript"" src=""node_modules/jquery/dist/jquery.js""></script>
    <script type=""text/javascript"" src=""node_modules/bootstrap/dist//js/bootstrap.js""></script>
    <script>

        function login() {
            var name = urlpath.value;
            if (name == '') {
                return alert('路径不能为空！');
            }

            $.ajax({
                url: 'http://localhost:3000/api/cralwer/get',
                dataType: 'string',
                type: 'post',
                data: {
                    urlpath: name
                },
                success: (data) => {
                    alert(data)
                }
            });
        }
");
                WriteLiteral("\n\r\n</script>\r\n                ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(3509, 6, true);
            WriteLiteral("\r\n    ");
            EndContext();
            BeginContext(3515, 919, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "56ef6ba679bb4e328c1bd6c3cb670855", async() => {
                BeginContext(3521, 906, true);
                WriteLiteral(@"
    <div class=""container"">
    <div class=""row"" style='padding-top: 100px'>  </div>
    <div class=""row"">
    <div class=""col-md-12"">
    <form class=""form-horizontal"" role=""form"" onsubmit=""login(); "">
    <div class=""form-group"">
    <label for=""urlpath"" class=""col-sm-2 control-label"">路径 </label>
    <div class=""col-sm-10"">
    <input type=""text"" class=""form-control"" id=""urlpath"" placeholder=""请输入路径"">







                                        </div>
                                    </div>
    <div class=""form-group"">
    <div class=""col-sm-offset-2 col-sm-10"">
    <button type=""submit"" class=""btn btn-default"">登录</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4434, 8056, true);
            WriteLiteral(@" 
            </xmp> 
   </pre>

    <h6>服务端代码如下 </h6>
    <pre>
var express = require('express');

var path = require('path');
var url = require('url')
var fs = require('fs')
var app = express();
//使用中间件 bodyParser
var bodyParser = require('body-parser');
var gbk = require('gbk');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(path.join(__dirname,'static')));//指定静态文件站点资源路径


app.get('/',  (req, res) =>{ 
    // console.log(req,res) 
  res.send('测试成功!');
});
app.post('/api/cralwer/get',(req,res)=>{
  
    var urlpath=req.body.urlpath
   console.log(""爬虫要爬的网站url: "",urlpath)
   requestByUrl(urlpath,(data)=>{
     console.log(gbk.toString('utf-8',data))
     console.log(data)
     fs.writeFile('1.html',data,function(err){
         if(err) throw err;
            console.log('页面抓取成功')
     });
  })
});
var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = ");
            WriteLiteral(@"server.address().port;
  console.log('服务启动成功',);
  console.log('访问服务测试路径> http://%s:%s', host=='::'?'localhost':host, port);
});

/**
 * 服务端 请求
 * */
 function requestByUrl(sourceUrl,success)
 {
   /**
    * 获取路径及处理请求协议类型处理
    */
var urlObject = url.parse(sourceUrl);
var http = '';
if(urlObject.protocol == 'http:'){
  http = require('http');
 }else{
  http = require('https');
 }
console.log(urlObject)

 var req=http.request({
   ""hostname"":urlObject.hostname,
   ""path"":urlObject.path
  },res=>{
   console.log('进来了')
                if(res.statusCode == 200)
                {
                  var str = '';
                  var arr = [];
                  res.on('data',buffer=>{
                    str += buffer ;
                    arr.push(buffer)
                    // console.log(str)
                  });

                  res.on('end',()=>{
                    var b = Buffer.concat(arr);
                    success && success(b);
                  });

      ");
            WriteLiteral(@"          } 
           });
           req.end();
           req.on('error',err=>{
             console.log('404')
           });
 }
 
</pre>
    <h5>6、到这里简单爬虫基本以实现，下面在以抓取淘宝页面数据扩展一下--》重定向之真假悟空----》递归</h5>
    <h6>主要改造一下服务端代码，响应状态码判断，代码如下</h6>
    <h6> <a href=""http://tool.oschina.net/commons?type=5"">HTTP状态码</a></h6>  
    <h6> <a href=""https://baike.baidu.com/item/HTTP%E7%8A%B6%E6%80%81%E7%A0%81/5053660"">百度百科之HTTP状态码</a></h6>
    <pre>
var express = require('express');

var path = require('path');
var url = require('url')
var fs = require('fs')
var app = express();
//使用中间件 bodyParser
var bodyParser = require('body-parser');
var gbk = require('gbk');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(path.join(__dirname,'static')));//指定静态文件站点资源路径

var redirectCount=0;//

app.post('/api/cralwer/get',(req,res)=>{
    var urlpath=req.body.urlpath;
    requestByUrl(urlpath,(data)=>{
        fs.writeFi");
            WriteLiteral(@"le('1.html',data,function(err){
            if(err) throw err;
                console.log('页面抓取成功')
        });
    });
});
var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = server.address().port; 
  console.log('服务启动成功 http://%s:%s', host=='::'?'localhost':host, port);
});

 function requestByUrl(sourceUrl,success)
 {
    redirectCount++;
    var urlObject = url.parse(sourceUrl);
    var http = '';
    if(urlObject.protocol == 'http:'){
    http = require('http');
    }else{
    http = require('https');
    }

    var req=http.request({""hostname"":urlObject.hostname,""path"":urlObject.path},res=>{
                if(res.statusCode == 200)
                {
                    var str = '';
                    var arr = [];
                    res.on('data',buffer=>{  str += buffer ;  arr.push(buffer);  });
                    res.on('end',()=>{  var b = Buffer.concat(arr);  success && success(b); });
                } else if(res.statusCode ");
            WriteLiteral(@"== 302 || res.statusCode == 301)
                {
                    console.log(`这是第${redirectCount}个重定向。`);
                    requestByUrl(res.headers.location,success);
                }
        });
        req.end();
        req.on('error',err=>{  console.log('404!!!!!!!!!!!!!!!!!!!!!!!!!'); });
           
 }
 
  </pre>
</div>
<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h5>接下来玩一下，抓取小说内容，下面我们再改造一下服务端和前端界面</h5>
    <h6>服务端 代码如下</h6>
    <pre>
var express = require('express');

var path = require('path');
var url = require('url');
var fs = require('fs')
var app = express();
//使用中间件 bodyParser
var bodyParser = require('body-parser');
var gbk = require('gbk');
// 载入模块
var Segment = require('segment');
// 创建实例
var segment = new Segment();
// 使用默认的识别模块及字典，载入字典文件需要1秒，仅初始化时执行一次即可
segment.useDefault();

var JSOM =require('jsdom').JSDOM;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));// extended: true 可解析nested json
app.use(express.static(p");
            WriteLiteral(@"ath.join(__dirname,'static')));//指定静态文件站点资源路径

var redirectCount=0;//
app.get('/',  (req, res) =>{ 
    // console.log(req,res) 
  res.send(path.join(__dirname, '/static', '/index.html'));
  });
app.get('/api/cralwer/get',(req,res)=>{
    var urlpath=req.query.urlpath;
    requestByUrl(urlpath,(data)=>{ 
   /*************************************************************** */
        var DOM = new JSOM(data); //虚拟浏览器document
        var getDocument = DOM.window.document; 
        //获取内容 这里.read-content定位获取内容 不同小说网站的定位不一样 
        var myword = getDocument.querySelector('.read-content').innerHTML.replace(/<[^>]+>/g,'')//去除标签 获取小说内容
        var arr = segment.doSegment(myword);//w 表示词的内容，p 表示词性
        var myArr=[];//去除标点符号 即 p=2048
        for(let i=0;i<arr.length;i++){ if(arr[i].p!=2048)
                                       myArr.push(arr[i].w);
                                       }
                                       var arrCount={};
                                       myArr.forEa");
            WriteLiteral(@"ch(element=> {
        if(!arrCount[element])
        {
            arrCount[element]=1;
        }else
        {
            arrCount[element]++;
        }
        });
        var getNewArr=[];
        for(let i in arrCount){
        if(arrCount[i]<=1) continue;
        getNewArr.push({w:i,c:arrCount[i]})
        } 
        getNewArr.sort((a,b)=>b.c-a.c);
        console.log({data:getNewArr});
        res.send({data:getNewArr});
        res.end();
   /*************************************************************** */
    });
});
var server = app.listen(3000,  () =>{
  var host = server.address().address;
  var port = server.address().port; 
  console.log('服务启动成功 http://%s:%s', host=='::'?'localhost':host, port);
});

 function requestByUrl(sourceUrl,success){
    redirectCount++;
    var urlObject = url.parse(sourceUrl);
    var http = '';
    if(urlObject.protocol == 'http:'){
    http = require('http');
    }else{
    http = require('https');
    }

    var req=http.requ");
            WriteLiteral(@"est({""hostname"":urlObject.hostname,""path"":urlObject.path},res=>{
                if(res.statusCode == 200)
                {
                    var str = '';
                    var arr = [];
                    res.on('data',buffer=>{  str += buffer ;  arr.push(buffer);  });
                    res.on('end',()=>{  var b = Buffer.concat(arr);  success && success(b); });
                } else if(res.statusCode == 302 || res.statusCode == 301)
                {
                    console.log(`这是第${redirectCount}个重定向。`);
                    requestByUrl(res.headers.location,success);
                }
        });
        req.end();
        req.on('error',err=>{  console.log('404!!!!!!!!!!!!!!!!!!!!!!!!!'); });
           
 }


 
</pre>
    <h6>客户端 代码如下 </h6>
    <h6>注： static文件夹下安装 cnpm install echarts --save </h6>
    <pre>
        <xmp>
            ");
            EndContext();
            BeginContext(12490, 4103, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "04194a00004c487db3026f7873204ab7", async() => {
                BeginContext(12496, 4090, true);
                WriteLiteral(@"
                <meta charset=""UTF-8"">
                <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
                <meta http-equiv=""X-UA-Compatible"" content=""ie=edge"">
                <title>Document</title>
                <link rel=""stylesheet"" type=""text/css"" href=""node_modules/bootstrap/dist/css/bootstrap.css"">

                <script type=""text/javascript"" src=""node_modules/jquery/dist/jquery.js""></script>
                <script type=""text/javascript"" src=""node_modules/bootstrap/dist//js/bootstrap.js""></script>

                <script type=""text/javascript"" src=""node_modules/echarts/dist/echarts.js""></script>
                <!--  <script type=""text/javascript"" src=""node_modules/echarts/dist/echarts-en.common.js""></script>  -->
                <script>

                    function login() {
                        var name = urlpath.value;
                        if (name == '') {
                            return alert('路径不能为空！');
                     ");
                WriteLiteral(@"   } 
                        $.ajax({
                            url: 'http://localhost:3000/api/cralwer/get',
                            type: 'get',
                            data: { urlpath: name },
                            dataType: ""json"",
                            success: function (data, textStatus, jqXHR) {
                                if (data)
                                    initData(data.data)
                                console.log(data)
                                console.log(textStatus)
                                console.log(jqXHR)
                            },
                            error: function (XMLHttpRequest, textStatus, errorThrown) {
                                console.log(XMLHttpRequest)
                                console.log(textStatus)
                                console.log(errorThrown)
                            }
                        }); 
                    }


                    function initData(json) {");
                WriteLiteral(@"
                        var arr = []
                        json.forEach(data => {
                            arr.push({
                                name: data.w,
                                value: data.c
                            })
                        });
                        console.log(arr)

                        option = {
                            title: {
                                text: '该小说网站的数据',
                                subtext: '纯属虚构',
                                x: 'center'
                            },
                            tooltip: {
                                trigger: 'item',
                                formatter: ""{a} <br/>{b} : {c} ({d}%)""
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                            },
");
                WriteLiteral(@"                            series: [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius: '55%',
                                    center: ['50%', '60%'],
                                    data: arr,
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        };
                        var myChart = echarts.init(document.getElementById('main'));
                        myChart.setOption(option);
                    }
                </script>
            ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(16593, 14, true);
            WriteLiteral("\r\n            ");
            EndContext();
            BeginContext(16607, 1420, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d49a9f72336b471f91e8e09195b165d5", async() => {
                BeginContext(16613, 1407, true);
                WriteLiteral(@"
                <div class=""container"">
                    <div class=""row"" style='padding-top: 100px'>  </div>
                    <div class=""row"">
                        <div class=""col-md-12"">
                            <form class=""form-horizontal"" role=""form"">
                                <div class=""form-group"">
                                    <label for=""urlpath"" class=""col-sm-2 control-label"">路径 </label>
                                    <div class=""col-sm-10"">
                                        <input type=""text"" class=""form-control"" id=""urlpath"" placeholder=""请输入路径"">
                                    </div>
                                </div>
                                <div class=""form-group"">
                                    <div class=""col-sm-offset-2 col-sm-10"">
                                        <button type=""button"" onclick=""login()"" class=""btn btn-default"">登录</button>
                                    </div>
                                ");
                WriteLiteral(@"</div>
                            </form>
                        </div>



                    </div>
                    <div class=""row"">
                        <div class=""col-md-12"">
                            <div id=""main"" style=""width: 100%;height:2000px;""></div>
                        </div>
                    </div>
                </div>

            ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(18027, 95, true);
            WriteLiteral("\r\n        </xmp>\r\n</pre>\r\n</div>\r\n<div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n  \r\n</div>\r\n\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
