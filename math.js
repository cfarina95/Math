#!/usr/bin/env node
var math = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);
var answer;

if(math === "add")
{
	answer = num1 + num2;
}

if(math === "subtract")
{
	answer = num1 - num2;
}

if(math === "multiply")
{
	answer = num1 * num2;
}
if(math === "divide")
{
	answer = num1 / num2;
}

console.log(answer);