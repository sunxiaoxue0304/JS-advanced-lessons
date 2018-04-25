var proObj = {
  z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3

"z" in obj; //true
obj.hasOwnProperty("z"); //false

obj.z = 5;
obj.hasOwnProperty('z'); //true
obj.z; //5
proObj.z; //3

obj.z = 8;
obj.z; //8
delete obj.z; //true
obj.z; //3
delete obj.z; //true
obj.z; //3
delete  obj.__proto__.z;//或delete proObj.z; //删除原型上的属性
console.log(obj.z); //undefined

//创建对象三种方式
var obj1 = {x:1}; //字面量直接生成
var obj2 = Object.create(obj1); //Object工厂方法
obj2.y = 2;

var Obj3 = function(x){  //构造函数实例化对象
    this.x = x;
}
var obj3 = new Obj3(4);
console.log(obj1,obj2,obj3);
//{x: 1}  
//{y: 2} 
//Obj3 {x: 4}

//任何方式创建的对象都有原型对象，可以通过对象的 __proto__ 属性来访问原型对象
var obj = {
    num:10,
    str:"Hi",
    show:function(){
        return this.str;
    }
};
console.log(obj.__proto__ === Object.prototype); //true

var newObj = Object.create(obj);
var newObj2 = Object.create(obj);
newObj.age = 23;

console.log(newObj.__proto__ === obj); //true
console.log(newObj2.__proto__ === obj); //true

function Person(age,name) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHi = function () {
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person(20,"Jack");
console.log(p1.name);
console.log(p1.age);
p1.sayHi();  //sayHi定义在P1的原型上
//Jack
//10 20
//Hi,i'm Jack
console.log(p1.__proto__ === Person.prototype); //true

function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log("z" in obj); //true
console.log(obj.hasOwnProperty("z")); //false
obj.z = 5;
obj.hasOwnProperty("z");
console.log(obj.z); //5
console.log(MyObj.prototype.z); //3
obj.z = 8;
console.log(obj.z); //8
delete obj.z; //true
console.log(obj.z); //3
delete obj.z; //true
console.log(obj.z); //3
