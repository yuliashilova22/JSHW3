"use strict";

//Task 1

function reverse(string) {
	var arr = [];
	for (var i = (string.length - 1); i >= 0; i--) {
		arr.push(string[i]);
	}
	var reverseStr = (arr.toString()).replace(/\,/g, '');
	return reverseStr;
}

var str = prompt('Input your string:', '');
alert(reverse(str));


//Task 2

function camelize(string) {
	function replaceLower(str, offset, s) {
		return str.toUpperCase();
	}
	var result = string.replace(/^[a-zа-я]|[a-zа-я]\s+[a-zа-я]|[a-zа-я]$/g, replaceLower);
	return result;
}

var str = prompt('Input your string:', '');
alert(camelize(str));

//Task 3

function isWeekEnd(date) {
	var isFree = date.getDay() == (0 || 6) ? 'Выходной!' : 'Работаем дальше...';
	return isFree;
}

var date = new Date(2018, 2, 8);
alert(isWeekEnd(date));

//Task 4 

function runJS(string) {
	try {
		eval(string);
		return true;
	} catch (er) {
		return er.message;
	}
}

var codeStr = prompt('Input JS code:', '');
alert(runJS(codeStr));