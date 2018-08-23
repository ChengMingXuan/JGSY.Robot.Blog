using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Jquery.Controllers
{
    [Area("Jquery")]
    public class JqueryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}