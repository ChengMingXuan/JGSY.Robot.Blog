using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Technology.Controllers
{
    [Area("Technology")]
    public class TechnologyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Technology2() { return PartialView("Technology2"); }
        public IActionResult Technology1() { return PartialView("Technology1"); }
        public IActionResult Technology7() { return PartialView("Technology7"); }
        public IActionResult Technology8() { return PartialView("Technology8"); }
        public IActionResult Technology5() { return PartialView("Technology5"); }
        public IActionResult Technology10() { return PartialView("Technology10"); }
        public IActionResult Technology12() { return PartialView("Technology12"); }
        public IActionResult Technology9() { return PartialView("Technology9"); }
        public IActionResult Technology15() { return PartialView("Technology15"); }
        public IActionResult Technology11() { return PartialView("Technology11"); }
        public IActionResult Technology19() { return PartialView("Technology19"); }
        public IActionResult Technology13() { return PartialView("Technology13"); }
        public IActionResult Technology16() { return PartialView("Technology16"); }
        public IActionResult Technology18() { return PartialView("Technology18"); }
        public IActionResult Technology17() { return PartialView("Technology17"); }
        public IActionResult Technology20() { return PartialView("Technology20"); }
        public IActionResult Technology4() { return PartialView("Technology4"); }
        public IActionResult Technology6() { return PartialView("Technology6"); }
        public IActionResult Technology21() { return PartialView("Technology21"); }
        public IActionResult Technology23() { return PartialView("Technology23"); }
        public IActionResult Technology26() { return PartialView("Technology26"); }
        public IActionResult Technology3() { return PartialView("Technology3"); }
        public IActionResult Technology29() { return PartialView("Technology29"); }
        public IActionResult Technology27() { return PartialView("Technology27"); }
        public IActionResult Technology14() { return PartialView("Technology14"); }
        public IActionResult Technology30() { return PartialView("Technology30"); }
        public IActionResult Technology24() { return PartialView("Technology24"); }
        public IActionResult Technology31() { return PartialView("Technology31"); }
        public IActionResult Technology32() { return PartialView("Technology32"); }
        public IActionResult Technology28() { return PartialView("Technology28"); }
        public IActionResult Technology35() { return PartialView("Technology35"); }
        public IActionResult Technology37() { return PartialView("Technology37"); }
        public IActionResult Technology36() { return PartialView("Technology36"); }
        public IActionResult Technology22() { return PartialView("Technology22"); }
        public IActionResult Technology38() { return PartialView("Technology38"); }
        public IActionResult Technology34() { return PartialView("Technology34"); }
        public IActionResult Technology33() { return PartialView("Technology33"); }
        public IActionResult Technology41() { return PartialView("Technology41"); }
        public IActionResult Technology45() { return PartialView("Technology45"); }
        public IActionResult Technology43() { return PartialView("Technology43"); }
        public IActionResult Technology44() { return PartialView("Technology44"); }
        public IActionResult Technology47() { return PartialView("Technology47"); }
        public IActionResult Technology39() { return PartialView("Technology39"); }
        public IActionResult Technology40() { return PartialView("Technology40"); }
        public IActionResult Technology48() { return PartialView("Technology48"); }
        public IActionResult Technology25() { return PartialView("Technology25"); }
        public IActionResult Technology42() { return PartialView("Technology42"); }
        public IActionResult Technology46() { return PartialView("Technology46"); }
        public IActionResult Technology49() { return PartialView("Technology49"); }
        public IActionResult Technology50() { return PartialView("Technology50"); }
    }
}