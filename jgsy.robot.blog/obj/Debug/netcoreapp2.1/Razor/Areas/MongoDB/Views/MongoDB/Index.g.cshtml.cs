#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "22e5e0688e3b3552ea1b0026c2880d65d59c46f0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_MongoDB_Views_MongoDB_Index), @"mvc.1.0.view", @"/Areas/MongoDB/Views/MongoDB/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/MongoDB/Views/MongoDB/Index.cshtml", typeof(AspNetCore.Areas_MongoDB_Views_MongoDB_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"22e5e0688e3b3552ea1b0026c2880d65d59c46f0", @"/Areas/MongoDB/Views/MongoDB/Index.cshtml")]
    public class Areas_MongoDB_Views_MongoDB_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
  
    ViewData["Title"] = "MongoDB";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(92, 52, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "a5af7c0ab1fb42bcaf0d78644afb7bce", async() => {
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
            BeginContext(144, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(146, 41, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "9f3b9aa7325e42eeae90af610d0439a5", async() => {
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
            BeginContext(187, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(206, 48, true);
                WriteLiteral("\r\n    <script>\r\n    $(function () { tabPartial(\'");
                EndContext();
                BeginContext(256, 39, false);
#line 10 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
                            Write(Url.Action("action", ViewData["Title"]));

#line default
#line hidden
                EndContext();
                BeginContext(296, 24, true);
                WriteLiteral("\'); });\r\n    </script>\r\n");
                EndContext();
            }
            );
            BeginContext(323, 183, true);
            WriteLiteral("<div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-3 robotLNav\">\r\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">");
            EndContext();
            BeginContext(507, 17, false);
#line 16 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
                                                  Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(524, 141, true);
            WriteLiteral("</div>\r\n            <div id=\"RobotLeftNode\" class=\"robotToggle col-lg-12 col-md-12 col-sm-12\">\r\n                <ul>\r\n                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 665, "\"", 693, 2);
#line 19 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
WriteAttributeValue("", 674, ViewData["Title"], 674, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 692, "1", 692, 1, true);
            EndWriteAttribute();
            BeginContext(694, 23, true);
            WriteLiteral(" class=\"active\">1、入门了解 ");
            EndContext();
            BeginContext(718, 17, false);
#line 19 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
                                                                      Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(735, 30, true);
            WriteLiteral("</li>\r\n                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 765, "\"", 793, 2);
#line 20 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
WriteAttributeValue("", 774, ViewData["Title"], 774, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 792, "2", 792, 1, true);
            EndWriteAttribute();
            BeginContext(794, 32, true);
            WriteLiteral(" disabled=\"disabled\" class=\"\">2、");
            EndContext();
            BeginContext(827, 17, false);
#line 20 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
                                                                               Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(844, 33, true);
            WriteLiteral(" 安装</li>\r\n                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 877, "\"", 905, 2);
#line 21 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
WriteAttributeValue("", 886, ViewData["Title"], 886, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 904, "3", 904, 1, true);
            EndWriteAttribute();
            BeginContext(906, 32, true);
            WriteLiteral(" disabled=\"disabled\" class=\"\">3、");
            EndContext();
            BeginContext(939, 17, false);
#line 21 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
                                                                               Write(ViewData["Title"]);

#line default
#line hidden
            EndContext();
            BeginContext(956, 151, true);
            WriteLiteral(" 连接问题</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div id=\"RobotRightNode\" class=\"col-lg-9 col-md-9 col-sm-9 robotRNav\">\r\n");
            EndContext();
#line 26 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\MongoDB\Views\MongoDB\Index.cshtml"
              
                await Html.RenderPartialAsync(ViewData["Title"] + "1");
            

#line default
#line hidden
            BeginContext(1211, 46, true);
            WriteLiteral("        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n");
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
