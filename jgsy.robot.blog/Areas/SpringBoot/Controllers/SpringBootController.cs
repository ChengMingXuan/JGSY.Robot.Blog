using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.SpringBoot.Controllers
{
    [Area("SpringBoot")]
    public class SpringBootController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}