function human(name,city){
    this.name = name;
    this.city = city;
}

function robot(name){
    this.name = name;
    this.legs = 2;
    this.age = 10;
}

var john = new human('John','Delhi')
john
human {name: 'John', city: 'Delhi'}
john.legs

var pepper = new robot('Pepper')
pepper
robot {name: 'Pepper', legs: 2, age: 10}
pepper.city

human.prototype = new robot()

var Nikita = new human('Nikita','Paris')
human {name: 'Nikita', city: 'Paris'}city: "Paris"name: "Nikita"[[Prototype]]: robotage: 10legs: 2name: undefined[[Prototype]]: Object
Nikita.age
10
Nikita.legs
2

robot.prototype = new human()