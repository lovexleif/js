/*
//对象包含哪些属性
//1.属性（字段）
//2.方法（函数）

var box=new Object();
box.name='liyanhui'
box.age=28;
alert(box.age);

var box={};   //字面量方式创建的对象
alert(box);

var box={  //用字面量方式封装数据
	name:'李炎恢',
	age:28
}
alert(box.age);

var box={  //用字面量方式封装数据
	'name':'李炎恢', //属性可以用引号括起来
	'age':28
}
alert(box.age);

var box={};  //字面量方式创建对象
box.age=18;  //传统方式赋值
alert(box.age);

var box={};  //字面量方式创建对象
box.age=18;  //传统方式赋值
alert(box.age);
alert(box['age']);  //数组方式输出，必须加单引号

function objrun(){
	return 123;
}

var box=new Object();
box.name='李炎恢';
box.age=18;  
box.run=objrun;    //有点复杂
alert(box.run());

var box={  
	'name':'李炎恢', 
	'age':28,
	run:function (){     //匿名函数
		return '123';
	}
}
alert(box.run());   //调用方法（函数），如果没有圆括号，会打印代码，有圆括号才会打印返回值

var box={  
	'name':'李炎恢', 
}
alert(box.name);  //李炎恢
delete box.name;  //删除属性
alert(box.name); //undefined


function box(name,age,height,address,love){
	alert(name);
	alert(age);
}
box('李炎恢',28,178,'江苏盐城','打球');

function box(obj){
	if(obj.name!=undefined) alert(obj.name);
	if(obj.love!=undefined) alert(obj.love);
	if(obj.age!=undefined) alert(obj.age);
	if(obj.height!=undefined) alert(obj.height);
	if(obj.address!=undefined) alert(obj.address);
}
var obj={
	name:'李炎恢',
	age:28,
	height:178,
	address:'江苏盐城'
}
box(obj);

function box(obj){
	if(obj.name!=undefined) alert(obj.name);
	if(obj.love!=undefined) alert(obj.love);
	if(obj.age!=undefined) alert(obj.age);
	if(obj.height!=undefined) alert(obj.height);
	if(obj.address!=undefined) alert(obj.address);
}

box({   //匿名对象
	name:'李炎恢',
	age:28,
	height:178,
	address:'江苏盐城'
});

*/
function box(obj){
	if(obj.name!=undefined) alert(obj.name);
	if(obj.love!=undefined) alert(obj.love);
	if(obj.age!=undefined) alert(obj.age);
	if(obj.height!=undefined) alert(obj.height);
	if(obj.address!=undefined) alert(obj.address);
}

box({   //匿名对象
	name:'李炎恢',
	age:28,
	height:178,
	address:'江苏盐城'
});
