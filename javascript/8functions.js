var a = 10;
var b = 20;
a+b
30


function nameoffunction(parameters){
    return output
}

function add(a,b){
    return a+b
}

add(1,2)
3
add(4,78)
82
add('Hii','JavaScript')
'HiiJavaScript'


function add(a,b,c){
    return a+b+c
}
add(1,4,5)
10
add(1,2)
NaN
add(1,2,3,4)
6

function isEven(userInput){
    let output;
    if(userInput%2 == 0){
        output = `Number ${userInput} is even`
    }else{
        output = `Number ${userInput} is odd`
    }
    return output
}

isEven(4)
VM907:3 Number 4 is even
undefined
isEven(98)
VM907:3 Number 98 is even
undefined
isEven(99)
VM907:5 Number 99 is odd

isEven(4)
'Number 4 is even'
isEven(9)
'Number 9 is odd'

//es5
function add(a,b){
    return a+b
}

//es6
let add = (a,b) => { return a+b }

add(2,3)
5

/////////
function add(...args){   ////rest
    let out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
    return out
}

add(1,2,5,7)

///////////////

var input = [1,2,3,5];

function add(a,b,c,d){
    return a+b+c+d
}

add(input)
'1,2,3,5undefinedundefinedundefined'
add(...input) ///spread
11


if ... is used as function defination it is rest
if ... is used in calling function it is spread


var input = [1,2,3,5];
function add(...args){   ////rest
    let out = 0;
    for(data of args){
        //out = out+data
        out += data
    }
    return out
}
add(...input) //spread

var a  = ['Delhi',"Mumbai","Amsterdam"]
var b = [1,2,3]
a+b
'Delhi,Mumbai,Amsterdam1,2,3'

a.concat(b)
(6) ['Delhi', 'Mumbai', 'Amsterdam', 1, 2, 3]

var a  = ['Delhi',"Mumbai",...b,"Amsterdam"]
['Delhi', 'Mumbai', 1, 2, 3, 'Amsterdam']



function add(a,b){
    return a,b
}

add(1,2)
2

function add(a,b){
    return b,a
}

add(1,2)
1

function add(a,b){
    let out = [a,b]
    return out
}
add(1,2)

[1,2]