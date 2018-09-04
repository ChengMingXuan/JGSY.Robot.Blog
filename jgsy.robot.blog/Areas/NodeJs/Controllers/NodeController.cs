using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.NodeJs.Controllers
{
    [Area("NodeJs")]
    public class NodeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Node1()
        {
            return PartialView("Node1");
        }
        public IActionResult Node2()
        {
            return PartialView("Node2");
        }
        public IActionResult Node3()
        {
            return PartialView("Node3");
        }
        public IActionResult nodeTop() { return PartialView("nodeTop"); }
        public IActionResult Node4() { return PartialView("Node4"); }
        public IActionResult Node6() { return PartialView("Node6"); }
        public IActionResult Node7() { return PartialView("Node7"); }
        public IActionResult Node5() { return PartialView("Node5"); }
        public IActionResult Node9() { return PartialView("Node9"); }
        public IActionResult Node10() { return PartialView("Node10"); }
        public IActionResult Node8() { return PartialView("Node8"); }
        public IActionResult Node13() { return PartialView("Node13"); }
        public IActionResult Node15() { return PartialView("Node15"); }
        public IActionResult Node18() { return PartialView("Node18"); }
        public IActionResult Node14() { return PartialView("Node14"); }
        public IActionResult Node17() { return PartialView("Node17"); }
        public IActionResult Node11() { return PartialView("Node11"); }
        public IActionResult Node12() { return PartialView("Node12"); }
        public IActionResult Node22() { return PartialView("Node22"); }
        public IActionResult Node23() { return PartialView("Node23"); }
        public IActionResult Node24() { return PartialView("Node24"); }
        public IActionResult Node25() { return PartialView("Node25"); }
        public IActionResult Node19() { return PartialView("Node19"); }
        public IActionResult Node21() { return PartialView("Node21"); }
        public IActionResult Node20() { return PartialView("Node20"); }
        public IActionResult Node28() { return PartialView("Node28"); }
        public IActionResult Node26() { return PartialView("Node26"); }
        public IActionResult Node30() { return PartialView("Node30"); }
        public IActionResult Node27() { return PartialView("Node27"); }
        public IActionResult Node32() { return PartialView("Node32"); }
        public IActionResult Node31() { return PartialView("Node31"); }
        public IActionResult Node33() { return PartialView("Node33"); }
        public IActionResult Node35() { return PartialView("Node35"); }
        public IActionResult Node16() { return PartialView("Node16"); }
        public IActionResult Node38() { return PartialView("Node38"); }
        public IActionResult Node37() { return PartialView("Node37"); }
        public IActionResult Node39() { return PartialView("Node39"); }
        public IActionResult Node40() { return PartialView("Node40"); }
        public IActionResult Node41() { return PartialView("Node41"); }
        public IActionResult Node42() { return PartialView("Node42"); }
        public IActionResult Node43() { return PartialView("Node43"); }
        public IActionResult Node44() { return PartialView("Node44"); }
        public IActionResult Node36() { return PartialView("Node36"); }
        public IActionResult Node46() { return PartialView("Node46"); }
        public IActionResult Node47() { return PartialView("Node47"); }
        public IActionResult Node45() { return PartialView("Node45"); }
        public IActionResult Node34() { return PartialView("Node34"); }
        public IActionResult Node49() { return PartialView("Node49"); }
        public IActionResult Node48() { return PartialView("Node48"); }
        public IActionResult Node50() { return PartialView("Node50"); }
        public IActionResult Node29() { return PartialView("Node29"); }
    }
}