function FirstReverse(str){
	var strArray = str.split("");
	strArray.reverse();
	str = strArray.join("");
	return str;
}

var string1 = "Ted Kietzman";
var string2 = FirstReverse(string1);
console.log(string1);
console.log(string2);