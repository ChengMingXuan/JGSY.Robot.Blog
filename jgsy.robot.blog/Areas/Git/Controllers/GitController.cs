using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Git.Controllers
{
    [Area("Git")]
    public class GitController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Git1() { return PartialView("Git1"); }
        public IActionResult Git5() { return PartialView("Git5"); }
        public IActionResult Git3() { return PartialView("Git3"); }
        public IActionResult Git4() { return PartialView("Git4"); }
        public IActionResult Git6() { return PartialView("Git6"); }
        public IActionResult Git2() { return PartialView("Git2"); }
        public IActionResult Git8() { return PartialView("Git8"); }
        public IActionResult Git7() { return PartialView("Git7"); }
        public IActionResult Git10() { return PartialView("Git10"); }
        public IActionResult Git13() { return PartialView("Git13"); }
        public IActionResult Git12() { return PartialView("Git12"); }
        public IActionResult Git15() { return PartialView("Git15"); }
        public IActionResult Git16() { return PartialView("Git16"); }
        public IActionResult Git14() { return PartialView("Git14"); }
        public IActionResult Git9() { return PartialView("Git9"); }
        public IActionResult Git11() { return PartialView("Git11"); }
        public IActionResult Git19() { return PartialView("Git19"); }
        public IActionResult Git21() { return PartialView("Git21"); }
        public IActionResult Git23() { return PartialView("Git23"); }
        public IActionResult Git22() { return PartialView("Git22"); }
        public IActionResult Git27() { return PartialView("Git27"); }
        public IActionResult Git18() { return PartialView("Git18"); }
        public IActionResult Git28() { return PartialView("Git28"); }
        public IActionResult Git30() { return PartialView("Git30"); }
        public IActionResult Git32() { return PartialView("Git32"); }
        public IActionResult Git25() { return PartialView("Git25"); }
        public IActionResult Git26() { return PartialView("Git26"); }
        public IActionResult Git24() { return PartialView("Git24"); }
        public IActionResult Git34() { return PartialView("Git34"); }
        public IActionResult Git37() { return PartialView("Git37"); }
        public IActionResult Git38() { return PartialView("Git38"); }
        public IActionResult Git33() { return PartialView("Git33"); }
        public IActionResult Git35() { return PartialView("Git35"); }
        public IActionResult Git41() { return PartialView("Git41"); }
        public IActionResult Git42() { return PartialView("Git42"); }
        public IActionResult Git43() { return PartialView("Git43"); }
        public IActionResult Git44() { return PartialView("Git44"); }
        public IActionResult Git39() { return PartialView("Git39"); }
        public IActionResult Git45() { return PartialView("Git45"); }
        public IActionResult Git46() { return PartialView("Git46"); }
        public IActionResult Git47() { return PartialView("Git47"); }
        public IActionResult Git29() { return PartialView("Git29"); }
        public IActionResult Git48() { return PartialView("Git48"); }
        public IActionResult Git40() { return PartialView("Git40"); }
        public IActionResult Git20() { return PartialView("Git20"); }
        public IActionResult Git17() { return PartialView("Git17"); }
        public IActionResult Git31() { return PartialView("Git31"); }
        public IActionResult Git36() { return PartialView("Git36"); }
        public IActionResult Git49() { return PartialView("Git49"); }
        public IActionResult Git50() { return PartialView("Git50"); }
    }
}