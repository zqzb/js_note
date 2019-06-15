(function(root){
	//匿名函数可以当做构造函数
	var stram =function(obj) {
		if(!(this instanceof stram)){
			return new stram(obj);
		}
		this.wrap = obj
	};
	stram.unique = function(array){
		var result = [];
		for(var i=0;i<array.length;i++){
			var target = array[i]
			if(result.indexOf(target)===-1){
				result.push(target)
			}
		}
		return result;
	}
	stram.functions = function(obj){
		var result = []    //查找  所有属性名称
		var key;
		for(key in obj){
			result.push(key);
		}
		return result;
	}

	stram.each = function(array,callback){
		console.log(array)
		for(var i=0,length = array.length;i<length;i++){
			callback.call(array,array[i],i)
		}
	}

	// 查找 属性  赋值一份到原型上面去
	stram.mixin = function(obj){
		stram.each(stram.functions(obj),function(name){
			var func =stram[name];
			stram.prototype[name] = function(){
				return func(this.wrap);
				
			}
			console.log(name)
		});
	}
	

	stram.mixin(stram);
	root.stram = stram;
})(this)





// console.log(unique([1,2,3,4,5,2,3,4]).map())   支持  