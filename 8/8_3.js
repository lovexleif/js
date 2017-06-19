/*
var box=['李炎恢',28,'盐城',new Date()];
alert(box);
alert(box.toString());
alert(box.valueOf());
alert(box.toLocaleString());   //本地格式区域字符串

var box=['李炎恢',28,'盐城'];
alert(box.join('|'));   //方法运行过后返回|分割的字符串
alert(typeof box);   //原数组没任何变化


//栈方法，后进先出
var box=['李炎恢',28,'盐城'];
alert(box.push('计算机编程','江苏'));  //给数组末尾添加了N个元素，并返回最新长度
alert(box);
alert(box.pop());  //移除数组最后的元素，并且返回移除的元素

//队列方法   先进先出
var box=['李炎恢',28,'盐城'];
alert(box.push('计算机编程','江苏')); 
alert(box);
alert(box.shift());   //移除数组中开头的一个元素，并返回移除的元素
alert(box);

var box=['李炎恢',28,'盐城'];
alert(box.unshift('江苏'));  //给数组端添加一个元素，并返回数组的长度//ie有的返回不兼容，但是方法可行
alert(box);

var box=[8,2,3,4,5];
alert(typeof box.reverse());  //方法执行后返回一个逆序后的数组，原数组也被改变了
alert(box);

var box=[9,2,3,4,5];
alert(box.sort());   //从小到大排序
alert(box);

var box=[4,1,6,2,7,3,9];
alert(box.sort());   //从小到大排序
alert(box);

var box=[0,1,5,15,9];  
alert(box.sort());  //0,1,15,5,9  

function compare(value1,value2){
	if(value1<value2){
		return -1;
	}else if(value1>value2){
		return 1;
	}else{
		return 0;
	}
}
var box=[0,1,5,15,9];  
alert(box.sort(compare));  //0,1,5,9,15
alert(box.reverse());  //要想逆序，先小到大，再逆序，即从大到小

var box=['李炎恢',28,'盐城'];
var box2=box.concat('计算机编程');
alert(box2);  //李炎恢,28,盐城,计算机编程
alert(box);  //原来没有变化  李炎恢,28,盐城

var box=['李炎恢',28,'盐城','计算机编程','江苏'];
var box2=box.slice(0,1);  //这里不i是从第一个位置取三个，二世从第一个位置取到第三个位置
alert(box2);  //28,盐城
alert(box);  //原来没有变化  李炎恢,28,盐城,计算机编程,江苏

//splice删除功能
var box=['李炎恢',28,'盐城','计算机编程','江苏'];
var box2=box.splice(3,2);  //这里是从第3个位置取两个，而不是从第3个位置取到第二个位置
alert(box2);  //计算机编程,江苏
alert(box);  //原来变化  李炎恢,28,盐城

//插入功能
var box=['李炎恢',28,'盐城'];
var box2=box.splice(1,1,'计算机编程','江苏');  //从第一个位置插入，插入开始占据1号元素位置，后面的0表示不删除，如果改为1,则删除一号元素
alert(box);  //原来变化  李炎恢,28,盐城

var box=['李炎恢',28,'盐城'];  //替换28变成100
var box2=box.splice(1,1,100);
alert(box2);
alert(box);*/




