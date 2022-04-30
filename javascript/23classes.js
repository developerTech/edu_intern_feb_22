class language{
    // all the declaration will happen inside constructor
    constructor(name,country){
        this.name = name;
        this.country = country;
    }

    greet = () => {return `Say Hi to ${this.name} from ${this.country}`}
}

let france = new language('French','France')
france
language {name: 'French', county: 'France', greet: ƒ}
france.greet()
'Say Hi to French from France'