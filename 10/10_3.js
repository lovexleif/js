/*
var pattern=/[a-z]oogle/i;
var str='Aoogle';
alert(pattern.test(str));

var pattern=/[a-zA-Z0-9]oogle/i; //表示匹配大小写a-zA-Z0-9
var str='oogle';
alert(pattern.test(str));

var pattern=/[^0-9]oogle/i; //非0-9的任意字符
var str='oogle';
alert(pattern.test(str));

var pattern=/^[0-9]oogle/; //这个^符号是加在/后面的而不i是[]里面的
var str='44oogle';
alert(pattern.test(str));

var pattern=/[0-9]+oogle/; //+一个或多个
var str='34554oogle';
alert(pattern.test(str));

var pattern=/\woogle/; //   \w  匹配字母数字下划线。即[a-zA-Z]
var str='8ff_oogle';
alert(pattern.test(str));

var pattern=/\Woogle/; //   \W  即[^a-zA-Z]
var str='*oogle';
alert(pattern.test(str));

var pattern=/\doogle/; //   \d 即[0-9]
var str='2445oogle';
alert(pattern.test(str));

var pattern=/\Doogle/; //   \D 即[0-9]
var str='Toogle';
alert(pattern.test(str));

var pattern=/^google$/; //   ^强制首位匹配，$强制尾匹配
var str='google';
alert(pattern.test(str));

var pattern=/^\d{5,11}$/; //  自己写的，判断是否为5-11位扣扣号
var str='123456789';   //有错误，首位不能为0
alert(pattern.test(str));

var pattern=/^[1-9]\d{4,10}$/; //  判断是否为5-11位扣扣号,首位匹配1-9
var str='1234567890';
alert(pattern.test(str));
*/
var pattern=/^[1-9]\d{4,10}$/; //  判断是否为5-11位扣扣号,首位匹配1-9
var str='1234567890';
alert(pattern.test(str));
