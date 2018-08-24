var path = require("path")

console.log('normalization : ' + path.normalize('../test/test1//2slashes/1slash/tab/..'));
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash','/tab1/', '..'));
// 转换为绝对路径
console.log('resolve : ' + path.resolve('main.js'));
console.log('ext name : ' + path.extname('main.js'));
console.log(path.isAbsolute("E:/aaa/20180821/index.js"))
console.log(path.relative("E:/aaa/20180821/index.js", ""))
console.log(path.dirname("E:/aaa/20180821/index.js"))
console.log()
console.log()
