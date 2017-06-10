/*
var box=100;
var age=100;
{						//用花括号包含的语句集合，叫复合语句，单位一个
						//复合语句，我们一般叫代码块
						//一个花括号，表示一个复合语句，处理时候，可以当作一条单行语句来处理
	var height=100;
	var width=300;
}

var box=100;
if(box>50)alert(box);  //if里面的括号返回结果转成布尔值为真，则执行后面的一条语句，否则不执行。

var box=20;  //if里面的括号返回结果转成布尔值为假，则不执行后面的一条语句//第二条语句和if无关。
if(box>50)
	alert(box);
alert('不管你的if是true还是false,我都会执行');

var box=10;  
if(box>50){  //这是一条复合语句，被当作一条语句来对待了，代码块的功能体现出来了。
	alert(box);
alert('不管你的if是true还是false,我都会执行');
}

var box=10;
if(box>50){
	alert(box);
alert('不管你的if是true还是false,我都会执行');
}

var box=1;
switch(box){//swutcg(box)box就是要比较的变量
	case 1:  //case 1:相当于if语句里的(box==1),如果box是1的话
		alert('one');
		break;//break中途退出，防止穿透,很重要
	case 2:  //if(box==2)
		alert('2');
		break;
	case 3:
		alert('three');
		break;
	default:
		alert('出错');  //相当于if语句里的else
}
*/
