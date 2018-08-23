using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.React.Controllers
{
    [Area("React")]
    public class ReactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}