var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.__proto__.x = 5;
console.log(subObj_Second.x); //5

var superObj = {
    x:1,
    y:2
};
var subObj_First = Object.create(superObj);
var subObj_Second = Object.create(superObj);
subObj_First.x = 5;
console.log(subObj_Second.x); //1

function Person(name){
    this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
function Student(id){
    this.id = id;
}
Student.prototype = new Person("Mike");
var s1 = new Student(2017001);
var s2 = new Student(2017002);
console.log(s1.name,s1.age,s1.id); //Mike 22 2017001
console.log(s2.name,s2.age,s2.id); //Mike 22 2017002
s1.__proto__.name = "Jack";
console.log(s2.name);  //Jack
s2.__proto__.__proto__.age = 99;
console.log(s2.age);  //99

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){console.log(this.name);};
function Student(name,age,id){
    Person.call(this,name,age); //等效于this.name = name;this.age = age;
    this.id = id;
}
Student.prototype.__proto__ = Person.prototype;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
/* {showName: ƒ, constructor: ƒ} */

function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
/* ƒ Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}  */

var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
//定义静态方法
BaseClass.f1 = function(){  
    console.log("This is a static method ");
};
BaseClass.f1();  //This is a static method
var instance1 = new BaseClass();
instance1.f2();  //This is a prototype method

var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1()
//1 This is a method in Base.prototype
//This is a method in instance1

var BaseClass = function() {
    this.method1 = function(){
        console.log('1 Defined by the "this" in the instance method');
    }
};
var instance1 = new BaseClass();
instance1.method1 = function(){
    console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1 = function(){
    console.log('3 Defined by the prototype instance method ');
};
instance1.method1(); //2 Defined directly in the instance method

//1确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name); //Foo
//2创建相似对象
function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
//Constr{name:"Mike"}
//true
//3constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); 
console.log(Father.prototype.constructor);
Father.prototype.constructor = Father;     
console.log(Father.prototype.constructor); 
var one = new Father(25);
/*
ƒ Person(area){
    this.type = 'person';
    this.area = area;
}
ƒ Person(area){
    this.type = 'person';
    this.area = area;
}
ƒ (age){
    this.age = age;
}
*/
