// Run this file in JSFiddle to check the results

const items = [
    {name: 'Bike', price: 100},
    {name: 'TV', price: 200},
    {name: 'Album', price: 10},
    {name: 'Book', price: 5},
    {name: 'Phone', price: 500},
    {name: 'Computer', price: 1000},
    {name: 'Keyboard', price: 25}
];

// filter() method
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);

// map() method
const itemNames = items.map((item) => {
    return item.name;
});
console.log(itemNames);

// find() method
const foundItem = items.find((item) => {
    return item.name === 'Book';
});
console.log(foundItem);

// forEach() method
items.forEach((item) => {
    console.log(item.name);
});

// some() method
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100;
});
console.log(hasInexpensiveItems);

// every() method
const isEveryItemEqualOrLessToThousand = items.every((item) => {
    return item.price <= 100;
});
console.log(isEveryItemEqualOrLessToThousand);

// reduce() method
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0);
console.log(total);

// includes() method
const numbers = [1, 2, 3, 4, 5, 6];
const includesTwo = numbers.includes(2);
console.log(includesTwo);

// splice() method
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed