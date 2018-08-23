using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Bootstrap.Controllers
{
    [Area("Bootstrap")]
    public class BootstrapController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}