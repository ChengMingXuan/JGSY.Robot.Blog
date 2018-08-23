using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.CCC.Controllers
{
    [Area("CCC")]
    public class CCCController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}