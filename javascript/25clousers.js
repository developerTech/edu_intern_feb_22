// global scope
// local scope

// var a = 10
// function add(){  // clouser
//     var b = 20
//     return a+b
// }

// console.log(">>>add>>>",add())
// console.log(">>>a>>>",a)
// console.log(">>>b>>>",b)

var a = 10
for(i=0;i<5;i++){
    let b = 20
    console.log(">>>add>>>",a+b+i)
}

console.log(">>>a>>>",a)
console.log(">>>b>>>",b)