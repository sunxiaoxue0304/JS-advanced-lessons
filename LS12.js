function f1() {
  var x=1;
  function f2(){
    return x++;
  }
  return f2();
}
var f3=f1();
console.log(f3); //1
console.log(f3); //1

function f1() {
  var x=1;
  function f2(){
    return x++;
  }
  return f2;
}
var f3=f1();
console.log(f3()); //1
console.log(f3()); //2

function createInc(startValue){
  return function(step){
    startValue += step;
    return startValue;
  }
}
var inc = createInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8
inc = createInc(5); //创建了一个新的闭包
console.log(inc(1)); //6 

function createInc(startValue){
  return function(step){
    startValue += step;
    return startValue;
  }
}
var inc = createInc(5);
console.log(inc(1));  //6
console.log(inc(2));  //8
var inc2 = createInc(5); 
console.log(inc(1));  //9 //startValue没有释放掉
console.log(inc(2));  //11
console.log(inc2(1));  //6 //inc2新建闭包

var tmp = 100;
function foo(x){
  var tmp = 3;
  return function(y){
    console.log(x+y+(++tmp));
  }
}
var fee = foo(2);
fee(10); //16
fee(10); //17
fee(10); //18

function foo(x) {
    var tmp = 3;
    return function (y) {
        x.count = x.count ? x.count + 1 : 1;
        console.log(x + y + tmp,x.count);
    }
}
var age = new Number(2);
var bar = foo(age);
bar(10);  //15 1
bar(10);  //15 2
bar(10);  //15 3

function counter() {
    var n = 0;
    return {
        count:function () {return ++n;},
        reset:function () {n = 0;return n;}
    }
}
var c = counter();
var d = counter();
console.log(c.count()); //1
console.log(d.count()); //1
console.log(c.reset()); //0
console.log(c.count()); //1
console.log(d.count()); //2

var max = 10;
var fn = function (x) {
    if(x > max){
        console.log(x);
    }
};
(function (f) {
    var max = 100;
    f(15);
})(fn);
//15

function f1(){
    var n = 999;
    function f2(){
        console.log(++n);
    }
    return f2;
}
var f = f1();
f(); //1000
f(); //1001

var n = 10;
function f1(){
    var n=999;
    nAdd=function(){n+=1;};
    function f2(){
        console.log(n);
    }
    return f2;
}
var result=f1();
result(); //999
nAdd();
result(); //1000

function Person(){
    var name = "default";
    return {
        getName : function(){
            return name;
        },
        setName : function(newName){
            name = newName;
        }
    }
};
var john = Person();
console.log(john.getName()); //default
john.setName("john");
console.log(john.getName()); //john

var jack = Person();
console.log(jack.getName()); //default
jack.setName("jack");
console.log(jack.getName()); //jack

var m = 10;
function f1(){
    nAdd=function(){++m;};
    function f2(){
        console.log(m);
    }
    return f2;
}
var result1=f1();
var result2=f1();
result1(); //10
nAdd();
result2(); //11
result1(); //11
