#pragma checksum "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ee6d93570fe18e5123c39944b9d99f3c6a558339"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Index.cshtml", typeof(AspNetCore.Views_Home_Index))]
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
#line 1 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Views\_ViewImports.cshtml"
using jgsy.robot.blog;

#line default
#line hidden
#line 2 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Views\_ViewImports.cshtml"
using jgsy.robot.blog.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ee6d93570fe18e5123c39944b9d99f3c6a558339", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8a0c0314a37befef5778266ead53999c78790003", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/banner1.svg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("ASP.NET"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("img-responsive"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/banner2.svg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("Visual Studio"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_5 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/images/banner3.svg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_6 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("Microsoft Azure"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 1 "E:\2018blog\JGSY.Robot.Blog\jgsy.robot.blog\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "主页";

#line default
#line hidden
            BeginContext(38, 1356, true);
            WriteLiteral(@"<style>
    .btn-icon {
        margin: 10px 0;
        padding: 10px;
        transition: all 0.3s ease 0s;
    }

    .btn .label {
        border-radius: 12px 12px 12px 12px;
        border-style: solid;
        border-width: 0;
        box-shadow: none;
        color: #FFFFFF !important;
        font-size: 11px !important;
        font-weight: 300;
        padding: 3px 7px;
        position: absolute;
        text-shadow: none;
        top: 1px;
    }

        .btn .label.label-right {
            right: 7px;
        }

        .btn .label.label-left {
            left: 7px;
        }

    .input-block-level {
        display: block;
        width: 100%;
    }

    .btn-success {
        background-color: #5cb
    }
</style>

<div class=""row"">
    <div class=""col-lg-12 col-md-12 col-sm-12"">
        <div id=""myCarousel"" class=""carousel slide"" data-ride=""carousel"" data-interval=""6000"">
            <ol class=""carousel-indicators"">
                <li data-target=""#m");
            WriteLiteral(@"yCarousel"" data-slide-to=""0"" class=""active""></li>
                <li data-target=""#myCarousel"" data-slide-to=""1""></li>
                <li data-target=""#myCarousel"" data-slide-to=""2""></li>
            </ol>
            <div class=""carousel-inner"" role=""listbox"">
                <div class=""item active"">
                    ");
            EndContext();
            BeginContext(1394, 71, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "8aa902199e254037b26c9ed92a794965", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1465, 536, true);
            WriteLiteral(@"
                    <div class=""carousel-caption"" role=""option"">
                        <p>
                            Learn how to build ASP.NET apps that can run anywhere.
                            <a class=""btn btn-default"" target=""_blank"" href=""https://go.microsoft.com/fwlink/?LinkID=525028&clcid=0x409"">
                                Learn More
                            </a>
                        </p>
                    </div>
                </div>
                <div class=""item"">
                    ");
            EndContext();
            BeginContext(2001, 77, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "0002ffcb8cd243468ebcbc5b427d4fd1", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2078, 560, true);
            WriteLiteral(@"
                    <div class=""carousel-caption"" role=""option"">
                        <p>
                            There are powerful new features in Visual Studio for building modern web apps.
                            <a class=""btn btn-default"" target=""_blank"" href=""https://go.microsoft.com/fwlink/?LinkID=525030&clcid=0x409"">
                                Learn More
                            </a>
                        </p>
                    </div>
                </div>
                <div class=""item"">
                    ");
            EndContext();
            BeginContext(2638, 79, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.SelfClosing, "5dab130ede6c4eb5a5a85cc223e8813e", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_5);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_6);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2717, 15780, true);
            WriteLiteral(@"
                    <div class=""carousel-caption"" role=""option"">
                        <p>
                            Learn how Microsoft's Azure cloud platform allows you to build, deploy, and scale web apps.
                            <a class=""btn btn-default"" target=""_blank"" href=""https://go.microsoft.com/fwlink/?LinkID=525027&clcid=0x409"">
                                Learn More
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <a class=""left carousel-control"" href=""#myCarousel"" role=""button"" data-slide=""prev"">
                <span class=""glyphicon glyphicon-chevron-left"" aria-hidden=""true""></span>
                <span class=""sr-only"">Previous</span>
            </a>
            <a class=""right carousel-control"" href=""#myCarousel"" role=""button"" data-slide=""next"">
                <span class=""glyphicon glyphicon-chevron-right"" aria-hidden=""true""></span>
                <span class=""sr-on");
            WriteLiteral(@"ly"">Next</span>
            </a>
        </div>
    </div>
</div>
<div class=""row"">
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""计算机理论知识"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>计算机理论知识</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""设计模式"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>设计模式</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""大数据"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>大数据</div>
            <span class=""label label-right label-da");
            WriteLiteral(@"nger"">0</span>
        </a>
    </div> 
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""人工智能"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>人工智能</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>


    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""golang"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Go</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""kubernetes"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Docker</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div");
            WriteLiteral(@">
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""kubernetes"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>k8s</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""区块链"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>区块链</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>


    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""git"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>git</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3"" ");
            WriteLiteral(@"title=""C"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>C</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""C++"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>C++</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Kubuntu、Ubuntu、openSUSE、Mandriva Linux OS、
                 Debian operating system、Elive Linux operating system、Fedora Linux operating system、
                 Sabayon Linux、FreeBSD、PC-BSD Linux Operating system、DesktopBSD、Syllable Desktop
                 、GeeXboX、CentOS等等"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
    ");
            WriteLiteral(@"        <i class=""fa fa-picture-o fa-2x""></i>
            <div>Linux</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
   
    
    
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""elasticsearch"">
        <a class=""btn btn-default  btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>ES</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""C#、aspnetCore"">
        <a class=""btn btn-default  btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>DNC</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Java"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=");
            WriteLiteral(@"""fa fa-picture-o fa-2x""></i>
            <div>Java</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Spring Boot"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>SpringBoot</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
   
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""技术管理"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>技术管理</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""技术架构"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
    ");
            WriteLiteral(@"        <div>技术架构</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""网络协议"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>网络协议</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Java虚拟机"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Java虚拟机</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
   
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Html"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Html</div>
            <spa");
            WriteLiteral(@"n class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""CSS"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>CSS</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Bootstrap前端框架"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Bootstrap</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""easyui前端框架"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Easyui</div>
            <span class=""label label-right label");
            WriteLiteral(@"-danger"">0</span>
        </a>
    </div>
 
    
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""正则表达式"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>正则表达式</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Javascript"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Javascript</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Jquery"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Jquery</div>
            <span class=""label label-right label-danger"">0</span>
      ");
            WriteLiteral(@"  </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""vuejs"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Vue</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
   
    
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Reactjs"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>React</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""nodejs"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>node</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=");
            WriteLiteral(@"""col-lg-3 col-md-3 col-sm-3 "" title=""Xamarin"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Xamarin</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Kotlin"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Kotlin</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
   
    
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""开发工具"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""/tools/vsts/index"" target=""_blank"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>开发工具</div>
            <span class=""label label-right label-danger"">1</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-");
            WriteLiteral(@"3 col-sm-3 "" title=""mssqlserver"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>SqlServer</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Mysql"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>MySql</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Memcached"">
        <a class=""btn btn-success btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Memcached</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
 
    
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=");
            WriteLiteral(@"""Redis"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Redis</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""MongoDB"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>MongoDB</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""Oracle"">
        <a class=""btn btn-default btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>Oracle</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>
    <div class=""col-lg-3 col-md-3 col-sm-3 "" title=""SQLite"">
        <a class=""btn btn-def");
            WriteLiteral(@"ault btn-icon input-block-level"" href=""javascript:void(0);"">
            <i class=""fa fa-picture-o fa-2x""></i>
            <div>SQLite</div>
            <span class=""label label-right label-danger"">0</span>
        </a>
    </div>



</div>




<script>
    //function ActionByType(type) {
    //    switch (type) {
    //        case ""#box_Movie"":
    //            moviePartial();
    //            break;
    //        case ""#box_FilmMaker"":
    //            filmMakerPartial();
    //            break;
    //        case ""#box_Activity"":
    //            activityPartial();
    //            break;
    //        case ""#box_Institutions"":
    //            institutionsPartial();
    //            break;
    //        case ""#box_Still"":
    //            stillsPartial();
    //            break;
    //        case ""#box_Posters"":
    //            postersPartial();
    //            break;
    //        case ""#box_Film"":
    //            filmPartial();
    //            bre");
            WriteLiteral(@"ak;
    //        case ""#box_LibraryJournal"":
    //            libraryJournalPartial();
    //            break;
    //        case ""#box_TextFiles"":
    //            textFilesPartial();
    //            break;
    //        case ""#box_SourceMaterial"":
    //            sourceMaterialPartial();
    //            break;
    //        default:
    //    }
    //}
</script>




 









");
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
