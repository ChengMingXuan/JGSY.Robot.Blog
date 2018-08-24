using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Redis.Controllers
{
    [Area("Redis")]
    public class RedisController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}