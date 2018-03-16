var x;
x = 23;//(x = 21;)
if(x>22){
    x+=2;
}else{
    console.log("x 不大于 22");
}
//结果25 (x 不大于 22)

for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);
// i:0
// i:1
// i:2
//i的值是3


function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));
//3

function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,1));
//2


console.log(typeof NaN);//number类型
console.log(typeof Infinity);//number类型


var num = 1;
var str = "some string";
var b = true;
var n = null;
var u = undefined;
var arr = ["apple", "pear", "banana"];
var func = function(){
    return "this a function";
};
var obj = new Object();
obj.name = "test";

console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof b); //boolean
console.log(typeof n); //object
console.log(typeof u); //undefined
console.log(typeof arr); //object
console.log(typeof func); //function
console.log(typeof obj); //object 

console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Object); //function
console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof RegExp); //function
console.log(typeof Error); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object 


var a = 2;
var b = "2";
console.log(a == b); //true
console.log(b == a); //true
console.log(a === b); //false

var a = {};
var b = {};
console.log(a == b); //false
console.log(a === b); //false
console.log(a === a); //true

var c1 = 23;
var c2 = new Number(23);
console.log(c1==c2); //true
console.log(c1===c2); //false
//判等步骤
//1.看是==还是===
//2.如果是===则先看类型
// 类型不同肯定false
// 类型相同（如果是基本类型：判断值是否相等；  如果是引用类型：判断引用是否是同一个引用）
//3.如果是==则先看类型
// 先试着进行类型转换
// 转换后（如果是基本类型：判断值是否相等；   如果是引用类型：判断引用是否是同一个引用）


var str2 = "abc";
console.log(str2.length); //3
str2.length = 1;
console.log(str2); //abc
//原始类型变量的不可变性，指的是包装对象的改变并不影响原始类型的变量

//instance与typeof
console.log({}instanceof Object); //true
console.log([]instanceof Object); //true
console.log([]instanceof Array); //true

//逻辑运算符
console.log(2>1&&4<5); //true
console.log(true&&(!2)); //false
console.log(false&&("2" == 2)); //false
console.log(false&&false); //false

console.log(2>1||4<5); //true
console.log(true||(!2)); //true
console.log(false||("2" == 2)); //true
console.log(false||false); //false


console.log(1===1.0); //true
console.log(Number("xyz")); //NaN
console.log(3/0); //Infinity
<<<<<<< HEAD


var a = 10;
console.log(++a); //11
var b = 20;
console.log(b++); //20


var str1 = "aaa".concat("bbb"); //aaabbb
var str2 = "abcdef".slice(2); //cdef
var str3 = "abcdef".slice(2,5); //cde
var str4 = "abcdef".slice(-2); //ef
var str5 = "abcdef".slice(2,-2); //cd

var str6 = "abcdef".split("c"); //"ab","def"
var str7 = "abcdef".split("c",1); //"ab"
var str8 = "abcdef".split("c",2); //"ab","def"

var str9 = "abcdef".charAt(2); //c
var str10 = "abcdefabcdef".indexOf("d",1); //3
var str11 = "abcdefabcdef".indexOf("d",4); //9 从第四个开始找

var str12 = "    abc def     \r\n  ".trim();
//abc def 返回已移除前导空格、尾随空格和行终止符的原始字符串

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5); //后一个参数代表长度
console.log(str13,str14); //abcdefghijklmn cdefg
var str15 = str13.substring(2,5); //后一个参数代表第几个end
console.log(str13,str15); //abcdefghijklmn cde

//循环语句
for(var i=0;i<10;i++){
    console.log("i:",i);
}
console.log("out of for:",i);
//i: 0
//i: 1
//i: 2
//i: 3
//i: 4
//i: 5
//i: 6
//i: 7
//i: 8
//i: 9
//out of for: 10
