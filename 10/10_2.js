/*var pattern=/Box/i;   //没有开启全局
var str='This is a box!That is a Box';
alert(str.match(pattern));  //匹配到第一个字符串返回数组

var pattern=/Box/i;  
var str='This is a box!That is a Box';
var a=str.match(pattern);  
alert(a[0]);

var pattern=/Box/ig;   //开启全局
var str='This is a box!That is a Box';
alert(str.match(pattern));  //把所有匹配的字符串组成数组，返回

var pattern=/Box/i;    
var str='This is a box!That is a Box';
alert(str.searh(pattern));    //返回的第一个匹配的位置 ,招不到返回-1

var pattern=/Box/i;      //没有开启全局
var str='This is a box!That is a Box';
alert(str.replace(pattern,'Tom'));    //This is a Tom!That is a Box   只替换第一个，返回替换后的字符串

var pattern=/Box/ig;      //开启全局
var str='This is a box!That is a Box';
alert(str.replace(pattern,'Tom'));    //This is a Tom!That is a Tom   替换所有匹配的

var pattern=/!/i;   
var str='This is a box!That is a Box!';
alert(str.split(pattern));  
*/
 
var pattern=/google/i;
var str=/This is a google/;
var a=pattern.test(str);
alert(a);