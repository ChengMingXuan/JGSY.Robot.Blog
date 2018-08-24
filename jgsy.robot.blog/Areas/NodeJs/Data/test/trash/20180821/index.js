// console.log('===================')
// console.log( __filename );7
// console.log('===================')
// console.log( __dirname );
// console.log('===================')

// function printHello(){
//     console.log( "Hello, World!");
//  }

 
//  // 两秒后执行以上函数
// var t = setTimeout(function(){

//     console.log( "Hello, World!");
// }, 2000);

// // 清除定时器
// clearTimeout(t);


// // setInterval(printHello, 2000);
// console.log('========-----------------------===========')
// console.time("获取数据");
// console.timeEnd('获取数据');
// console.trace();

// // setInterval(printHello, 2000);


// console.info("程序开始执行：");

// var counter = 10;
// console.log("计数: %d", counter);

//   console.time("获取数据");
// //
// // 执行一些代码
// // 
//  console.timeEnd('获取数据');

// console.info("程序执行完毕。")


// process.on('exit', function(code) {

//     // 以下代码永远不会执行
//     setTimeout(function() {
//       console.log("该代码不会执行");
//     }, 0);
    
//     console.log('退出码为:', code);
//   });
//   console.log("程序执行结束");

process.stdout.write("Hello World!\n");

process.argv.forEach((val,index,arrary) => {
    console.log(index+ " : "+ val)
    
});
 
console.log(process.execPath)
console.log(process.platform)
console.log(process.env)
console.log("---------------1---------------")
console.log(process.version)
console.log("-------------2-----------------")
console.log(process.versions)
console.log("-------------2-----------------")
console.log(process.mainModule)

console.log('当前目录: ' + process.cwd());
console.log('当前目录: ' + __filename);
console.log('当前目录: ' + __dirname);
console.log(process.memoryUsage());