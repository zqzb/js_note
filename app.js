/*
	辗转相除法求最大公约数
*/
// function gys(num1,num2){
// 	var remain=0;
// 	do{
// 		remain = num1%num2;
// 		num1=num2;
// 		num2=remain
// 	}while(remain!==0);
// 	return num1
// }

var fs=require('fs')
fs.readFile('./index.js','utf-8',function(err,data){
	var newData = data.replace(/\/\*[\s\S]*\*\//,'');
	fs.writeFile('./index.copy.js',newData,function(err,data){
		if(!err){
			console.log('Write file success!')
		}
	})
})
const dns=require('dns')
console.log(dns.EOF)