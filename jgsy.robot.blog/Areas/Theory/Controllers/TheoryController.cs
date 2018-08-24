using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Theory.Controllers
{
    [Area("Theory")]
    public class TheoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Theory3() { return PartialView("Theory3"); }
        public IActionResult Theory4() { return PartialView("Theory4"); }
        public IActionResult Theory1() { return PartialView("Theory1"); }
        public IActionResult Theory5() { return PartialView("Theory5"); }
        public IActionResult Theory2() { return PartialView("Theory2"); }
        public IActionResult Theory7() { return PartialView("Theory7"); }
        public IActionResult Theory6() { return PartialView("Theory6"); }
        public IActionResult Theory10() { return PartialView("Theory10"); }
        public IActionResult Theory11() { return PartialView("Theory11"); }
        public IActionResult Theory13() { return PartialView("Theory13"); }
        public IActionResult Theory14() { return PartialView("Theory14"); }
        public IActionResult Theory8() { return PartialView("Theory8"); }
        public IActionResult Theory16() { return PartialView("Theory16"); }
        public IActionResult Theory17() { return PartialView("Theory17"); }
        public IActionResult Theory15() { return PartialView("Theory15"); }
        public IActionResult Theory9() { return PartialView("Theory9"); }
        public IActionResult Theory21() { return PartialView("Theory21"); }
        public IActionResult Theory24() { return PartialView("Theory24"); }
        public IActionResult Theory23() { return PartialView("Theory23"); }
        public IActionResult Theory25() { return PartialView("Theory25"); }
        public IActionResult Theory29() { return PartialView("Theory29"); }
        public IActionResult Theory26() { return PartialView("Theory26"); }
        public IActionResult Theory28() { return PartialView("Theory28"); }
        public IActionResult Theory31() { return PartialView("Theory31"); }
        public IActionResult Theory27() { return PartialView("Theory27"); }
        public IActionResult Theory32() { return PartialView("Theory32"); }
        public IActionResult Theory30() { return PartialView("Theory30"); }
        public IActionResult Theory35() { return PartialView("Theory35"); }
        public IActionResult Theory33() { return PartialView("Theory33"); }
        public IActionResult Theory34() { return PartialView("Theory34"); }
        public IActionResult Theory18() { return PartialView("Theory18"); }
        public IActionResult Theory36() { return PartialView("Theory36"); }
        public IActionResult Theory38() { return PartialView("Theory38"); }
        public IActionResult Theory20() { return PartialView("Theory20"); }
        public IActionResult Theory39() { return PartialView("Theory39"); }
        public IActionResult Theory42() { return PartialView("Theory42"); }
        public IActionResult Theory43() { return PartialView("Theory43"); }
        public IActionResult Theory41() { return PartialView("Theory41"); }
        public IActionResult Theory40() { return PartialView("Theory40"); }
        public IActionResult Theory45() { return PartialView("Theory45"); }
        public IActionResult Theory19() { return PartialView("Theory19"); }
        public IActionResult Theory12() { return PartialView("Theory12"); }
        public IActionResult Theory46() { return PartialView("Theory46"); }
        public IActionResult Theory37() { return PartialView("Theory37"); }
        public IActionResult Theory22() { return PartialView("Theory22"); }
        public IActionResult Theory48() { return PartialView("Theory48"); }
        public IActionResult Theory47() { return PartialView("Theory47"); }
        public IActionResult Theory44() { return PartialView("Theory44"); }
        public IActionResult Theory49() { return PartialView("Theory49"); }
        public IActionResult Theory50() { return PartialView("Theory50"); }
    }
}