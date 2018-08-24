using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Html.Controllers
{
    [Area("Html")]
    public class HtmlController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Html1() { return PartialView("Html1"); }
        public IActionResult Html4() { return PartialView("Html4"); }
        public IActionResult Html3() { return PartialView("Html3"); }
        public IActionResult Html5() { return PartialView("Html5"); }
        public IActionResult Html10() { return PartialView("Html10"); }
        public IActionResult Html7() { return PartialView("Html7"); }
        public IActionResult Html11() { return PartialView("Html11"); }
        public IActionResult Html14() { return PartialView("Html14"); }
        public IActionResult Html8() { return PartialView("Html8"); }
        public IActionResult Html13() { return PartialView("Html13"); }
        public IActionResult Html15() { return PartialView("Html15"); }
        public IActionResult Html6() { return PartialView("Html6"); }
        public IActionResult Html18() { return PartialView("Html18"); }
        public IActionResult Html17() { return PartialView("Html17"); }
        public IActionResult Html9() { return PartialView("Html9"); }
        public IActionResult Html12() { return PartialView("Html12"); }
        public IActionResult Html16() { return PartialView("Html16"); }
        public IActionResult Html19() { return PartialView("Html19"); }
        public IActionResult Html21() { return PartialView("Html21"); }
        public IActionResult Html24() { return PartialView("Html24"); }
        public IActionResult Html26() { return PartialView("Html26"); }
        public IActionResult Html23() { return PartialView("Html23"); }
        public IActionResult Html25() { return PartialView("Html25"); }
        public IActionResult Html27() { return PartialView("Html27"); }
        public IActionResult Html22() { return PartialView("Html22"); }
        public IActionResult Html28() { return PartialView("Html28"); }
        public IActionResult Html29() { return PartialView("Html29"); }
        public IActionResult Html33() { return PartialView("Html33"); }
        public IActionResult Html30() { return PartialView("Html30"); }
        public IActionResult Html34() { return PartialView("Html34"); }
        public IActionResult Html32() { return PartialView("Html32"); }
        public IActionResult Html35() { return PartialView("Html35"); }
        public IActionResult Html36() { return PartialView("Html36"); }
        public IActionResult Html37() { return PartialView("Html37"); }
        public IActionResult Html20() { return PartialView("Html20"); }
        public IActionResult Html31() { return PartialView("Html31"); }
        public IActionResult Html38() { return PartialView("Html38"); }
        public IActionResult Html40() { return PartialView("Html40"); }
        public IActionResult Html42() { return PartialView("Html42"); }
        public IActionResult Html39() { return PartialView("Html39"); }
        public IActionResult Html43() { return PartialView("Html43"); }
        public IActionResult Html46() { return PartialView("Html46"); }
        public IActionResult Html47() { return PartialView("Html47"); }
        public IActionResult Html41() { return PartialView("Html41"); }
        public IActionResult Html45() { return PartialView("Html45"); }
        public IActionResult Html44() { return PartialView("Html44"); }
        public IActionResult Html48() { return PartialView("Html48"); }
        public IActionResult Html2() { return PartialView("Html2"); }
        public IActionResult Html50() { return PartialView("Html50"); }
        public IActionResult Html49() { return PartialView("Html49"); }
    }
}