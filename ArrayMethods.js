const products = [
  {
    name: 'Laptop',
    price: 999.99,
    stock: 5,
    category: 'electronics'
  },
  {
    name: 'Smartphone',
    price: 699.99,
    stock: 10,
    category: 'electronics'
  },
  {
    name: 'Headphones',
    price: 299.99,
    stock: 15,
    category: 'accessories'
  },
  {
    name: 'Speaker',
    price: 149.99,
    stock: 20,
    category: 'electronics'
  },
  {
    name: 'T-Shirt',
    price: 29.99,
    stock: 50,
    category: 'clothing'
  },
  {
    name: 'Sneakers',
    price: 89.99,
    stock: 30,
    category: 'clothing'
  },
  {
    name: 'Hat',
    price: 45.99,
    stock: 25,
    category: 'accessories'
  },
  {
    name: 'Jacket',
    price: 129.99,
    stock: 20,
    category: 'clothing'
  },
  {
    name: 'Gloves',
    price: 69.99,
    stock: 35,
    category: 'accessories'
  },
  {
    name: 'Scarf',
    price: 54.99,
    stock: 28,
    category: 'clothing'
  },
  {
    name: 'Belt',
    price: 79.99,
    stock: 18,
    category: 'accessories'
  },
  {
    name: 'Watch',
    price: 159.99,
    stock: 12,
    category: 'accessories'
  },
  {
    name: 'Pants',
    price: 79.99,
    stock: 40,
    category: 'clothing'
  },
  {
    name: 'Dress',
    price: 109.99,
    stock: 25,
    category: 'clothing'
  },
  {
    name: 'Shirt',
    price: 39.99,
    stock: 60,
    category: 'clothing'
  },
  {
    name: 'Sweater',
    price: 89.99,
    stock: 35,
    category: 'clothing'
  },
  {
    name: 'Tie',
    price: 74.99,
    stock: 15,
    category: 'accessories'
  },
  {
    name: 'Necklace',
    price: 99.99,
    stock: 20,
    category: 'accessories'
  },
  {
    name: 'Earrings',
    price: 64.99,
    stock: 25,
    category: 'accessories'
  },
  {
    name: 'Ring',
    price: 59.99,
    stock: 30,
    category: 'accessories'
  },
];


// Filters
// The five filters are: 1. Category = Electronics, 2. Price > 100, 3. Stock < 20, 4. Name contains "Laptop", 5. Name does not contain "Watch"
const electronics = products.filter(product => product.category === 'electronics');
const above1000 = products.filter(product => product.price > 100);
const below20 = products.filter(product => product.stock < 20);
const laptop = products.filter(product => product.name.includes('Laptop')); // .includes() is also an array method
const watch = products.filter(product => !product.name.includes('Watch'));

console.log(electronics);
console.log(above1000);
console.log(below20);
console.log(laptop);
console.log(watch);


// Maps
const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
const productStocks = products.map(product => product.stock);

console.log(productNames);
console.log(productPrices);
console.log(productStocks);


// Find
// Find the price of a hat
const hat = products.find(product => product.name === 'Hat');
const hatPrice = hat? hat.price : 0; // if hat is not found, return 0
console.log(hatPrice);

// ForEach
const lowStockWarnThreshold = 20;
console.log("Low Stock Products:")
products.forEach(product => {
    console.log(
        product.stock < lowStockWarnThreshold ?
        `${product.name} is low on stock` :
        ''
    )
});


// Some
const hasProductWithLowStock = products.some(product => product.stock < lowStockWarnThreshold);
console.log(hasProductWithLowStock? "There are products with low stock" : "There are no products with low stock");


// Reduce
const productCount = products.reduce((count, product) => {
  count++;
  return count; 
}, 0);

console.log(`There are ${productCount} products in total.`);