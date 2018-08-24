using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Redis.Controllers
{
    [Area("Redis")]
    public class RedisController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Redis2() { return PartialView("Redis2"); }
        public IActionResult Redis1() { return PartialView("Redis1"); }
        public IActionResult Redis3() { return PartialView("Redis3"); }
        public IActionResult Redis4() { return PartialView("Redis4"); }
        public IActionResult Redis6() { return PartialView("Redis6"); }
        public IActionResult Redis7() { return PartialView("Redis7"); }
        public IActionResult Redis8() { return PartialView("Redis8"); }
        public IActionResult Redis9() { return PartialView("Redis9"); }
        public IActionResult Redis11() { return PartialView("Redis11"); }
        public IActionResult Redis10() { return PartialView("Redis10"); }
        public IActionResult Redis5() { return PartialView("Redis5"); }
        public IActionResult Redis12() { return PartialView("Redis12"); }
        public IActionResult Redis15() { return PartialView("Redis15"); }
        public IActionResult Redis13() { return PartialView("Redis13"); }
        public IActionResult Redis14() { return PartialView("Redis14"); }
        public IActionResult Redis17() { return PartialView("Redis17"); }
        public IActionResult Redis19() { return PartialView("Redis19"); }
        public IActionResult Redis18() { return PartialView("Redis18"); }
        public IActionResult Redis23() { return PartialView("Redis23"); }
        public IActionResult Redis20() { return PartialView("Redis20"); }
        public IActionResult Redis24() { return PartialView("Redis24"); }
        public IActionResult Redis16() { return PartialView("Redis16"); }
        public IActionResult Redis22() { return PartialView("Redis22"); }
        public IActionResult Redis28() { return PartialView("Redis28"); }
        public IActionResult Redis26() { return PartialView("Redis26"); }
        public IActionResult Redis25() { return PartialView("Redis25"); }
        public IActionResult Redis27() { return PartialView("Redis27"); }
        public IActionResult Redis32() { return PartialView("Redis32"); }
        public IActionResult Redis21() { return PartialView("Redis21"); }
        public IActionResult Redis33() { return PartialView("Redis33"); }
        public IActionResult Redis30() { return PartialView("Redis30"); }
        public IActionResult Redis34() { return PartialView("Redis34"); }
        public IActionResult Redis36() { return PartialView("Redis36"); }
        public IActionResult Redis38() { return PartialView("Redis38"); }
        public IActionResult Redis41() { return PartialView("Redis41"); }
        public IActionResult Redis35() { return PartialView("Redis35"); }
        public IActionResult Redis39() { return PartialView("Redis39"); }
        public IActionResult Redis42() { return PartialView("Redis42"); }
        public IActionResult Redis40() { return PartialView("Redis40"); }
        public IActionResult Redis43() { return PartialView("Redis43"); }
        public IActionResult Redis44() { return PartialView("Redis44"); }
        public IActionResult Redis46() { return PartialView("Redis46"); }
        public IActionResult Redis45() { return PartialView("Redis45"); }
        public IActionResult Redis48() { return PartialView("Redis48"); }
        public IActionResult Redis31() { return PartialView("Redis31"); }
        public IActionResult Redis47() { return PartialView("Redis47"); }
        public IActionResult Redis37() { return PartialView("Redis37"); }
        public IActionResult Redis29() { return PartialView("Redis29"); }
        public IActionResult Redis49() { return PartialView("Redis49"); }
        public IActionResult Redis50() { return PartialView("Redis50"); }
    }
}