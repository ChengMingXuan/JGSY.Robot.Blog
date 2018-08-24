using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Oracle.Controllers
{
    [Area("Oracle")]
    public class OracleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}