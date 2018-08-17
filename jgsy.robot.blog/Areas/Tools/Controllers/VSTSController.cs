using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Tools.Controllers
{
    [Area("Tools")]
    public class VSTSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}