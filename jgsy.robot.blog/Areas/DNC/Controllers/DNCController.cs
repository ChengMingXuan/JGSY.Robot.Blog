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
        public IActionResult DNC5() { return PartialView("DNC5"); }
        public IActionResult DNC4() { return PartialView("DNC4"); }
        public IActionResult DNC10() { return PartialView("DNC10"); }
        public IActionResult DNC6() { return PartialView("DNC6"); }
        public IActionResult DNC9() { return PartialView("DNC9"); }
        public IActionResult DNC8() { return PartialView("DNC8"); }
        public IActionResult DNC14() { return PartialView("DNC14"); }
        public IActionResult DNC13() { return PartialView("DNC13"); }
        public IActionResult DNC16() { return PartialView("DNC16"); }
        public IActionResult DNC7() { return PartialView("DNC7"); }
        public IActionResult DNC12() { return PartialView("DNC12"); }
        public IActionResult DNC15() { return PartialView("DNC15"); }
        public IActionResult DNC17() { return PartialView("DNC17"); }
        public IActionResult DNC19() { return PartialView("DNC19"); }
        public IActionResult DNC21() { return PartialView("DNC21"); }
        public IActionResult DNC22() { return PartialView("DNC22"); }
        public IActionResult DNC23() { return PartialView("DNC23"); }
        public IActionResult DNC25() { return PartialView("DNC25"); }
        public IActionResult DNC20() { return PartialView("DNC20"); }
        public IActionResult DNC28() { return PartialView("DNC28"); }
        public IActionResult DNC27() { return PartialView("DNC27"); }
        public IActionResult DNC24() { return PartialView("DNC24"); }
        public IActionResult DNC30() { return PartialView("DNC30"); }
        public IActionResult DNC31() { return PartialView("DNC31"); }
        public IActionResult DNC32() { return PartialView("DNC32"); }
        public IActionResult DNC34() { return PartialView("DNC34"); }
        public IActionResult DNC33() { return PartialView("DNC33"); }
        public IActionResult DNC35() { return PartialView("DNC35"); }
        public IActionResult DNC36() { return PartialView("DNC36"); }
        public IActionResult DNC41() { return PartialView("DNC41"); }
        public IActionResult DNC40() { return PartialView("DNC40"); }
        public IActionResult DNC29() { return PartialView("DNC29"); }
        public IActionResult DNC38() { return PartialView("DNC38"); }
        public IActionResult DNC37() { return PartialView("DNC37"); }
        public IActionResult DNC39() { return PartialView("DNC39"); }
        public IActionResult DNC46() { return PartialView("DNC46"); }
        public IActionResult DNC45() { return PartialView("DNC45"); }
        public IActionResult DNC48() { return PartialView("DNC48"); }
        public IActionResult DNC43() { return PartialView("DNC43"); }
        public IActionResult DNC44() { return PartialView("DNC44"); }
        public IActionResult DNC18() { return PartialView("DNC18"); }
        public IActionResult DNC42() { return PartialView("DNC42"); }
        public IActionResult DNC26() { return PartialView("DNC26"); }
        public IActionResult DNC47() { return PartialView("DNC47"); }
        public IActionResult DNC11() { return PartialView("DNC11"); }
        public IActionResult DNC50() { return PartialView("DNC50"); }
        public IActionResult DNC49() { return PartialView("DNC49"); }
    }
}