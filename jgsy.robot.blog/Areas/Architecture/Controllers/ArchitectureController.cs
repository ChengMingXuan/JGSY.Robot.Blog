﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Architecture.Controllers
{
    [Area("Architecture")]
    public class ArchitectureController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}