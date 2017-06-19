/*var box=new RegExp('Box');  //第一个参数是模式字符串
alert(box);                  //  /Box/两个反斜杠是正则表达式的字面量表示法

var box=new RegExp('Box','gi');  //第二个参数可选，模式修饰符 i|g|m
alert(box);

var box=/Box/;       //使用字面量方式的正则
alert(box);

var box=/Box/ig;       //使用字面量方式的正则,带修饰符
alert(box);


var pattern=new RegExp('Box');  //模式
var str='box';  //字符串
alert(pattern.test(str));  //返回的是false.大小写不一致

var pattern=new RegExp('Box','i');  //模式,区分大小写
var str='box';  //字符串
alert(pattern.test(str));  //返回的是true.大小写不一致

var pattern=/Box/;   //字面量的方式
var str=/box/;
alert(pattern.test(str));   //true 

alert(/BOX/i.test(/box/));  //true 一句话匹配

var str1='box';
var str2='box';
alert(str1==str2);   ///字符串的比较方式

var pattern=/Box/i;  //不区分大小写匹配
var str='This is a box';   //一句话英文
alert(pattrn.test(str));   //字符串中是否包含不区分大小写的box
*/
var pattern=/Box/i;  //不区分大小写匹配
var str='box';   //一句话英文
alert(pattern.exec(str));    //返回的是数组，有就返回数组的值，没有就返回NaN