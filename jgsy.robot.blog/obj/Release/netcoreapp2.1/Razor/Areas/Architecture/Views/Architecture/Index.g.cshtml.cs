#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "06f17b473939c35699c24b158f99966ef68d8bc9"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Architecture_Views_Architecture_Index), @"mvc.1.0.view", @"/Areas/Architecture/Views/Architecture/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/Architecture/Views/Architecture/Index.cshtml", typeof(AspNetCore.Areas_Architecture_Views_Architecture_Index))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"06f17b473939c35699c24b158f99966ef68d8bc9", @"/Areas/Architecture/Views/Architecture/Index.cshtml")]
    public class Areas_Architecture_Views_Architecture_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
#line 2 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
  
    ViewData["Title"] = "Architecture";
    Layout = "~/Views/Shared/_Layout.cshtml";

#line default
#line hidden
            BeginContext(97, 52, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "cbfb3fb3294d4837b36d3c5de9332e39", async() => {
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
            BeginContext(149, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            BeginContext(151, 41, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "2e0e417d3f4945d48d6085341202fb0d", async() => {
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
            BeginContext(192, 2, true);
            WriteLiteral("\r\n");
            EndContext();
            DefineSection("Scripts", async() => {
                BeginContext(211, 48, true);
                WriteLiteral("\r\n    <script>\r\n    $(function () { tabPartial(\'");
                EndContext();
                BeginContext(261, 39, false);
#line 10 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
                            Write(Url.Action("action", ViewData["Title"]));

#line default
#line hidden
                EndContext();
                BeginContext(301, 24, true);
                WriteLiteral("\'); });\r\n    </script>\r\n");
                EndContext();
            }
            );
            BeginContext(328, 328, true);
            WriteLiteral(@"<div class=""row"">
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <div class=""col-lg-3 col-md-3 col-sm-3 robotLNav"">
            <div class=""col-lg-12 col-md-12 col-sm-12"">技术架构</div>
            <div id=""RobotLeftNode"" class=""robotToggle col-lg-12 col-md-12 col-sm-12"">
                <ul>
                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 656, "\"", 684, 2);
#line 19 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
WriteAttributeValue("", 665, ViewData["Title"], 665, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 683, "1", 683, 1, true);
            EndWriteAttribute();
            BeginContext(685, 57, true);
            WriteLiteral(" class=\"active\">1、入门了解 技术架构</li>\r\n                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 742, "\"", 770, 2);
#line 20 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
WriteAttributeValue("", 751, ViewData["Title"], 751, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 769, "2", 769, 1, true);
            EndWriteAttribute();
            BeginContext(771, 71, true);
            WriteLiteral(" disabled=\"disabled\" class=\"\">2、技术架构进阶（一）</li>\r\n                    <li");
            EndContext();
            BeginWriteAttribute("action", " action=\"", 842, "\"", 870, 2);
#line 21 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
WriteAttributeValue("", 851, ViewData["Title"], 851, 18, false);

#line default
#line hidden
            WriteAttributeValue("", 869, "3", 869, 1, true);
            EndWriteAttribute();
            BeginContext(871, 187, true);
            WriteLiteral(" disabled=\"disabled\" class=\"\">3、技术架构进阶（二）</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div id=\"RobotRightNode\" class=\"col-lg-9 col-md-9 col-sm-9 robotRNav\">\r\n");
            EndContext();
#line 26 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\Architecture\Views\Architecture\Index.cshtml"
              
                await Html.RenderPartialAsync(ViewData["Title"] + "1");
            

#line default
#line hidden
            BeginContext(1162, 46, true);
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
