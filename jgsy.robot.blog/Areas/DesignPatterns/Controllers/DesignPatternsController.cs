﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.DesignPatterns.Controllers
{
    [Area("DesignPatterns")]
    public class DesignPatternsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}