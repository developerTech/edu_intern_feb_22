class geo{
    constructor(){
        this.lat = 70.11;
        this.long = 32.98;
    }

    test = () => { return 'hiii'}
    
}

class language extends geo {
    // all the declaration will happen inside constructor
    constructor(name,country){
        super()
        this.name = name;
        this.country = country;
    }

    age = 10

    greet = () => {return `Say Hi to ${this.name} from ${this.country}`}
}

let france = new language('French','France')
// france.test()
console.log(france)