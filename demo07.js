//函数定义
//函数声明方法
function max(a,b){
    return a>b?a:b;
}
max(2,3);
//函数表达式方法 等号右侧可匿名函数可非匿名函数
var max = function (a,b){ //匿名函数
    return a>b?a:b;
};
max(2,3);
//Function构造函数方法
var max = new Function("a","b","return a>b?a:b");
max(2,3);

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();
//23 //Object {name: "obj", x: 23}

var x = 45;
var obj = {
    x:23,
    test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
    }
};
obj.test(); //45

var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//i'm:polly i can fly ___ 5 6
//i'm ABC i cam swim ___ 3 4
//i'm:ABC i can fly ___ 7 8

//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();
//Hi,i'm Jack

//实参小于形参
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3)); //6
console.log(sum(1,2)); //8
console.log(sum(1)); //10
//实参大于形参
unction test() {
    console.log(arguments); 
    console.log(test.arguments==arguments,arguments); //true
    console.log(arguments.length); //2
	console.log(typeof arguments); //Object
	console.log(arguments instanceof Array); //false
	console.log(arguments instanceof Object); //true
    console.log(Array.prototype.slice.call(arguments)); 
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");


var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x); 
    x = 2;
    console.trace("a:",a," x:",x); 
}
console.trace("a:",a);
foo(a); 
console.trace("a:",a);
//a: 1
//a: 1  x: 1
//a: 1  x: 2
//a: 1 

var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x); 
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);
}
console.trace("obj.x :",obj.x);
fee(obj);
console.trace("obj.x :",obj.x);
//obj.x : 1
//obj.x : 1  o.x : 1
//obj.x : 3  o.x : 3
//obj.x : 3
