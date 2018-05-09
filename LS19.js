new Date(year,month,date?,hours?,minutes?,seconds?,milliseconds?) 

var date1 = new Date(2017,9,18,12,34,1);//月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)

var date2 = new Date(17,9,18,12,34,1);//若year为2位的话自动加1900
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

var date3 = new Date("2017-08-09");//此处的08代表8月
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

var date4 = new Date(NaN);
console.log(date4);  //Invalid Date (无效的date)
date4 instanceof Date; //true

var date5 = new Date(1000);
console.log(date5);
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

var date6 = new Date(0); 
console.log(date6);
//Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)

console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）

var today = new Date;
today.setMonth(6);
console.log(today);//Sat Jul 07 2018 14:46:19 GMT+0800 (中国标准时间)
console.log(today.getDay()); //6 //7月7星期六

console.log(Date.now());//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime()); //现在时间

var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),
	d.getDay(),d.getDate(),d.getHours()); //1978 10 6 25 8
console.log(d.getTimezoneOffset());  //-480
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),
	d.getDay(),d.getDate(),d.getHours()); //1978 10 6 11 8
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),
	d.getDay(),d.getDate(),d.getHours()); //1999 5 4 3 8

var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString()); 
//15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
console.log(d.toDateString(),"___",d.toLocaleDateString()); 
//Sat Apr 21 2012 ___ 2012/4/21
console.log(d.toJSON()); //2012-04-21T07:07:23.234Z

console.log(new Date("2010-01-01 11:12:23.111")); 
//Fri Jan 01 2010 11:12:23 GMT+0800 (中国标准时间)
console.log(new Date("2010-01-01T11:12:23.111Z")); 
//Fri Jan 01 2010 19:12:23 GMT+0800 (中国标准时间)

console.log(new Date().toISOString()); //现在时间

var today = new Date();
var newDate = new Date(today.getTime()+1000*3600*24*50);
console.log(newDate); //50天后星期几
