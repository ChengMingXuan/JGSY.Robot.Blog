using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.SQLite.Controllers
{
    [Area("SQLite")]
    public class SQLiteController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}