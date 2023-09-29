"use strict";
//Sandwiches
//Method 1
function sandwich(...items) {
    console.log("Order Summary: ");
    console.log("Bread:", items[0]);
    console.log("Meat:", items[1]);
    for (console.log("Cheese:", items[2]); console.log("Vegetables:", items[3]); console.log("Sauce:", items[6]))
        ;
}
;
sandwich("White", "Chicken", "Tomato,Cucumber", "Mozerella", "Mayonnaise");
sandwich("White", "Chicken", "Tomato", "Cheddar", "Chicken Spread,Ketchup");
sandwich("White", "Chicken", "Cucumber", "Feta", "Ketchup");
/*//ignore
function sandwich(...items: string[]) {
    console.log("Order Summary: ");
    console.log(items);
};
sandwich("Bread","Chicken","Tomato","Cucumber","Mozerella","Mayonnaise");
sandwich("Bread","Chicken","Tomato","Cheddar","Chicken Spread","Ketchup");
sandwich("Bread","Chicken","Cucumber","Feta","Ketchup");*/
//Method#2
/*function sandwich(...items: string[]) {
    console.log("Order Summary: ");
console.log("Bread:",items[0]);
console.log("Meat:",items[1]);
console.log("Cheese:",items[2]);
console.log("Vegetables:",items[3]);
console.log("Sauce:",items.slice(4));
};
sandwich("White","Chicken","Tomato,Cucumber","Mozerella","Mayonnaise");
sandwich("White","Chicken","Tomato","Cheddar","Chicken Spread","Ketchup");
sandwich("White","Chicken","Cucumber","Feta","Ketchup");*/ 
