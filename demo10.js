//全局作用域
var a = 10,        
    b = 20;
//fn作用域
function fn(){
  var a = 100,
      c = 200;  //c可以在fn和bar中被访问到
  //bar作用域
  function bar(){
    var a = 500,  //bar中访问a时为500（覆盖性）
        d = 600;  //bar中访问c时为600（链式关系）
    console.log(a,b,c,d);
  }
  bar();
}
fn();
// 500 20 200 600

//(静态性)词法作用域不会被函数从哪里调用等因素影响，与调用形式无关
var name = "Jack";
function echo() {
    console.log(name);
}
echo(); //Jack

var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();  //Jack

{
    var a = 4;
}
console.log(a); //4 ES5无块作用域

console.log("小明回家");
var xx = ["书桌","书包","铅笔盒"];//小明家中
console.log("在家-做作业中 1 ...全局上下文");
function goToStore(){
    var yy = ["文具店老板","出售的文具"];//文具商店中
    console.log("在文具店-买文具中  ...函数1上下文");
    console.log("在文具店-买文具中  ...函数1上下文 发现没带钱");
    goToBank();
    console.log("在文具店-买好文具  ...函数1上下文 返回家");
}
function goToBank(){
    var zz = ["银行职员","柜员机"];//银行中
    console.log("在银行-取钱 ...函数2上下文 返回文具店");
}
console.log("在家-做作业中 2 ...全局上下文 发现笔没油了");
goToStore();//笔没油了，去商店买笔
console.log("在家-继续做作业...全局上下文");
//小明回家
//在家-做作业中 1 ...全局上下文
//在家-做作业中 2 ...全局上下文 发现笔没油了
//在文具店-买文具中  ...函数1上下文
//在文具店-买文具中  ...函数1上下文 发现没带钱
//在银行-取钱 ...函数2上下文 返回文具店
//在文具店-买好文具  ...函数1上下文 返回家
//在家-继续做作业...全局上下文
