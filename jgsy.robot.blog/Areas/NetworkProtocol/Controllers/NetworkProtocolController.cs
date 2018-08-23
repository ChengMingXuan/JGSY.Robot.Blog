using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.NetworkProtocol.Controllers
{
    [Area("NetworkProtocol")]
    public class NetworkProtocolController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}