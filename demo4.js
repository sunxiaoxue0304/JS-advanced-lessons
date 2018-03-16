var a = [1,2,3]; 
var b = a;
console.log(a,b); //[1,2,3] [1,2,3]
b.pop();
console.log(a,b); //[1,2] [1,2]
b = [4,5,6];
console.log(a,b); //[1,2] [4,5,6]

function foo(x) {
    x.push(4);
    x = [5,6,7];
    x.push(8);
    console.log(x); //[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a); //[1,2,3,4]

function foo(x) {
    x.push(4);
    console.log(x); //[1,2,3,4]
    x.length = 0;
    x.push(5,6,7,8);
    console.log(x); //[5,6,7,8]
}
var a = [1,2,3];
foo(a);
console.log(a); //[5,6,7,8]


function foo(){
	var a=b=3;
}
foo();
console.log("b:",b); //b:3
console.log("a:",a); //a:2


{
    var a = 20;
}
console.log("大括号外依然能访问到a:",a); //大括号外依然能访问到a:20


if(true){
    var a = 20;
}
console.log(a); //20

if(false){
    var b = 30;
}
console.log(b); //undefined


"use stirct"
function isStrictMode() {
    return this === window?false:true;
}
console.log(isStrictMode()); //false
