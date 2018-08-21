﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.NodeJs.Controllers
{
    [Area("NodeJs")]
    public class NodeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Node1()
        {
            return PartialView("Node1");
        }
        public IActionResult Node2()
        {
            return PartialView("Node2");
        }
        public IActionResult Node3()
        {
            return PartialView("Node3");
        }
    }
}