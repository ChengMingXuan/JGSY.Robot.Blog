using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.MongoDB.Controllers
{
    [Area("MongoDB")]
    public class MongoDBController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult MongoDB2() { return PartialView("MongoDB2"); }
        public IActionResult MongoDB1() { return PartialView("MongoDB1"); }
        public IActionResult MongoDB3() { return PartialView("MongoDB3"); }
        public IActionResult MongoDB7() { return PartialView("MongoDB7"); }
        public IActionResult MongoDB8() { return PartialView("MongoDB8"); }
        public IActionResult MongoDB4() { return PartialView("MongoDB4"); }
        public IActionResult MongoDB5() { return PartialView("MongoDB5"); }
        public IActionResult MongoDB6() { return PartialView("MongoDB6"); }
        public IActionResult MongoDB10() { return PartialView("MongoDB10"); }
        public IActionResult MongoDB9() { return PartialView("MongoDB9"); }
        public IActionResult MongoDB12() { return PartialView("MongoDB12"); }
        public IActionResult MongoDB11() { return PartialView("MongoDB11"); }
        public IActionResult MongoDB16() { return PartialView("MongoDB16"); }
        public IActionResult MongoDB18() { return PartialView("MongoDB18"); }
        public IActionResult MongoDB17() { return PartialView("MongoDB17"); }
        public IActionResult MongoDB20() { return PartialView("MongoDB20"); }
        public IActionResult MongoDB21() { return PartialView("MongoDB21"); }
        public IActionResult MongoDB14() { return PartialView("MongoDB14"); }
        public IActionResult MongoDB13() { return PartialView("MongoDB13"); }
        public IActionResult MongoDB23() { return PartialView("MongoDB23"); }
        public IActionResult MongoDB22() { return PartialView("MongoDB22"); }
        public IActionResult MongoDB26() { return PartialView("MongoDB26"); }
        public IActionResult MongoDB25() { return PartialView("MongoDB25"); }
        public IActionResult MongoDB19() { return PartialView("MongoDB19"); }
        public IActionResult MongoDB15() { return PartialView("MongoDB15"); }
        public IActionResult MongoDB28() { return PartialView("MongoDB28"); }
        public IActionResult MongoDB29() { return PartialView("MongoDB29"); }
        public IActionResult MongoDB30() { return PartialView("MongoDB30"); }
        public IActionResult MongoDB34() { return PartialView("MongoDB34"); }
        public IActionResult MongoDB35() { return PartialView("MongoDB35"); }
        public IActionResult MongoDB31() { return PartialView("MongoDB31"); }
        public IActionResult MongoDB32() { return PartialView("MongoDB32"); }
        public IActionResult MongoDB33() { return PartialView("MongoDB33"); }
        public IActionResult MongoDB37() { return PartialView("MongoDB37"); }
        public IActionResult MongoDB36() { return PartialView("MongoDB36"); }
        public IActionResult MongoDB38() { return PartialView("MongoDB38"); }
        public IActionResult MongoDB39() { return PartialView("MongoDB39"); }
        public IActionResult MongoDB40() { return PartialView("MongoDB40"); }
        public IActionResult MongoDB42() { return PartialView("MongoDB42"); }
        public IActionResult MongoDB24() { return PartialView("MongoDB24"); }
        public IActionResult MongoDB27() { return PartialView("MongoDB27"); }
        public IActionResult MongoDB45() { return PartialView("MongoDB45"); }
        public IActionResult MongoDB43() { return PartialView("MongoDB43"); }
        public IActionResult MongoDB44() { return PartialView("MongoDB44"); }
        public IActionResult MongoDB47() { return PartialView("MongoDB47"); }
        public IActionResult MongoDB41() { return PartialView("MongoDB41"); }
        public IActionResult MongoDB46() { return PartialView("MongoDB46"); }
        public IActionResult MongoDB49() { return PartialView("MongoDB49"); }
        public IActionResult MongoDB48() { return PartialView("MongoDB48"); }
        public IActionResult MongoDB50() { return PartialView("MongoDB50"); }
    }
}