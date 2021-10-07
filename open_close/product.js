let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product {
    constructor(name, color, size) {
        this.name = name;
        this.color = color;
        this.size = size;
    }    
}

class ProductFillter {
    filterByColor(products, color){
        return products.filter(p => p.color === color);
    }
}

let apple = new Product('Apple', Color.red, Size.large);
let cabbage = new Product('Cabbage', Color.red, Size.medium);
let onion = new Product('Onion', Color.green, Size.small);

let products = [apple, cabbage, onion];

let pf = new ProductFillter();

console.log(`green products (old)`);

for (let p of pf.filterByColor(products, Color.green)){
    console.log(`* ${p.name} is green`);   
}
