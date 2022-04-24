for
while
do while
for of
for in (object)
///////////////////////////
// iterarte over the array and can generate series of value

for(i=0;i<5;i++){
    console.log(i)
}
0
1
2
3
4

var city = ['Dubai', 'Mumbai', 'Venice', 'Indore', 'Nice', 'Helsinki']
for(i=0;i<city.length;i++){
    console.log(city[i])
}

Dubai
Mumbai
Venice
Indore
Nice
Helsinki

var myarray = ['Dubai', 'Mumbai',['Red','Yellow','Green','Blue'], 'London', 'Venice']
for(i=0;i<myarray.length;i++){
    console.log(myarray[i])
}


for(i=0;i<myarray.length;i++){
    if(Array.isArray(myarray[i])){
        for(j=0;j<myarray[i].length;j++){
            console.log(myarray[i][j])
        }
    }else{
        console.log(myarray[i])
    }
}

//while
var i = 10;
while(i<5){
    console.log(i);
    i++
}

///do while
var i = 10;
do{
    console.log(i);
    i++
}
while(i<5)

/////////
for of
///////

var city = ['Dubai', 'Mumbai', 'Venice', 'Indore', 'Nice', 'Helsinki']
for(mycity of city){
    console.log(mycity)
}


var myarray = ['Dubai', 'Mumbai',['Red','Yellow','Green','Blue'], 'London', 'Venice']
for(mycity of myarray){
    if(Array.isArray(mycity)){
        for(color of mycity){
            console.log(color)
        }
    }else{
        console.log(mycity)
    }
}