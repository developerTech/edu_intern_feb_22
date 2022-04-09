var a = true
var b = true
a+b
2
var c = false
undefined
a+c
1
10+true
11
10/false
Infinity

true is equal to 1
false is equal to 0

var a = "hii"
var b = true
a+b
'hiitrue'
a-b
NaN

var a = "true"
var b = 'true'
a+b
'truetrue'
a-b
NaN

var a = "10"
var b = "22"

a+b
'1022'
parseInt(a)
10
parseInt(a)+parseInt(b)
32

var a = "10.11"
var b = "22.34"
parseInt(a)+parseInt(b)
32
parseFloat(a)+parseFloat(b)
32.45

var a = "10"
var b = "22"
parseFloat(a)+parseFloat(b)
32
var a = "hi"
parseInt(a)
NaN

var a = "123Delhi"
var b = "Delhi123"
var c = "12Delhi34"

parseInt(a)
123
parseInt(b)
NaN
parseInt(c)
12


//es6
var a = "10.11"
var b = "22.34"
Number(a)+Number(b)
32.45

var a = "123Delhi"
Number(a)
NaN