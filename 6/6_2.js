/*
var box=1;
do {							//先运行，再判断的循环体
	alert(box);
	box++;
}while(box<=5);

var box={   //对象的属性的获取
	'name':'李炎恢',
	'age':28,
	'height':178
};
for(var x in box){
	alert(x);
}

for (var box=1;box<=10;box++){
	if(box==5)break;
document.write(box+'<br />');
}//1234

for (var box=1;box<=10;box++){
	if(box==5)continue;
document.write(box+'<br />');
}//1234678910

var box={   //对象的属性的获取
	'name':'李炎恢',
	'age':28,
	'height':178
};
var n=box.name;
var a=box.age;
var b=box.height;
alert(n+a+b);

//with语句
var box={   //对象的属性的获取
	'name':'李炎恢',
	'age':28,
	'height':178
};
with(box){  //with(box)可以将box.给省略掉
	var n=name; //这里dename相当于box.name
}alert(n);
*/