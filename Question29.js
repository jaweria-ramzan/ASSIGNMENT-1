"use strict";
//favourite Fruit
let favourite_fruits = ["Banana", "Strawberry", "Mango"];
if (favourite_fruits.includes("Banana")) {
    console.log("You really like bananas.");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("You really like Strawberry.");
}
if (favourite_fruits.includes("Mango")) {
    console.log("You really like Mango.");
}
; //failed versions//no output
if (favourite_fruits.includes("Kiwi")) {
    console.log("You really like Mango.");
}
;
if (favourite_fruits.includes("Blueberry")) {
    console.log("You really like bananas.");
}
;
if (favourite_fruits.includes("Avocado")) {
    console.log("You really like Strawberry.");
}
;
