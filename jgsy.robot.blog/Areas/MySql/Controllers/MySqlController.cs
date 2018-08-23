using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.MySql.Controllers
{
    [Area("MySql")]
    public class MySqlController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}