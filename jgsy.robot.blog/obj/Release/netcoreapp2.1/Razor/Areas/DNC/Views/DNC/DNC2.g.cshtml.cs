#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Areas\DNC\Views\DNC\DNC2.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "865db3d8d0281b9a7c2f924b4639747309372a37"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_DNC_Views_DNC_DNC2), @"mvc.1.0.view", @"/Areas/DNC/Views/DNC/DNC2.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Areas/DNC/Views/DNC/DNC2.cshtml", typeof(AspNetCore.Areas_DNC_Views_DNC_DNC2))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"865db3d8d0281b9a7c2f924b4639747309372a37", @"/Areas/DNC/Views/DNC/DNC2.cshtml")]
    public class Areas_DNC_Views_DNC_DNC2 : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            BeginContext(0, 1081, true);
            WriteLiteral(@"
<div class=""col-lg-12 col-md-12 col-sm-12"">
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <h5>1、DNC2.1部分视图的使用实现（局部刷新）</h5>
        <h6>a：创建一个DNC2.1的web(模型视图控制器)程序 </h6>
        <h6>b：创建一个Area，名称为 DNC </h6>
        <h6>c：再创建一个控制器 DNCController,代码如下 （简简单单哈）</h6>
        <pre>
            [Area(""DNC"")]
            public class DNCController : Controller
            {
                public IActionResult Index()
                {
                    return View();
                }
                public IActionResult DNC1()
                {
                    return PartialView(""DNC1"");
                }
                public IActionResult DNC2()
                {
                    return PartialView(""DNC2"");
                }
                public IActionResult DNC3()
                {
                    return PartialView(""DNC3"");
                }
            }
        </pre>
        <h6>d：创建一个index视图和三个Partial view (DNC1、DNC2、DNC3)代码依次如下</h6>
        <pre>
   ");
            WriteLiteral("     <xmp>\r\n\r\n                index视图\r\n\r\n                ");
            EndContext();
            BeginContext(1082, 143, true);
            WriteLiteral("@{\r\n                ViewData[\"Title\"] = \"asp net core\";\r\n                Layout = \"~/Views/Shared/_Layout.cshtml\";\r\n                }\r\n        ");
            EndContext();
            BeginContext(1225, 52, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("link", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "6a1aa8ddde4d4e4ab151eb3470272adc", async() => {
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
            BeginContext(1277, 20, true);
            WriteLiteral("\r\n\r\n\r\n\r\n\r\n\r\n        ");
            EndContext();
            BeginContext(1297, 41, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "c074e1db03e54a3f86ea2d10386ca9ee", async() => {
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
            BeginContext(1338, 18, true);
            WriteLiteral("\r\n                ");
            EndContext();
            BeginContext(1357, 93, true);
            WriteLiteral("@section Scripts{\r\n                <script>\r\n                    $(function () { tabPartial(\'");
            EndContext();
            BeginContext(1451, 793, true);
            WriteLiteral(@"@(Url.Action(""action"",""dnc""))'); });
               </script>
               }
               
        <div class=""row"">
        <div class=""col-lg-12 col-md-12 col-sm-12"">
        <div class=""col-lg-3 col-md-3 col-sm-3 robotLNav"">
        <div class=""col-lg-12 col-md-12 col-sm-12"">node js</div>
        <div id=""RobotLeftNode"" class=""robotToggle col-lg-12 col-md-12 col-sm-12"">
        <ul>
        <li action=""dnc1"" class="""">入门了解DNC(aspNetCore)</li>
        <li action=""dnc2"" class=""active"">DNC2.1部分视图的使用</li>
        <li action=""dnc3"" class="""">入门了解node js</li>
                                </ul>
                            </div>
                        </div>
        <div id=""RobotRightNode"" class=""col-lg-9 col-md-9 col-sm-9 robotRNav"">
                            ");
            EndContext();
            BeginContext(2245, 201, true);
            WriteLiteral("@{\r\n                            await Html.RenderPartialAsync(\"DNC1\");\r\n                            }\r\n                        </div>\r\n                    </div>\r\n       </div>\r\n             \r\n        ");
            EndContext();
            BeginContext(2446, 41, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "896213b102b04773a758da141d7bc6cf", async() => {
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
            BeginContext(2487, 1994, true);
            WriteLiteral(@"  对应的代码
            </xmp>
            function tabPartial(defaultUrl) {
                if ($.trim(defaultUrl) != """" && defaultUrl.indexOf('/') != -1) {
                    var list = $('#RobotLeftNode').find('li');
                    if (list.length > 0) {
                        $.each(list, function (i, n) {
                            if ($(n).attr('disabled') != ""disabled"") {
                                $(n).on('click', function () {
                                    $(this).addClass('active').siblings().removeClass('active');
                                    var action = $(this).attr('action')
                                    var url = defaultUrl.replace('action', action);
                                    $(""#RobotRightNode"").load(url);
                                });
                            } else {
                                $(n).css({ ""cursor"":""not-allowed""});
                            }

                        });
                    }
           ");
            WriteLiteral(@"     }
            }

</pre>
        <pre> 
        <xmp>
        <div class=""col-lg-12 col-md-12 col-sm-12"">
                    DNC1
                </div>

        <div class=""col-lg-12 col-md-12 col-sm-12"">
                    DNC2
                </div>

        <div class=""col-lg-12 col-md-12 col-sm-12"">
                    DNC3
                </div>
          </xmp>
</pre> 
        <h6>d：路由配置（这里建的是Area）,在Startup.cs添加路由代码如下</h6>
        <pre>
        app.UseMvc(routes =>
            {
                    //添加
                routes.MapRoute(  
                        name: ""areasModule"", 
                        template: ""{area:exists}/{controller=Home}/{action=Index}/{id?}""
                        );

                routes.MapRoute(  name: ""default"", template: ""{controller=Home}/{action=Index}/{id?}"");
            });
</pre>
        <h6>e：注解 [Area(""DNC"")]这里就不多说了</h6>
        <h6>f：到这里就结束了。</h6>
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
