/*var box=3>2;//关系运算符大多返回的是一个布尔值
alert(box);

var box='3'>22;//如果只有一个字符串，会将铊转换成数值，再比较
alert(box); //false

ar box='3'>'22';//如果两个都是数值字符串，那么会进行第一个字符的比较，3>2
alert(box); //true

var box='1233'>'22';//如果两个都是数值字符串，那么会进行第一个字符的比较，3>2
alert(box);//false

var box=2>{
	toString:function(){
		return 1;
	}
};//和对象比较
alert(box);//true

var box='a'>'b'; //都是字符串，比较Assic码
alert(box);//false

var box=1&&{}; //第一个操作数是对象，则返回第二个操作数，如果第二个操作数是对象，则第一个操作数返回true，才返回第二个操作数，否则返回false
alert(box);//false

var box=null&&5>4; //有一个操作数是null或者是undefined,则返回null或者undefined
alert(box);

var box=3>4&&undefined;//如果第一个操作数是false，则不执行第二个操作符。
alert(box);

var height;
var age=1;
var box=height||age;  //赋值操作
alert(box);


//！先转型再取反
var box=!!{};   //boolean和!!转型是一样的结果
alert(box);
*/
