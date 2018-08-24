// var fs = require('fs');
// var data ='';
// var readerStream=fs.createReadStream('input.txt');
// readerStream.setEncoding('UTF8');
// readerStream.on('data',function(chunk){
//     data+=chunk;
// });
// readerStream.on('end',function(){
//     console.log(data)
// })
// readerStream.on('err',function(){
//     console.log(data)
// })
// readerStream.on('finish',function(){
//     console.log('finish')
// }) 
// console.log('结束')


// var fs = require('fs');

// var data ='结束结束结束结束结束结束结束结束结束结束结束结束结束结束';

// var writeStream=fs.createWriteStream('output.txt');

// writeStream.write(data,'UTF8');

// writeStream.end();
// writeStream.on("finish",function(){
//     console.log('写完了')
// });

// writeStream.on('err',function(err){
//     console.log(err.stack)
// })
// console.log('结束')





// var fs = require('fs');

// var zlib =require('zlib');
// fs.createReadStream('input.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));
  
// console.log('结束')


var fs = require('fs');

var zlib =require('zlib');
fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));
  
console.log('结束')



 
 

