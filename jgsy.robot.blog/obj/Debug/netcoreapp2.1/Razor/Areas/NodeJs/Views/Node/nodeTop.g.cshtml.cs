#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\nodeTop.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "97b847ae09b3cbb4b30a94ba3d912fc68e262ddc"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_nodeTop), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/nodeTop.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/nodeTop.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_nodeTop))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"97b847ae09b3cbb4b30a94ba3d912fc68e262ddc", @"/Areas/NodeJs/Views/Node/nodeTop.cshtml")]
    public class Areas_NodeJs_Views_Node_nodeTop : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/nodejs/1.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(0, 367, true);
            WriteLiteral(@"<div class=""col-lg-12 col-md-12 col-sm-12"">
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h4>知识思路图</h4>
    </div>
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h4>（一）</h4>
        <h5>结合文档或视屏，把基础的东西先敲一边，再来点入门简单的实战小案例。</h5>
    </div>
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h4>（二）</h4>
        <h5>如下图1</h5>
        ");
            EndContext();
            BeginContext(367, 28, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "aa892a406793463082d2fa1e5610ba64", async() => {
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
            BeginContext(395, 784, true);
            WriteLiteral(@" 
        <a href=""https://www.jianshu.com/p/c8df477c6766"">nodejs背景参考</a>
        <pre>
            特性
            Node.js库的异步和事件驱动的API全部都是异步就是非阻塞。它主要是指基于Node.js的服务器不会等待API返回的数据。服务器移动到下一个API调用，Node.js发生的事件通知机制后有助于服务器获得从之前的API调用的响应。

            非常快的内置谷歌Chrome的V8 JavaScript引擎，Node.js库代码执行是非常快的。

            单线程但高度可扩展 - Node.js使用具有循环事件单线程模型。事件机制有助于服务器在一个非阻塞的方式响应并使得服务器高度可扩展，而不是创建线程限制来处理请求的传统服务器。Node.js使用单线程的程序，但可以提供比传统的服务器(比如Apache HTTP服务器)的请求服务数量要大得多。

            没有缓冲 - Node.js的应用从来不使用缓冲任何数据。这些应用只是输出数据在块中。

            许可证协议 - Node.js 在 MIT 协议 下发布
        </pre>
        <pre>
        I/O 绑定应用程序

        数据流应用

        数据密集型实时应用(DIRT)

        JSON API的应用程序

        单页面应用

        不建议使用Node.js的就是针对CPU密集型应用。7
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