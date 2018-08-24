var domain = require('domain');

var EventEmitter = require('events').EventEmitter;

var emitter1 = new EventEmitter();

var domain1 = domain.create();

domain1.on('error',function(err){
    console.log('domain1 处理这个错误 ('+err.message+')')
});

 domain1.add(emitter1);

emitter1.on("error",function(err){
    console.log("监听处理错误 ("+err.message+")")
});

  emitter1.emit('error',new Error('通过监听来处理'));

 emitter1.removeAllListeners('error');

   emitter1.emit("error",new Error('通过 domain1 处理'));

var domain2 = domain.create();

domain2.on('error',function(err){
    console.log('domain2 处理这个错误 （'+err.message+'）')
});

domain2.run(function(){
var emitter2 = new EventEmitter();
emitter2.emit('error',new Error('通过 domain2 处理'));

});

domain1.remove(emitter1);

emitter1.emit('error',new Error('转换为异常，系统将崩溃！！'))



