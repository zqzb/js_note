// var http = require("http")
// 	http.createServer(function(request,response){
// 		response.writeHead(200,{'Content-Type':'text/plain'});
// 		response.end('Hello World\n');
// 	}).listen(8888)
// 	console.log('Server running at http://127.0.0.1:8888/')

var fs=require('fs')
// var data=fs.readFileSync('a.txt');
// console.log(data.toString())
// console.log('程序执行结束！')

// fs.readFile('a.txt',function(err,data){
// 	if(err) return console.error(err)
// 	console.log(data.toString())
// })
// console.log('程序执行结束+')

var events = require('events');

var eventEmitter = new events.EventEmitter()

// 创建事件处理程序
var connectHandler = function connected(){
	console.log('连接成功')
	// 触发 data_recevied事件
	eventEmitter.emit('data_recevied')
}
// 绑定connection事件处理程序


eventEmitter.on('connection',connectHandler)
// 使用匿名函数绑定 data_recevied事件
eventEmitter.on('data_recevied',function(){
	console.log('数据接收成功')
})
// 触发connection事件
eventEmitter.emit('connection')
console.log('程序执行完毕')