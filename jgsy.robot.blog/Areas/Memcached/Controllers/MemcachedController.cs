﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace jgsy.robot.blog.Areas.Memcached.Controllers
{
    [Area("Memcached")]
    public class MemcachedController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}