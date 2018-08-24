using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Javascript.Controllers
{
    [Area("Javascript")]
    public class JavascriptController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}