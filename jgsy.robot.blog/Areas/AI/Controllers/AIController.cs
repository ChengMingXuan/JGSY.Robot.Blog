using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.AI.Controllers
{
    [Area("AI")]
    public class AIController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}