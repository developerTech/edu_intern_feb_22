// var firstname = "Michal";
// var lastname = "Peter";

// let sayHi = {
//     firstname:"Zoe",
//     lastname:'Lisa',
//     greet:function(){
//         return `Say Hi To ${firstname} ${lastname}`
//     }
// }

// console.log(sayHi.greet())
// Say Hi To Michal Peter

var firstname = "Michal";
var lastname = "Peter";

let sayHi = {
    firstname:"Zoe",
    lastname:'Lisa',
    greet:function(){
        return `Say Hi To ${this.firstname} ${this.lastname}`
    }
}

console.log(sayHi.greet())
// Say Hi To Zoe Lisa