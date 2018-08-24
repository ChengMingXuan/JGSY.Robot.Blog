using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Regular.Controllers
{
    [Area("Regular")]
    public class RegularController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}