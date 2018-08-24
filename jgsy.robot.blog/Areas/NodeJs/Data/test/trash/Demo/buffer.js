var buf = new  Buffer(100);//100字节
var buf1 = new Buffer([1,22,33,44,100]);
var buf2 = new Buffer("adasd","utf-8");

var l=buf.write("werwerwerewrwe");
console.log(l)
console.log(buf.toString())
console.log(buf.toString("utf-8",1,3))

for (var i =0; i<100 ;i++){
buf[i] = i +97;
}
console.log("================")
console.log(buf.toString("ascii"))
console.log(buf.toString("ascii",0,10))
console.log(buf.toString("utf-8",0,10))
console.log(buf.toString(undefined,0,10))
 
console.log("================")
console.log("================")
console.log("================")
console.log(buf.toJSON())
console.log(buf.toLocaleString())
console.log("================")
console.log("================")
console.log("================")
var buffer1 = new Buffer('W3Cschool教程 ');
var buffer2 = new Buffer('www.w3cschool.cn');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
console.log("================");

var buffer1 = new Buffer('BC');
var buffer2 = new Buffer('ABC');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}
console.log("-------------------------------------------------");
console.log("-------------------------------------------------");
var buffer1 = new Buffer('ABC');
// 拷贝一个缓冲区
var buffer2 = new Buffer(3);
console.log("buffer2 content: " + buffer2.toString());
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());
console.log("buffer2 content: " + buffer2.slice(1,2) +"  "+buffer2.length);
