require.config({
	baseUrl:'',
	paths:{
		util:'app'
	}
})

require(['app','a'],function(util,moduleA){
	moduleA.say();
})
