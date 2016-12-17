window.setInterval('showTime()',1000);
function showTime() {
	var nowTime = new Date();
	var year = nowTime.getFullYear();
	var month = nowTime.getMonth() + 1;
	var day = nowTime.getDate();
	var week = nowTime.getDay();
	var hours = nowTime.getHours();
	var minutes = nowTime.getMinutes();
	var seconds = nowTime.getSeconds();
	var stringTime = "";
	stringTime = stringTime + year + " 年 ";
	if (month < 10) {
		stringTime = stringTime + "0"
	}
	stringTime = stringTime + month + " 月 ";
	if (day < 10) {
		stringTime = stringTime + "0"
	}
	stringTime = stringTime + day + " 日 ";
	if (hours < 10) {
		stringTime = stringTime + "0"
	}
	stringTime = stringTime + hours + " : ";
	if (minutes < 10) {
		stringTime = stringTime + "0"
	}
	stringTime = stringTime + minutes + " : ";
	if (seconds < 10) {
		stringTime = stringTime + "0"
	}
	stringTime = stringTime + seconds + "   ";
	switch(week){
		case 0:
			stringTime = stringTime + "星期日";
			break;
		case 1:
			stringTime = stringTime + "星期一";
			break;
		case 2:
			stringTime = stringTime + "星期二";
			break;
		case 3:
			stringTime = stringTime + "星期三";
			break;
		case 4:
			stringTime = stringTime + "星期四";
			break;
		case 5:
			stringTime = stringTime + "星期五";
			break;
		case 6:
			stringTime = stringTime + "星期六";
			break;
	}
	document.getElementById("timeshow").innerHTML = stringTime;
}
//stringTime = year + " 年 " + ((month < 10) ? ("0" + month) :(month)) 
//		+ 	" 月 " +((day < 10) ? ("0" + day) :(day)) + " 日 " + ((hours < 10) ? ("0" + hours) :(hours)) + " : "
//		+ ((minutes < 10) ? ("0" + minutes) :(minutes)) + " : " + ((seconds < 10) ? ("0" + seconds) :(seconds));
//		