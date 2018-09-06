#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Node9.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d921f926dbbac839c9e92ec0c19e2acb09be490f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_Node9), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/Node9.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/Node9.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_Node9))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d921f926dbbac839c9e92ec0c19e2acb09be490f", @"/Areas/NodeJs/Views/Node/Node9.cshtml")]
    public class Areas_NodeJs_Views_Node_Node9 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("padding-top: 200px"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(0, 4643, true);
            WriteLiteral(@"<div class=""col-lg-12 col-md-12 col-sm-12"">
    <h4>nodejs-websocket 实现简易聊天室</h4>
    <h5>创建ws文件夹，并且在文件夹下添加server.js、chat.html、client1.html、client2.html、client3.html、client4.html等文件，安装 nodejs-websocket <code>&gt;  cnpm i nodejs-websocket jquery bootstrap@3.3.7 --save</code></h5>
    <h5>服务端代码如下</h5>
    <pre>
/***
 * 服务器在整个聊天过程中，扮演一个中转站的作用
 * 1、主要模拟群聊、单聊，这里做了限制，moreonlines群聊、singlelines一对一单聊，
 *    只要都存在moreonlines或者singlelines数组中，且在一个点上（单聊状态、群聊状态），
 *    才可接收、发送消息，进行正常聊天。
 * 2、常量 OtherBusiness 看第1条 
 */

/***
 * 为了方便操作 对数组属性扩展一下，判断、删除
 * contains 判断是否存在数组中，存在返回true,否则false
 * remove 从数组中删除数据
 */
const OtherBusiness=""业务逻辑未实现！"";
Array.prototype.contains = function(n){
    for (let i = 0; i < this.length; i++) {
        if (this[i] == n) {
            return true;
        }
    }
    return false;
}
Array.prototype.remove = function(n) {
    for(let i=0; i<this.length;i++){ var index=this.indexOf(n);
                                     if(index>-1){
            this.splice(index,1");
            WriteLiteral(@");
        }
    }
};

var ws = require('nodejs-websocket'),
    port = 5000, 
    //群组
    groups = [
        {id:1,members:['Bob','Bill','jack','Jesse','Tom']},
        {id:2,members:['Bill','jack','Jesse','Tom']}
    ],
    // 在线群聊
    moreonlines = [],
    //单聊（一对一聊天） 辅助
    singlelinesCount = [],
    //在线单聊 
    singlelines = []; 

/**
 * 好友  假定群组里的都互相为好友 
 * 单聊  Bob--Tom  jesse--bill
 */
 

console.log('建立websocket链接开始.....')
var server = ws.createServer((conn)=>{
   console.log('New Connection') 
  var user;
    conn.on('text',data=>{
        user = JSON.parse(data);
        //判断用户是进入了群组还是一对一聊天
        if(user.group!=undefined){
            for (let index = 0; index < groups.length; index++) {
                if(user.group == index && groups[index].members.contains(user.name)) {
                    moreonlines.push(user.name);
                    break;
                }
                if((index+1) == groups.length) return;//其他未符合模拟要求的数据
            }
        }e");
            WriteLiteral(@"lse{
            singlelinesCount.push(user)
        }
        if(singlelinesCount.length>1){
            for (let i = 0; i < singlelinesCount.length; i++) {
                for (let j = 0; j < singlelinesCount.length; j++) {
                    if(singlelinesCount[i].toname == singlelinesCount[j].name && 
                        singlelinesCount[j].toname == singlelinesCount[i].name){ 
                            singlelines.remove(singlelinesCount[j].toname)
                            singlelines.remove(singlelinesCount[j].name)
                            singlelines.push(singlelinesCount[j].toname)
                            singlelines.push(singlelinesCount[j].name) 
                    }
                }
            }
        }
        var userResult = {
            type:user.type,
            name:user.name,
            toname:user.toname,
            group:user.group,
        }

        if(userResult.type == 'enter'){
            userResult.data = user.name
        }else{
");
            WriteLiteral(@"            userResult.data = user.data
        }
        /**
         * Start
         *  只是模拟一对一聊天或群聊  其他未考虑
         */
        if(user.group !=undefined){
            if(moreonlines.contains(userResult.toname)) { 
                broadcast(JSON.stringify(OtherBusiness))
            }else{
                broadcast(JSON.stringify(userResult))
            }
        } else{
            if(singlelines.contains(userResult.toname) && singlelines.contains(userResult.name)){
                broadcast(JSON.stringify(userResult))
            }else {
                broadcast(JSON.stringify(OtherBusiness))
            }
        }
      /**
         * End
         *  只是模拟一对一聊天或群聊  其他未考虑
         */

    })
   conn.on('close',(code,reason)=>{
        console.log(""code closed""+`${code}`,""reason closed""+`${reason}` )
       var userResult={type:'leave',data:user.name + 'leave' }
       moreonlines.remove(user.name)
       singlelinesCount.remove(user.name)
       singlelines.remove(user.nam");
            WriteLiteral(@"e) 
       broadcast(JSON.stringify(userResult))
   })
   conn.on('error',(error)=>{
    if(error)  console.log('出错了',error,error.stack,error.message)
   })
})   
server.listen(port,(error)=>{
    if(error) throw error
    console.log('Websocket服务启动成功')
})
/***
 * 广播消息
 */
function broadcast(data) {
    server.connections.forEach(function(conn) {
        conn.sendText(data);
    })
}

  
</pre>
    <h5>chat.html代码如下</h5>
    <pre>
    <xmp>
    <!DOCTYPE html>















    <html lang=""en"">
    ");
            EndContext();
            BeginContext(4643, 588, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "cd76c70a87fd4268a5be050875718d6a", async() => {
                BeginContext(4649, 575, true);
                WriteLiteral(@"
    <meta charset=""UTF-8"">















    <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">















    <title>chart</title>
    <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">















    <script src=""./node_modules/jquery/dist/jquery.js""></script>
    <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
    <style>
        .green {
            height: 80px;
            background-color: green
        }
</style>
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
            BeginContext(5231, 6, true);
            WriteLiteral("\r\n    ");
            EndContext();
            BeginContext(5237, 3916, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "527c62409162492db0cf5535cf5c100a", async() => {
                BeginContext(5243, 3903, true);
                WriteLiteral(@"
    <div class=""row"">
    <div class=""col-md-12 text-center green"">
    <h1>聊天界面</h1>
                    </div>
    <div class=""row"" style=""height:80%;padding: 50px"">
    <div id=""textContent"">

                        </div>
                    </div>
    <div class=""col-md-12 navbar-fixed-bottom"">
    <div class=""form-group"">
    <input type=""text"" class=""form-control "" id='sendText'>















                        </div>
    <button class=""btn btn-success form-control "" id='sendBtn'>发送</button>
                    </div>
                </div>
    <script>
        document.onkeydown = function (e) {
            if (!e) e = window.event;
            if ((e.keyCode || e.which) == 13) {
                $('#sendBtn').trigger('click')
            }
        }

        //参数设置为一个json字符
        var param = window.location.hash.substr(1)
        var websocket = null;
        param = unescape(param)
        var user = JSON.parse(param)

        if ('WebSocket' i");
                WriteLiteral(@"n window) {
            websocket = new WebSocket(""ws://localhost:5000/"");

            websocket.onopen = function (e) {
                user.name = user.name;
                user.group = user.group;
                user.type = ""enter"";
                user.toname = user.toname;
                websocket.send(JSON.stringify(user));
                document.getElementById(""sendBtn"").onclick = function () {

                    var txt = document.getElementById(""sendText"").value;
                    document.getElementById('sendText').value = '';
                    if (txt) {
                        user.type = ""message"";
                        user.data = txt;
                        websocket.send(JSON.stringify(user));
                    }
                }
            }
            //接收到消息的回调方法
            websocket.onmessage = function (e) {
                var userInfo = JSON.parse(e.data);
                showMsg(userInfo);
            }
            websocket.onclose = () =>");
                WriteLiteral(@" {
                console.log(""websocket close"");
            }
            websocket.onerror = () => {
                alert(""Webscoket连接发生错误"");
            }

        } else {
            alert('当前浏览器不支持websocket')
        }


        function showMsg(obj) {
            var html = $('#textContent');
            var textContent = '\n' + obj.data;
            console.log('textContent:' + textContent)
            var name = obj.name + '：\n' + textContent;

            if (obj.group != undefined && obj.group == user.group) {

                if (user.name == obj.name) {
                    // 这里说明是自己发的消息
                    if (obj.data == undefined || obj.type == 'enter') {
                        return;
                    }
                    var rightHtml = '<div class=""col-md-12 blue text-right"">我：' + textContent + '</div>';
                    html.append(rightHtml)
                } else {
                    var leftHtml = '<div class=""col-md-12 blue text-left"">' + name + ");
                WriteLiteral(@"'</div>';
                    html.append(leftHtml)
                }
            } else {

                if (user.name == obj.name) {
                    if (obj.data == undefined || obj.type == 'enter') {
                        return;
                    }
                    var rightHtml = '<div class=""col-md-12 blue text-right"">我：' + textContent + '</div>';
                    html.append(rightHtml)
                } else {
                    if (obj.toname == user.name) {
                        var leftHtml = '<div class=""col-md-12 blue text-left"">' + name + '</div>';
                        html.append(leftHtml)
                    }
                }
            }
        }

        window.onbeforeunload = function () {
            websocket.close();
        }
</script>
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
            BeginContext(9153, 154, true);
            WriteLiteral("\r\n        </html>\r\n        </xmp>\r\n</pre>\r\n    <h5>client*.html 代码如下</h5>\r\n<pre>\r\n    <xmp>\r\n        <!DOCTYPE html>\r\n        <html lang=\"en\">\r\n\r\n        ");
            EndContext();
            BeginContext(9307, 422, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "850e41ab053a45c2abb2da7504ee7077", async() => {
                BeginContext(9313, 409, true);
                WriteLiteral(@"
            <meta charset=""UTF-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">
            <script src=""./node_modules/jquery/dist/jquery.js""></script>
            <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
            <title>1</title>
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
            BeginContext(9729, 12, true);
            WriteLiteral("\r\n\r\n        ");
            EndContext();
            BeginContext(9741, 959, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "212eeb9a9aac440c9ec46cd1cc432b49", async() => {
                BeginContext(9774, 919, true);
                WriteLiteral(@"
            <div class=""col-md-12"" style=""padding-bottom: 20px"">
                <button class=""btn btn-primary form-control"">Bob群聊 'Bill','jack','Jesse','Tom'</button>
            </div>
            <div class=""col-md-12"">
                <button class=""btn btn-info form-control"">Bob单聊Tom</button>
            </div>
            <script>
                $('body button.btn-info').on('click', () => {
                    var params = { name: 'Bob', toname: 'Tom' }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })

                $('body button.btn-primary').on('click', () => {
                    var params = { name: 'Bob', group: 1, }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })
            </script>
        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(10700, 116, true);
            WriteLiteral("\r\n\r\n    </html>\r\n    </xmp>\r\n</pre>\r\n<pre>\r\n    <xmp>\r\n        <!DOCTYPE html>\r\n        <html lang=\"en\">\r\n\r\n        ");
            EndContext();
            BeginContext(10816, 422, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5f20580389394e9d992f35e1f6d99e8d", async() => {
                BeginContext(10822, 409, true);
                WriteLiteral(@"
            <meta charset=""UTF-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">
            <script src=""./node_modules/jquery/dist/jquery.js""></script>
            <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
            <title>2</title>
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
            BeginContext(11238, 12, true);
            WriteLiteral("\r\n\r\n        ");
            EndContext();
            BeginContext(11250, 963, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "cc7a588f05c94110aa6b609e5c41b51e", async() => {
                BeginContext(11283, 923, true);
                WriteLiteral(@"
            <div class=""col-md-12"" style=""padding-bottom: 20px"">
                <button class=""btn btn-primary form-control"">Tom群聊 'Bob','Bill','jack','Jesse'</button>
            </div>
            <div class=""col-md-12"">
                <button class=""btn btn-info form-control"">Tom单聊Bob</button>
            </div>


            <script>
                $('body button.btn-info').on('click', () => {
                    var params = { name: 'Tom', toname: 'Bob' }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })

                $('body button.btn-primary').on('click', () => {
                    var params = { name: 'Tom', group: 1, }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })
            </script>
        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(12213, 116, true);
            WriteLiteral("\r\n\r\n    </html>\r\n    </xmp>\r\n</pre>\r\n<pre>\r\n    <xmp>\r\n        <!DOCTYPE html>\r\n        <html lang=\"en\">\r\n\r\n        ");
            EndContext();
            BeginContext(12329, 422, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "0b8e543570344d749658bd386af4fee7", async() => {
                BeginContext(12335, 409, true);
                WriteLiteral(@"
            <meta charset=""UTF-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">
            <script src=""./node_modules/jquery/dist/jquery.js""></script>
            <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
            <title>3</title>
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
            BeginContext(12751, 12, true);
            WriteLiteral("\r\n\r\n        ");
            EndContext();
            BeginContext(12763, 970, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ce97be5eaa1344939b613e60b732cb5a", async() => {
                BeginContext(12796, 930, true);
                WriteLiteral(@"
            <div class=""col-md-12"" style=""padding-bottom: 20px"">
                <button class=""btn btn-primary form-control"">Bill群聊 'Bob','jack','Jesse','Tom'</button>
            </div>
            <div class=""col-md-12"">
                <button class=""btn btn-info form-control"">Bill单聊Jesse</button>
            </div>


            <script>
                $('body button.btn-info').on('click', () => {
                    var params = { name: 'Bill', toname: 'Jesse' }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })

                $('body button.btn-primary').on('click', () => {
                    var params = { name: 'Bill', group: 1, }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })
            </script>
        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(13733, 116, true);
            WriteLiteral("\r\n\r\n    </html>\r\n    </xmp>\r\n</pre>\r\n<pre>\r\n    <xmp>\r\n        <!DOCTYPE html>\r\n        <html lang=\"en\">\r\n\r\n        ");
            EndContext();
            BeginContext(13849, 422, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "52b6b5225a224b8385b674dff4502777", async() => {
                BeginContext(13855, 409, true);
                WriteLiteral(@"
            <meta charset=""UTF-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">
            <script src=""./node_modules/jquery/dist/jquery.js""></script>
            <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
            <title>4</title>
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
            BeginContext(14271, 12, true);
            WriteLiteral("\r\n\r\n        ");
            EndContext();
            BeginContext(14283, 972, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "dd82787059df4bedb5e1e6fa3b780da2", async() => {
                BeginContext(14316, 932, true);
                WriteLiteral(@"
            <div class=""col-md-12"" style=""padding-bottom: 20px"">
                <button class=""btn btn-primary form-control"">Jesse群聊 'Bob','Bill','jack',''Tom'</button>
            </div>
            <div class=""col-md-12"">
                <button class=""btn btn-info form-control"">Jesse单聊Bill</button>
            </div>


            <script>
                $('body button.btn-info').on('click', () => {
                    var params = { name: 'Jesse', toname: 'Bill' }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })

                $('body button.btn-primary').on('click', () => {
                    var params = { name: 'Jesse', group: 1, }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })
            </script>
        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(15255, 116, true);
            WriteLiteral("\r\n\r\n    </html>\r\n    </xmp>\r\n</pre>\r\n<pre>\r\n    <xmp>\r\n        <!DOCTYPE html>\r\n        <html lang=\"en\">\r\n\r\n        ");
            EndContext();
            BeginContext(15371, 422, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "4d2b1f5d77ad46248e89eb9ff435971a", async() => {
                BeginContext(15377, 409, true);
                WriteLiteral(@"
            <meta charset=""UTF-8"">
            <meta name=""viewport"" content=""width=device-width, initial-scale=1.0"">
            <link rel=""stylesheet"" href=""./node_modules/bootstrap/dist/css/bootstrap.css"">
            <script src=""./node_modules/jquery/dist/jquery.js""></script>
            <script src=""./node_modules/bootstrap/dist/js/bootstrap.js""></script>
            <title>5</title>
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
            BeginContext(15793, 12, true);
            WriteLiteral("\r\n\r\n        ");
            EndContext();
            BeginContext(15805, 539, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8e17db483c28425cb45480e208fd3d06", async() => {
                BeginContext(15838, 499, true);
                WriteLiteral(@"
            <div class=""col-md-12"">
                <button class=""btn btn-primary form-control"">jack群聊 'Bob','Bill','jack','Jesse','Tom'</button>
            </div>


            <script>

                $('body button.btn-primary').on('click', () => {
                    var params = { name: 'jack', group: 1, }
                    var para = JSON.stringify(params)
                    window.location.href = 'client.html#' + para
                })
            </script>
        ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(16344, 43, true);
            WriteLiteral("\r\n\r\n    </html>\r\n    </xmp>\r\n</pre>\r\n</div>");
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
