/*
var box=100;
++box;
alert(box);

var box=100;
var age=++box; //box先累加到101，然后赋值给age
alert(box+"-"+age); //box=101 //age=101

var box=100;
var age=box++; //box先赋值给age,然后累加到101，
alert(box+"-"+age); //box=101 //age=101

var box='89';
alert(typeof(box));
box++;                         //++如果对数字字符串，可以自动转换成数值
alert(typeof(box));

var box='ab';
box++;                         //不是数值，输出NaN
alert(box);

var box=false;
box++;                         //0+1
alert(box);

var box={
	valueOf:function(){
		return 123;
	}
};
box++;                        
alert(box); //124

var box=100;
box++;     //正数，负数+box正数，-box就是负数                   
alert(box); 

var box='89';
+box;     //          加号有个自动转型的功能        
alert(box); 

var box='89';
+box;     //          加号有个自动转型的功能        
alert(box); 

alert(1+NaN);//只要有一个NaN就是NaN

var box=100+'100'; //这个时候的加号就是字符串连接符，而不是加法运算符，只要其中有一个字符串，就是字符串连接符，而不是加法运算符
alert(box);

var box='您的年龄是：'+10+20;
alert(box); //您的年龄是：1020

var box=10+20+'您的年龄是：';
alert(box); //30您的年龄是：

var box='您的年龄是：'+(10+20);//括号强制优先级
alert(box); //您的年龄是：30

var box=10+{};  //10+{}     string=number+object
alert(box);   

var box=10+{
	toString:function(){
		return 20;
	}
};  //返回是什么类型就是什么类型
alert(box);  //number

var box=100-'70'; //减法没有连接符，
alert(box);

var box=100/'';//转成了0，除数为零；
alert(box);//Infinity

var box=100/{
	toString:function(){
		return 123;
	}
}
alert(box);
*/
var box=10%true;
alert(box);















