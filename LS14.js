var objProto = {
    z:3
};
var obj = Object.create(objProto);
obj.x = 1;
obj.y = 2;
console.log(obj.x); //1
console.log(obj.y); //2
console.log(obj.z); //3
console.log(obj.toString); //f toString()
for(var k in obj){
    console.log(k,obj[k]);
} 
//x 1
//y 2
//z 3

var obj = {
  num:10,
  str:"Hi",
  show:function(){
    console.log(this.str);
  }
}
var subObj = Object.create(obj);
subObj.age = 23; //23

function Person(age,name){
  this.age = age;
  this.name = name;
}
Person.prototype.sayHi = function(){
  console.log("Hi,I'm"+this.name);
}
var p1 = new Person(20,"Jane");
p1.sayHi(); //Hi,I'mJane

var obj = {
  x:1,
  y:2
};
for(var k in obj){
  console.log(k,obj[k]);
} 
//x 1
//y 2

var obj = {
  x:1,
  y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
for(var k in obj){
  console.log(k,obj[k]);
}
//y 2

//对象属性（数据属性）
var person = {name:"Jack"};
Object.defineProperty(person,"name",{
  writable:false,        //确定属性是否可写性
  configurable:false,    //确定属性是否能删除和其他特性是否可配置
  enumerable:true,       //属性是否可枚举
  value:"Mike"           //对应属性的值
});
console.log(person.name); //Mike
person.name = "Lucy";
console.log(person.name); //Mike
delete person.name;
console.log(person.name); //Mike

//通过Object.defineProperty方法添加的属性，除了手动修改，其所有特性默认都是false

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:false,
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name); //Jack
person.name = "Lucy";  
console.log(person.name); //Lucy
delete person.name; 
console.log(person.name); //Lucy

var person = {_name:"Jack"};
Object.defineProperty(person,"name",{
    configurable:true, //此时为true
    enumerable:true,
    set:function(val){this._name = val},
    get:function(){return this._name}
});
console.log(person.name); //Jack
person.name = "Lucy";
console.log(person.name); //Lucy
delete person.name;
console.log(person.name); //undefined
 
var obj = {
    x:1,
    y:2
};
obj.z = 3;
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3

var obj = {
    x:1,
    y:2
};
obj.z = 3;
Object.defineProperty(obj,"w",{value:456,configurable:true});
for(var k in obj){
    console.log(k,obj[k]);
}
//x 1
//y 2
//z 3  //遍历不到W
console.log(obj.w);
//456

//对象访问器（访问器属性）
//configurable  确定属性是否能删除和其他特性是否可配置
//enumerable  属性是否可枚举
//get  在读取属性时调用的函数，默认是undefined
//set  在写入属性时调用的函数，默认是undefined

var obj1={
    _name:"Lucy"
};
Object.defineProperty(obj1,"name",{
    get:function (){
        return this._name;
    }
});
console.log(obj1.name); //Lucy
obj1.name="jack"; 
console.log(obj1.name); //Lucy //只定义get特性只能读不能写

var obj2={
    _name:"Lucy",
    set name(val){this._name = val;},
    get name(){return this._name;}
};
Object.defineProperty(obj2,"name",{
    get:function (){
        return this._name+"_hihi";
    },
    set:function (val) {
        this._name = val+"_haha";
    }
});
console.log(obj2.name); //Lucy_hihi
obj2.name="jack";
console.log(obj2.name); //jack_haha_hihi

(function () {
    obj = {
        internal :{}
    };
    Object.freeze(obj);
    obj.internal.a = "aValue";
    console.log(obj.internal.a);  //aValue

    function deepFreeze(o){
        var prop,propKey;
        Object.freeze(o);
        for(propKey in o){
            prop = o[propKey];
            if(!o.hasOwnProperty(propKey) || !(typeof prop === "object") || Object.isFrozen(prop)){
                continue;
            }
            deepFreeze(prop);
        }
    }

    deepFreeze(obj);
    obj.internal.b = "bValue";
    console.log(obj.internal.b);  //undefined
})();
