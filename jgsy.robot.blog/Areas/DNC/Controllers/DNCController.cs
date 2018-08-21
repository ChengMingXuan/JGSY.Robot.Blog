using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.DNC.Controllers
{
    [Area("DNC")]
    public class DNCController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult DNC1()
        {
            return PartialView("DNC1");
        }
        public IActionResult DNC2()
        {
            return PartialView("DNC2");
        }
        public IActionResult DNC3()
        {
            return PartialView("DNC3");
        }
    }
}