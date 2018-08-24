using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Block.Controllers
{
    [Area("Block")]
    public class BlockController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}