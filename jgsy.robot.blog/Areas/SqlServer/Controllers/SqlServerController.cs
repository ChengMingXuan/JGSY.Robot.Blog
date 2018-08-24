using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.SqlServer.Controllers
{
    [Area("SqlServer")]
    public class SqlServerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}