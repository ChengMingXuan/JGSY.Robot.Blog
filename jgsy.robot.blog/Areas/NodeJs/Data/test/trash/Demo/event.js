 

//循环事件
//引入events 模块
 var events = require("events");
 //创建eventEmitter
 var eventEmitter=new events.EventEmitter();
 var connectHandler=function connected(){
     console.log("链接成功node ")
     eventEmitter.emit("data_eventName");
 }
 eventEmitter.on("connection",connectHandler);

 eventEmitter.on("data_eventName",function(){
    console.log("数据接收成功")

 })
 eventEmitter.emit("connection");
console.log("程序执行结束!")