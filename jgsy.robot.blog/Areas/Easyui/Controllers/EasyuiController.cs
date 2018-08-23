using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Easyui.Controllers
{
    [Area("Easyui")]
    public class EasyuiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}