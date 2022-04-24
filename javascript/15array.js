Array is a collection of homogenious datatype
as well as hetrogenious datatype

let a = ["Hii","Test",'Ok',"Bie",'Hello'] >>>> Array of string
let b = [3,5,456,4.46,46,2,7543,24] >>>> Array of Number
let c = [true,false,false,true,true] >>>>> Array of boolean

typeof(a)
'object'
a[0]
'Hii'
a[1]
'Test'

let test = [1,"Hii",false,"Test",3,6,'Ok',true,true,"Bie",'Hello']
let city = ["Delhi","Mumbai","London","Venice"]
undefined
city[0]
'Delhi'
city.length
4
city.push('Amsterdam')
5
city
(5)['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam']
city.push('Helsinki')
6
city
(6)['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']

city = ['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
(6)['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
city.pop()
'Helsinki'
city

['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam']
city.pop(2)
'Amsterdam'
(4) ['Delhi', 'Mumbai', 'London', 'Venice']
city.pop(1000000)
'Venice'
city =  ['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
(6) ['Delhi', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
city.shift()
'Delhi'
city.unshift('Dubai')
6
city
(6) ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']

push > add in the end of Array
pop > remove last value of Array
shift > remove first value of Array
unshift > add as the first value of array

city = ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
(6) ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
city.slice(1)
(5) ['Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']
city.slice(2,4)
(2) ['London', 'Venice']
city.slice(0,4)
(4) ['Dubai', 'Mumbai', 'London', 'Venice']
city.slice(0,-1)
(5) ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam']
city
(6) ['Dubai', 'Mumbai', 'London', 'Venice', 'Amsterdam', 'Helsinki']

city.splice('index number','delete count',value)

//index number 2 remove 1 value
city.splice(2,1)
['London']

//index number 3, no value removed but added 2 values
city.splice(3,0,'Indore','Pune')
[]
city
(7) ['Dubai', 'Mumbai', 'Venice', 'Indore', 'Pune', 'Amsterdam', 'Helsinki']


//index number 4, removed 3 value and add 1 values
city.splice(4,2,'Nice')
(2) ['Pune', 'Amsterdam']
city
(6) ['Dubai', 'Mumbai', 'Venice', 'Indore', 'Nice', 'Helsinki']

let city = ['Dubai', 'Mumbai', 'Venice', 'Indore', 'Nice', 'Helsinki']

city.indexOf('Dubai')
0
city.indexOf('Nice')
4
city.indexOf('Delhi')
-1
city.indexOf('Venice')
2
city.indexOf('Amsterdam')
-1

let a = "Hii"
let b = ["Hi","Hello"]

Array.isArray(a)
false
Array.isArray(b)
true

var a = ['a','b','c',1,2]
var b = [3,4,'f']
a+b
'a,b,c,1,23,4,f'
a.concat(b)
['a', 'b', 'c', 1, 2, 3, 4, 'f']


let a = "https://github.com/Aakashdeveloper/NodeSample"

a.split('/')

(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'NodeSample']
let b = a.split('/')
b
(5) ['https:', '', 'github.com', 'Aakashdeveloper', 'NodeSample']
b[b.length-1]
'NodeSample'
let a = "https://github.com/Aakashdeveloper/edu_intern_april_22"
let b = a.split('/')

b[b.length-1]
'edu_intern_april_22'


let a = "I am doing Js"

a.split(' ')
(4) ['I', 'am', 'doing', 'Js']


var a = "Javascript" 

a.split('')
(10) ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
var a = ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
undefined
a.toString()
'J,a,v,a,s,c,r,i,p,t'
a.toString().replace(/,/g,'')
'Javascript'


var myarray = ['Dubai', 'Mumbai',['Red',['Audi','Merc','Bmw'],'Yellow','Green','Blue'], 'London', 'Venice', 'Amsterdam']

var myarray = ['Dubai', 'Mumbai',['Red',['Audi','Merc','Bmw'],'Yellow','Green','Blue'], 'London', 'Venice', 'Amsterdam']

myarray[0]
'Dubai'
myarray[2]
(5) ['Red', Array(3), 'Yellow', 'Green', 'Blue']
myarray[2][0]
'Red'
myarray[2][2]
'Yellow'
myarray[2][1]
(3) ['Audi', 'Merc', 'Bmw']
myarray[2][1][0]
'Audi'
myarray[2][1][1]
'Merc'
