using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Technology.Controllers
{
    [Area("Technology")]
    public class TechnologyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}