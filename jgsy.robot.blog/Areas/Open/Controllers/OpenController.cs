using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Open.Controllers
{
    [Area("Open")]
    public class OpenController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Open2() { return PartialView("Open2"); }
        public IActionResult Open1() { return PartialView("Open1"); }
        public IActionResult Open5() { return PartialView("Open5"); }
        public IActionResult Open7() { return PartialView("Open7"); }
        public IActionResult Open3() { return PartialView("Open3"); }
        public IActionResult Open8() { return PartialView("Open8"); }
        public IActionResult Open4() { return PartialView("Open4"); }
        public IActionResult Open6() { return PartialView("Open6"); }
        public IActionResult Open11() { return PartialView("Open11"); }
        public IActionResult Open12() { return PartialView("Open12"); }
        public IActionResult Open10() { return PartialView("Open10"); }
        public IActionResult Open16() { return PartialView("Open16"); }
        public IActionResult Open9() { return PartialView("Open9"); }
        public IActionResult Open13() { return PartialView("Open13"); }
        public IActionResult Open15() { return PartialView("Open15"); }
        public IActionResult Open18() { return PartialView("Open18"); }
        public IActionResult Open17() { return PartialView("Open17"); }
        public IActionResult Open19() { return PartialView("Open19"); }
        public IActionResult Open21() { return PartialView("Open21"); }
        public IActionResult Open22() { return PartialView("Open22"); }
        public IActionResult Open20() { return PartialView("Open20"); }
        public IActionResult Open14() { return PartialView("Open14"); }
        public IActionResult Open25() { return PartialView("Open25"); }
        public IActionResult Open23() { return PartialView("Open23"); }
        public IActionResult Open24() { return PartialView("Open24"); }
        public IActionResult Open26() { return PartialView("Open26"); }
        public IActionResult Open29() { return PartialView("Open29"); }
        public IActionResult Open27() { return PartialView("Open27"); }
        public IActionResult Open28() { return PartialView("Open28"); }
        public IActionResult Open30() { return PartialView("Open30"); }
        public IActionResult Open33() { return PartialView("Open33"); }
        public IActionResult Open34() { return PartialView("Open34"); }
        public IActionResult Open31() { return PartialView("Open31"); }
        public IActionResult Open32() { return PartialView("Open32"); }
        public IActionResult Open35() { return PartialView("Open35"); }
        public IActionResult Open38() { return PartialView("Open38"); }
        public IActionResult Open37() { return PartialView("Open37"); }
        public IActionResult Open39() { return PartialView("Open39"); }
        public IActionResult Open42() { return PartialView("Open42"); }
        public IActionResult Open41() { return PartialView("Open41"); }
        public IActionResult Open43() { return PartialView("Open43"); }
        public IActionResult Open40() { return PartialView("Open40"); }
        public IActionResult Open45() { return PartialView("Open45"); }
        public IActionResult Open36() { return PartialView("Open36"); }
        public IActionResult Open44() { return PartialView("Open44"); }
        public IActionResult Open48() { return PartialView("Open48"); }
        public IActionResult Open46() { return PartialView("Open46"); }
        public IActionResult Open47() { return PartialView("Open47"); }
        public IActionResult Open49() { return PartialView("Open49"); }
        public IActionResult Open50() { return PartialView("Open50"); }
    }
}