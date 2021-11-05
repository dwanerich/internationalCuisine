class Cuisine {
    constructor(name, ingredients, country) {
        this.name = name;
        this.ingredients = ingredients;
        this.country = country;
    }
    phrase() {
        console.log(`${this.name} consists of ${this.ingredients} originating from ${this.country}.`)
    }
}
let theTotal = [];
pizza = new Cuisine('pizza')
pizza.ingredients = new Array('cheese', 'dough', 'tomato sauce')
pizza.country = 'italy'
sushi = new Cuisine('sushi')
sushi.ingredients = new Array('rice', 'raw fish', 'ginger', 'wasabi', 'sea-wraps')
sushi.country = 'japan'