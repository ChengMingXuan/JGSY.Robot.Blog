#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8b7015a3b900e2d171e023440a65bb8790fe63e7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_NodeJs_Views_Node_Index), @"mvc.1.0.view", @"/Areas/NodeJs/Views/Node/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/NodeJs/Views/Node/Index.cshtml", typeof(AspNetCore.Areas_NodeJs_Views_Node_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8b7015a3b900e2d171e023440a65bb8790fe63e7", @"/Areas/NodeJs/Views/Node/Index.cshtml")]
    public class Areas_NodeJs_Views_Node_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("href", new global::Microsoft.AspNetCore.Html.HtmlString("~/css/robot-com.css"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("rel", new global::Microsoft.AspNetCore.Html.HtmlString("stylesheet"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/robot-com.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
  
    ViewData["Title"] = "Node.js";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(90, 52, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "53d221c8d9d547969a70fe203845bde1", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(142, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(144, 41, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2958be5ba688471fadc6acc85b4dc148", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(185, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(204, 48, true);
                WriteLiteral("\r\n    <script>\r\n    $(function () { tabPartial(\'");
                EndContext();
                BeginContext(254, 27, false);
#line 9 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                            Write(Url.Action("action","node"));

#line default
#line hidden
                EndContext();
                BeginContext(282, 24, true);
                WriteLiteral("\'); });\r\n    </script>\r\n");
                EndContext();
            }
            );
            BeginContext(309, 183, true);
            WriteLiteral("<div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3 robotLNav\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">");
            EndContext();
            BeginContext(493, 17, false);
#line 15 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                  Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(510, 169, true);
            WriteLiteral("</div>\r\n            <div id=\"RobotLeftNode\" class=\"robotToggle col-lg-12 col-md-12 col-sm-12\">\r\n                <ul>\r\n                    <li action=\"nodeTop\" class=\"\"> ");
            EndContext();
            BeginContext(680, 17, false);
#line 18 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                              Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(697, 75, true);
            WriteLiteral(" 置顶篇（一）</li>\r\n                    <li action=\"node1\" class=\"active\">1、入门了解 ");
            EndContext();
            BeginContext(773, 17, false);
#line 19 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                        Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(790, 57, true);
            WriteLiteral("</li>\r\n                    <li action=\"node2\" class=\"\">2、");
            EndContext();
            BeginContext(848, 17, false);
#line 20 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(865, 62, true);
            WriteLiteral("进阶（一）</li>\r\n                    <li action=\"node3\" class=\"\">3、");
            EndContext();
            BeginContext(928, 17, false);
#line 21 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(945, 73, true);
            WriteLiteral(" bower 和 npm 的区别</li>\r\n                    <li action=\"node4\" class=\"\">4、");
            EndContext();
            BeginContext(1019, 17, false);
#line 22 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1036, 66, true);
            WriteLiteral(" 简单入门爬虫实战</li>\r\n                    <li action=\"node5\" class=\"\">5、");
            EndContext();
            BeginContext(1103, 17, false);
#line 23 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1120, 66, true);
            WriteLiteral(" 简单入门博客实战</li>\r\n                    <li action=\"node6\" class=\"\">6、");
            EndContext();
            BeginContext(1187, 17, false);
#line 24 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1204, 102, true);
            WriteLiteral(" Express安装及问题</li>\r\n                    <li action=\"node7\" class=\"\" title=\"Express基于的模板引擎ejs和jade等\">7、");
            EndContext();
            BeginContext(1307, 17, false);
#line 25 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                                             Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1324, 94, true);
            WriteLiteral(" 模板引擎入门</li>\r\n                    <li action=\"node8\" class=\"\" title=\"nodejs-websocket入门小例子\">8、");
            EndContext();
            BeginContext(1419, 17, false);
#line 26 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                                           Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1436, 111, true);
            WriteLiteral(" nodejs-websocket入门</li>\r\n                    <li action=\"node9\" class=\"\" title=\"nodejs-websocket进阶（一）简易聊天室\">9、");
            EndContext();
            BeginContext(1548, 17, false);
#line 27 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                                                Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1565, 104, true);
            WriteLiteral(" nodejs-websocket进阶</li>\r\n                    <li action=\"node10\" class=\"\" title=\"node+express电影视频网站\">9、");
            EndContext();
            BeginContext(1670, 17, false);
#line 28 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
                                                                         Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(1687, 160, true);
            WriteLiteral(" express电影网站实战</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div id=\"RobotRightNode\" class=\"col-lg-9 col-md-9 col-sm-9 robotRNav\">\r\n");
            EndContext();
#line 33 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\NodeJs\Views\Node\Index.cshtml"
              
                await Html.RenderPartialAsync("Node1");
            

#line default
#line hidden
            BeginContext(1935, 42, true);
            WriteLiteral("        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n");
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
