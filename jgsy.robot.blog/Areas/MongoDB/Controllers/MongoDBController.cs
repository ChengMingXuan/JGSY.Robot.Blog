﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.MongoDB.Controllers
{
    [Area("MongoDB")]
    public class MongoDBController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}