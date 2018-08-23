using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.ES.Controllers
{
    [Area("ES")]
    public class ESController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}