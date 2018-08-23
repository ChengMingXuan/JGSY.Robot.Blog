using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Linux.Controllers
{
    [Area("Linux")]
    public class LinuxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}