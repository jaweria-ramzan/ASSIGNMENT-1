//Sandwiches
function sandwich(...items: string[]) {
    console.log("Order Summary: ");
console.log("Bread:",items[0]);
console.log("Meat:",items[1]);
console.log("Vegetables:",items[2]);
console.log("Cheese:",items[3]);
console.log("Sauce:",items.slice(4));
};
sandwich("White","Chicken","Tomato","Mozerella","Mayonnaise");
sandwich("White","Chicken","Tomato","Cheddar","Chicken Spread","Ketchup");
sandwich("White","Chicken","Cucumber","Feta","Ketchup");