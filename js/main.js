// var testOne = "What kind of variable am I?"; //string
// var testTwo = 256; //number
// var testThree = false; //boolean
// var testFour = 'true' //string
// var testFive = '128' //string
// var testSix = "";  //string

// var testOne = "hello" + "there"; //hellothere = string
// var testTwo = "100" + 28; // 10028 = string
// var testThree = true + 3; // 4
// var testFour = 'false' + 5; // false5 =string
// var testFive = '128' - 3; //  minus turns string into a number = 125
// var testSix = "" * 9; //  0
// var testSeven = "zero" - 1 //NaN (not a number; error)
// var testEight = "five".length //4
// var testNine = "five" [0] + "ever" //fever
// var testTen = "a" > "b" //false
// var testTenagain = "a" < "b" //true; it's alphabetical
// var testEleven = "number".lenth < 7 //true
// var testTwelve = "12" == 12 //false

// write a function that returns a length of any string

function lengthOfString(someString) {
	return someString.length;
}

// write a function that loops through every character 
// of a string and logs it to the console		

function logChars(anyString) {
	for(var i = 0; 1 < anyString.length; i++) {
		console.log(anyString[i])
	}
}		