/*
var box=250;   //十进制整型
alert(box);

var box=077;   //八进制整型，零开头，按照十进制输出是56
alert(box);     //前导必须是0，八进制序列（0-7）

var box=079;   //无效八进制，按照十进制输出是79
alert(box);

//十六进制字面量前面两位必须是0x,后面是（0-9 及A-F）
var box1=0xA,  //十六进制，10
       box2=0x1f;     //十六进制，31
alert(box1+"-"+box2); 

var box=.80;   //浮点型,有效但不推荐
alert(box);

//浮点型需要的空间是整型的两倍，所以会自动将能转换的转换成整型
var box=8.0;   //自动转换成整型
alert(box);

var box=4.12e6;   //科学计数法
alert(box);

var box=0.0000000412;   //科学计数法
alert(box);  //输出4.12e-8


//虽然浮点数值的最高精度是17位小数，但算术运算中可能会不精确。
alert(0.1+0.2);//输出0.30000000000000004
//不要用浮点数做精确判断

alert(Number.MIN_VALUE);//最小值
alert(Number.MAX_VALUE);//最大值

var box=-1000e1000;//超过范围现实无穷
alert(box);

alert(Number.POSITIVE_INFINITY);
alert(Number.NEGATIVE_INFINITY);

var box=100e1000;//是否超过范围
alert(isFinite(box));

var box=0/0 ;
alert(box);//NaN 
var box=12/0;//Infinity
alert(box);
var box=12/0*0;//NaN
alert(box);

alert(Number.NaN);//NaN

var box=NaN+1;
alert(box);

alert(NaN==NaN);//false  不相等

alert(isNaN('LEE'));//true  'lee'不能转换成数值
alert(isNaN(true));//false true可以转换成1

isNaN()函数也适用于对象，在带调用isNaN()函数过程
中，首先会调用valueof()方法，然后确定返回值是
否能够转化换成数值，如果不能，
则基于这个返回值再调用toString()方法，再测试返回值。

//如果对象的toString方法能够返回数值，那么就不是NaN了。
var box={
	toString:function(){
		return "lee";
	}
}
alert(isNaN(box));

alert(Number(true));//1
alert(Number(25));//25
alert(Number(null));//0
alert(Number(undefined));//NaN

alert(Number(068346));//68346
alert(Number(066346));//27878---前导0，没有大于八的数值，默认为八进制。
alert(Number('0457'));//只包含数值的字符串，会直接转换成十进制数值，如果包含前导0，即自动去掉。
alert(Number(08.80));//8,8
alert(Number(''));//0
alert(Number('lee'));//NaN
alert(Number('lee124'));//NaN

var box={
	toString:function(){
		return null;
	}
};
alert(Number(box));

//由于Number()函数在转换字符串时比较复杂且不够合理，因此在处理整数的时候更常用的时paseInt().
//parseInt();只能转换字符串
alert(parseInt('456lee'));//456
alert(parseInt('lee3437294'));//NaN
alert(parseInt('12LEE3437294'));//12
alert(parseInt('56.12'));//56
alert(parseInt(""));//NaN

alert(parseInt(0xA));//10,十六进制，10
alert(parseInt('070'));//十进制，70
alert(parseInt(070));//八进制。56
alert(parseInt("0xAlee"));//10十六进制,lee被自动过滤掉了

alert(parseInt('070',8)); 可以是2，8，10，16
alert(parseInt('1f',16)); //16进制，省略前导，输出31
alert(parseInt('70',8)); //8进制，省略前导，输出56

alert(parseFloat('132.4.5'));//132.4
alert(parseFloat('0132.40'));//132.4
alert(parseFloat('1.2e5'));//120000
*/












