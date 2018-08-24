using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Kubenetes.Controllers
{
    [Area("Kubenetes")]
    public class KubenetesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}