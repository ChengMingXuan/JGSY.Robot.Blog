﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.CSS.Controllers
{
    [Area("CSS")]
    public class CSSController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}