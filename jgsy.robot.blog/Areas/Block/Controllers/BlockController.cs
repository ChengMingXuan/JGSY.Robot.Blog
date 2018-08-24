using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Block.Controllers
{
    [Area("Block")]
    public class BlockController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Block1() { return PartialView("Block1"); }
        public IActionResult Block3() { return PartialView("Block3"); }
        public IActionResult Block4() { return PartialView("Block4"); }
        public IActionResult Block5() { return PartialView("Block5"); }
        public IActionResult Block6() { return PartialView("Block6"); }
        public IActionResult Block11() { return PartialView("Block11"); }
        public IActionResult Block8() { return PartialView("Block8"); }
        public IActionResult Block10() { return PartialView("Block10"); }
        public IActionResult Block9() { return PartialView("Block9"); }
        public IActionResult Block14() { return PartialView("Block14"); }
        public IActionResult Block13() { return PartialView("Block13"); }
        public IActionResult Block18() { return PartialView("Block18"); }
        public IActionResult Block12() { return PartialView("Block12"); }
        public IActionResult Block19() { return PartialView("Block19"); }
        public IActionResult Block15() { return PartialView("Block15"); }
        public IActionResult Block20() { return PartialView("Block20"); }
        public IActionResult Block17() { return PartialView("Block17"); }
        public IActionResult Block21() { return PartialView("Block21"); }
        public IActionResult Block16() { return PartialView("Block16"); }
        public IActionResult Block22() { return PartialView("Block22"); }
        public IActionResult Block23() { return PartialView("Block23"); }
        public IActionResult Block25() { return PartialView("Block25"); }
        public IActionResult Block26() { return PartialView("Block26"); }
        public IActionResult Block7() { return PartialView("Block7"); }
        public IActionResult Block29() { return PartialView("Block29"); }
        public IActionResult Block31() { return PartialView("Block31"); }
        public IActionResult Block34() { return PartialView("Block34"); }
        public IActionResult Block33() { return PartialView("Block33"); }
        public IActionResult Block35() { return PartialView("Block35"); }
        public IActionResult Block36() { return PartialView("Block36"); }
        public IActionResult Block32() { return PartialView("Block32"); }
        public IActionResult Block38() { return PartialView("Block38"); }
        public IActionResult Block40() { return PartialView("Block40"); }
        public IActionResult Block28() { return PartialView("Block28"); }
        public IActionResult Block41() { return PartialView("Block41"); }
        public IActionResult Block39() { return PartialView("Block39"); }
        public IActionResult Block43() { return PartialView("Block43"); }
        public IActionResult Block44() { return PartialView("Block44"); }
        public IActionResult Block42() { return PartialView("Block42"); }
        public IActionResult Block48() { return PartialView("Block48"); }
        public IActionResult Block45() { return PartialView("Block45"); }
        public IActionResult Block46() { return PartialView("Block46"); }
        public IActionResult Block37() { return PartialView("Block37"); }
        public IActionResult Block30() { return PartialView("Block30"); }
        public IActionResult Block47() { return PartialView("Block47"); }
        public IActionResult Block24() { return PartialView("Block24"); }
        public IActionResult Block49() { return PartialView("Block49"); }
        public IActionResult Block50() { return PartialView("Block50"); }
        public IActionResult Block2() { return PartialView("Block2"); }
        public IActionResult Block27() { return PartialView("Block27"); }
    }
}