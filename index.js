/*
	lalalalallalallal
*/
function DJS(){
		//倒计时
		var nowTime = Date.now()   //此时的时间毫秒数
		var confDate = new Date(2019,2,4,18,30,0)   //设定的目标时间
		confTime = confDate.getTime()   //设定的目标时间毫秒数

		var diffTime = parseInt((confTime-nowTime)/1000) //还差多少秒数
		if(diffTime>0){
			var day = parseInt(diffTime/(60*60*24))  //剩余天数
			var hours = parseInt(diffTime%(60*60*24)/(60*60))  //剩余小时
			var minutes = parseInt(diffTime%(60*60*24)%(60*60)/60)   //剩余分钟
			var seconds = parseInt(diffTime%(60*60*24)%(60*60)%60)    //剩余秒数
			dayText.innerText=day
			hoursText.innerText=hours
			minutesText.innerText=minutes
			secondsText.innerText=seconds
		}
	}