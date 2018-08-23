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
    }
}