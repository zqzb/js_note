({
	appDir:'./',  //根目录
	baseUrl:'./',  //相对于appDir，代表要查找js文件的起始文件夹
	dir:'./dist',  //输出目录
	removeCombined:true,  //如果为true，将从输出目录删除已合并的文件
	modules:[
		//下面是每一个页面需要用到的模块，说白了就是各页面的入口文件
		{
			name:'main'
		}
	],
	fileExclusionRegExp:/^((r|build|require)\.js)|(index.html)$/,
	paths:{
		util:'./'
	}
})