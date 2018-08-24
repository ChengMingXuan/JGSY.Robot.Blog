var util=require("util")
function Base(){
    this.name="base";
    this.base=1991;
    this.sayhello = function(){
    console.log("Hello " + " "+this.name)
    }
}
Base.prototype.showName=function(){
     console.log(this.name)
}

function Sub(){
    this.name='sub';

}

util.inherits(Sub,Base);
// var obj=new Base();
// obj.sayhello()
// obj.showName()
// console.log(obj)
// var objs=new Sub();
// objs.showName()
// // objs.sayhello()
// console.log(objs)


// console.log(util.isError(new Error()))
//   // true
//   console.log(util.isError(new TypeError()))
//   // true
//   console.log(util.isError({ name: 'Error', message: 'an error occurred' }))
//   // false


//   console.log(util.isDate(new Date()))
//   // true
//   console.log(util.isDate(Date()))
//   // false (without 'new' returns a String)
//   console.log(util.isDate({}))
//   // false


// console.log(util.isRegExp(/some regexp/))
//   // true
//   console.log(util.isRegExp(new RegExp('s1ome1 re1gexp1')))
//   // true
//   console.log(util.isRegExp(null))
//   // false

// console.log(util.isArray([]))
//   // true
//   console.log(util.isArray(new Array))
//   // true
//   console.log(util.isArray({}))
//   // false


// function Person() { 
//   this.name = 'byvoid'; 
//   this.toString = function() { 
//  return this.name; 
//     }; 
// } 
// var obj = new Person(); 
// console.log(util.inspect(obj)); 
// console.log(util.inspect(obj, true)); 





// var fs = require('fs'); 
// fs.readFile('content.txt', function(err, data) { 
//     if(err) { 
//         console.error(err); 
//   } else{ 
//     console.log(data); 
//     console.log(data.toJSON()); 
//     console.log(data.toLocaleString()); 
//     console.log(data.toString()); 
//     console.log(data.toString()==data.toLocaleString()); 
//    } 
// }); 
var fs = require('fs'); 
//     fs.readFile('content.txt', 'utf-8', function(err, data) { 
//     if (err) { 
//        console.error(err); 
//   } else { 
//      console.log(data); 
   
//          console.log(data.toLocaleString()); 
//          console.log(data.toString()); 
//          console.log(data.toString()==data.toLocaleString()); 
//    } 
// }); 

fs.open('content.txt', 'r', function(err, fd) { 
    if(err) { 
        console.error(err); 
      return; 
  } 
    var buf = new Buffer(8); 
  fs.read(fd, buf, 0, 8, null, function(err, bytesRead, buffer) { 
      if(err) { 
            console.error(err); 
          return; 
      } 
        console.log('bytesRead: ' + bytesRead); 
        console.log(buffer); 
 }) 
}); 