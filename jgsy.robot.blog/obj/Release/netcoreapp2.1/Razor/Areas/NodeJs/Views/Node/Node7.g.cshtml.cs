#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Node7.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "10df37119e08c6a332cc6491b0be516c41ee4aea"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_Node7), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/Node7.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/Node7.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_Node7))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"10df37119e08c6a332cc6491b0be516c41ee4aea", @"/Areas/NodeJs/Views/Node/Node7.cshtml")]
    public class Areas_NodeJs_Views_Node_Node7 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/nodejs/20180831/7.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 346, true);
            WriteLiteral(@"<div class=""col-lg-12 col-md-12 col-sm-12"">
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h4>1、<code>ejs</code>模板引擎</h4>
        <h5>ejs 是模板引擎的一种，也是我们这个教程中使用的模板引擎，因为它使用起来十分简单，而且与 express 集成良好。</h5>
        <h5>参考NodeJs模块中的 <a href=""/NodeJs/node/index"" target=""_blank"">  <code>6、Express安装及问题</code></a> 自动生成项目，结构目录如下图</h5>
        ");
            EndContext();
            BeginContext(346, 37, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "dd8fbc73850941c3a70e5e140fc80bf2", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(383, 2378, true);
            WriteLiteral(@" 
        <h5>资料 <a href=""http://www.ybao.org/book/ejs/5358.html"" target=""_blank""><code>ejs</code> </a></h5>
        <h5>资料 <a href=""https://www.npmjs.com/package/ejs"" target=""_blank""><code>ejs</code> </a></h5>
    </div>
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h4>2、<code>jade</code>模板引擎</h4>
        <h5>jade简单小案例</h5>
        <h5>资料 <a href=""http://jade-lang.com/api"" target=""_blank""><code>jade api</code></a></h5>
        <h5>资料 <a href=""https://www.w3cplus.com/html/how-to-use-jade.html"" target=""_blank""><code>jade</code></a></h5>
    </div>
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h5>a：创建jade文件夹，<code>&gt;  mkdir jade</code></h5>
        <h5>b：<code>&gt;  cd jade</code></h5>
        <h5>c：<code>&gt;  New-Item app.js -type file</code></h5>
        <h6><a href=""http://www.pstips.net/powershell-cmdlets.html"" target=""_blank""> <code>powershell cmdlets</code></a></h6>
        <h5>d：<code>&gt;  cnpm init</code></h5>
        <h6>资料 <a href=""http://jade-lang.com/api"" ta");
            WriteLiteral(@"rget=""_blank""><code>jade api</code></a></h6>
        <h6>资料 <a href=""https://www.w3cplus.com/html/how-to-use-jade.html"" target=""_blank""><code>jade</code></a></h6>
        <h5>e：安装<code>express web</code>开发框架<code>&gt;   cnpm install express jade</code></h5>
        <h5>f：在jade文件夹下创建views文件夹，<code>&gt;  mkdir views</code>，在views文件加下创建index.jade文件 <code>&gt;  New-Item index.jade -type file</code></h5>
        <h6>g：服务端代码如下</h6>
<pre>
var  express = require('express');
var  path = require('path');
var app =new express();

app.set('view engine','jade')
app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
var user={name:'haha',age:18}
res.render('index',user);
});

app.listen(8000,function(err){
if(err) throw err
console.log('服务创建成功');
});
</pre>
        <h6>h：客户端代码如下</h6>    
        <pre>
            <xmp>
<!DOCTYPE html>
html(lang=""en"")
    head
        meta(charset=""UTF-8"")
        meta(name=""viewport"", content=""width=device-width, initial-scale=1.0"")
        m");
            WriteLiteral(@"eta(http-equiv=""X-UA-Compatible"", content=""ie=edge"")
        title Document
    body
    P #{name}
    P #{age}


    - var username='asdasdas'
    p #{username}

    - var arr=['1','21','61','17','5451']
    - for(var i=0;i<arr.length;i++){
       p #{'第'+i+'个值是：'+arr[i]}
    -}
 </xmp>
</pre>
    </div>
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