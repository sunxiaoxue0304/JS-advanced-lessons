var me ={
  age:18,
  name:"beautiful",
  show:function(){
    console.log("我是"+this.name+"今年"+this.age);
  }
}
me.show(); //我是beautiful今年18

console.log(typeof Array); //function
console.log(typeof Function); //function
console.log(typeof Date); //function
console.log(typeof Number); //function
console.log(typeof String); //function
console.log(typeof Boolean); //function
console.log(typeof Math); //object
console.log(typeof JSON); //object

console.log(Object instanceof Function); //true
console.log(Object instanceof Object); //true
console.log(Boolean instanceof Function); //true
console.log(Boolean instanceof Object); //true
console.log(String instanceof Function); //true
console.log(String instanceof Object); //true
console.log(Number instanceof Function); //true
console.log(Number instanceof Object); //true
console.log(Function instanceof Function); //true
console.log(Function instanceof Object); //true
console.log(Array instanceof Function); //true
console.log(Array instanceof Object); //true
console.log(Date instanceof Function); //true
console.log(Date instanceof Object); //true
console.log(Math instanceof Function); //false
console.log(Math instanceof Object); //true
console.log(JSON instanceof Function); //false
console.log(JSON instanceof Object); //true

console.log(new Function() instanceof Function); //true
console.log((new(new Function())) instanceof Function); //false
console.log((new(new Function())) instanceof Object); //true

var o = {
    _x:1.0,
    get x(){
        return this._x;
    },
    set x(val){
        this._x = val;
    }
};
console.log(o.x); //1
o.x = 2;
console.log(o.x,o._x); //2 2

var o = {
    _x:1.0,
    get x(){  //get只能读不能写
        return this._x;
    }
};
console.log(o.x); //1
o.x = 2;
console.log(o.x,o._x); //1 1

var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.num); //10
console.log(obj.str); //Hi
console.log(obj.show()); //Hi
console.log(obj.__proto__ === Object.prototype); //true

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function(){
    console.log("hello,i'm",this.name,this.age,"years old");
};
var person1 = new Person("Mike",21);
person1.sayName(); //hello,i'm Mike 21 years old

var objStr = new Object("xxx");
console.log(typeof objStr); //object
console.log(objStr instanceof String); //true

var objNum = new Object(23);
console.log(typeof objNum); //object
console.log(objNum instanceof Number); //true

var objBoolean = new Object(true);
console.log(typeof objBoolean); //object
console.log(objBoolean instanceof Boolean); //true

var obj3 = {};
for(var i=0;i<10;i++){
    obj3.i = i;
}  //9

var obj4 = {};
for(var i=0;i<10;i++){
    obj4[i] = i;
}  //9
