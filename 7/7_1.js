/*
function box(){
	alert('我只有被调用才可以执行');
}

box();

function box(name,age){
	alert('你的姓名是：'+name+'你的年龄是：'+age);
}
box('liyanhui','18');

function box(){
	return '我只哟被调用才可以执行';  //return表示把这句话字符串返回回来
}
box();  //调用，相当于box()='我只有被调用才可以执行'
alert(box());

function box(){
	return '我只哟被调用才可以执行';  //return表示把这句话字符串返回回来
}
var strinfo=box('mayun',40);
alert(strinfo);

function box(){
	return 10; //当函数遇到第一个RETURN，就会终止函数继续执行下去
	return 100;
}

alert(box());

function box(num){
	if(num<5) return num; //当函数遇到第一个RETURN，就会终止函数继续执行下去
	return 100;
}

alert(box(5));

function box(){
	return arguments[0]+'|'+arguments[1]+'|'+arguments[2]+arguments[3];
}

alert(box('李炎恢','28','计算机')); //李炎恢|28|计算机undefined

function box(){
	return arguments.length;
}
alert(box('李炎恢','28','计算机')); //3

function box(){
	sum=0;
	for(var i=0;i<arguments.length;i++){
		sum+=arguments[i];
	}
	return sum;
}
alert(box(2,5,6,7,3,14,55));

function box(num){
	return num+200;
}
function box(num){ //第二个函数把第一个函数覆盖掉了，不具备重载功能
	return num+100;
}

//ECMAscript中的函数，没有像其它高级语言那种函数重载功能。
alert(box(50));//150 //重载就是根据参数，选择相同函数名而参数不同的函数
*/
