using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Java.Controllers
{
    [Area("Java")]
    public class JavaController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}