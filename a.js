define(['b','c'],function(moduleB,moduleC){
	function say(){
		// moduleB.say();
		// moduleC.say();
		console.log('加载 moduleA')
	}
	//暴露接口
	return {
		say:say
	}
})