#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Node8.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d4891e971ea3659caeb48d25b5ebf3fc409492ac"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_Node8), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/Node8.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/Node8.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_Node8))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d4891e971ea3659caeb48d25b5ebf3fc409492ac", @"/Areas/NodeJs/Views/Node/Node8.cshtml")]
    public class Areas_NodeJs_Views_Node_Node8 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            BeginContext(0, 413, true);
            WriteLiteral(@"<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h4>即时通讯入门篇  nodejs-websocket模块 </h4>
    <h5>1、创建websocket文件夹，安装nodejs-websocket模块 <code>cnpm i nodejs-websocket</code></h5>
    <h5>2、在websocket文件夹下创建server.js、client.html文件</h5>
    <h5>3、server.js代码如下</h5>
    <pre>

</pre>
    <h5>4、client.html代码如下</h5>
    <pre>
        <xmp>
            <!DOCTYPE html>
            <html lang=""en"">
            ");
            EndContext();
            BeginContext(413, 194, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2c40e593159d4576b310992edafc50ea", async() => {
                BeginContext(419, 181, true);
                WriteLiteral("\r\n                <meta charset=\"UTF-8\">\r\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n                <title>client</title>\r\n            ");
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
            BeginContext(607, 14, true);
            WriteLiteral("\r\n            ");
            EndContext();
            BeginContext(621, 1274, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "19d4501fa03d4cefa47bfce8a0bd3a67", async() => {
                BeginContext(627, 1261, true);
                WriteLiteral(@"

                内容 <input id=""onemsg"">
                <button id='btn'>发送 </button>
                <div id=""one""></div>
                <script>
        var flg=true
        var html=document.getElementById('one')
     if(window.WebSocket)
         {
            var ws = new WebSocket('ws://localhost:3000')
            ws.onopen=(e)=>{
              console.log('连接服务器成功')
              var time = new Date();
              var text=""{t:'""+time+""',name:'张三',msg:'发送测试信息成功！！'}""
              ws.send(text)
            }
            ws.onclose=(e)=>{
              console.log('服务器关闭')
            }
            ws.onerror=(e)=>{
              console.log('连接出错')
            }
            ws.onmessage=(e)=>{
                var d=eval('('+e.data+')')
                html.innerHTML += ""<div>""+d.t+"" ""+d.name+""说：""+d.msg+""</div>""
                document.querySelector(""#btn"").onclick = function(e){
                    var time = new Date();
                    var text=""{t:'""+time+""',name:");
                WriteLiteral("\'张三\',msg:\'\"+document.getElementById(\'onemsg\').value+\"\'}\"\r\n                    ws.send(text);\r\n                }\r\n\r\n            }\r\n       }else\r\n       {\r\n           alert(\'不支持WebSocket\')\r\n       }\r\n                </script>\r\n            ");
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
            BeginContext(1895, 636, true);
            WriteLiteral(@"
        </html>
        </xmp>
</pre>
  
    <h5>5、server.js代码如下</h5>
    <pre>
var ws=require('nodejs-websocket');
const port = 3000;
console.log(""开始建立连接....."")   
var server=ws.createServer((connection)=>{    
    console.log(""开始建立websocket连接....."")   
    connection.on('text',(data)=>{
        connection.sendText(data)//回发数据到客户端
    })
    connection.on('close',(code,error)=>{
        console.log(code,'关闭连接',error)
    })
    connection.on('error',(code,error)=>{
        console.log(code,'异常关闭',error)
    })
})

server.listen(port,function(){
    console.log('WebSocket建立完毕.......')
})
</pre>
</div>");
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
