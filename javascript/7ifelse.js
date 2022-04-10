if(condition){

}else{

}
//
var a = 10
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 10 is even

var a = 11
if(a%2 == 0){
    console.log(`Number ${a} is even`)
}else{
    console.log(`Number ${a} is odd`)
}
Number 11 is odd


var name = "John";
if(name == "John"){
    console.log(`Hi ${name} you are admin`)
}else if(name == "Bhumika"){
    console.log(`Hi ${name} you are super admin`)
}else if(name == "Aakash"){
    console.log(`Hi ${name} you are user`)
}else{
    console.log(`Hi ${name} you are unkown`) 
}
Hi John you are admin

////////
Ternary operator
//////

condition ? if condition pass : if condition fail

var a = 10
a > 10 ? "Hiii":"Biee"
'Biee'
var a = 10
a < 10 ? "Hiii":"Biee"
'Biee'
var a = 10
a == 10 ? "Hiii":"Biee"
'Hiii'

var a = 10
a > 10 ? a+1:a-1

var a = 10
a > 10 ? a+1:a-1
9
var a = 10
a == 10 ? a+1:a-1
11