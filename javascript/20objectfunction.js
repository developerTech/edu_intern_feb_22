// literal
let calc = {
    sum: function(a,b){return a+b},
    sub:(a,b) => { return a-b}
}

calc.sum(2,5)
7
calc.sub(2,5)
-3

let dbquery = {
    find:function(table){return `Select * from ${table}`},
    insert:function(table,data){return `insert into ${table} name,city ${data.name},${data.city}`}
}

dbquery.find('student')
'Select * from student'
dbquery.insert('employee',{name:'Amit',city:'Venice'})
'insert into employee name,city Amit,Venice'



function language(name,country){
    this.name = name;
    this.county = country;
    this.greet = () => {return `Say Hi to ${name} from ${country}`}
}

//constructor notation of object
let Hindi = new language('Hindi','India');
undefined
Hindi
language {name: 'Hindi', county: 'India', greet: ƒ}
Hindi.greet()
'Say Hi to Hindi from India'

let English = new language('English','England');
undefined
English
language {name: 'English', county: 'England', greet: ƒ}
English.greet()
'Say Hi to English from England'