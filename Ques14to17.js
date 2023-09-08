"use strict";
//Question#14
//Guest List
let guestList = ["Mr.Adnan", "Mr.Ahmad", "Mr.Afaan"];
let msg1 = "! You're warmly invited for Dinner today at 8:00pm.";
console.log(guestList[0] + msg1);
console.log(guestList[1] + msg1);
console.log(guestList[2] + msg1);
let messageA = "Mr.Afaan can't make the Dinner.";
console.log(messageA);
//Question#15
//Changing Guest List
const removeGuest = guestList.pop(); //Removed Mr.Afaan
guestList.push("Mr.Arslan"); //added Mr.Arslan
console.log(guestList[0] + msg1);
console.log(guestList[1] + msg1);
console.log(guestList[2] + msg1);
let messageB = "Fortunately, We found a bigger dinner table.";
console.log(messageB);
//Question#16
//More Guests//as just found a bigger Dinner Table
guestList.unshift("Miss Jaweria"); //added a new guest in the begining of the array
guestList.splice(2, 0, "Miss Sumaiya"); //added a new guest in the middle of the array
guestList.push("Miss Rimsha"); //added a new guest in the end of the array//array.push() appends a new element in the array at the end of it
console.log(guestList[0] + msg1);
console.log(guestList[1] + msg1);
console.log(guestList[2] + msg1);
console.log(guestList[3] + msg1);
console.log(guestList[4] + msg1);
console.log(guestList[5] + msg1);
let messageC = "You can invite only two people for dinner.";
console.log(messageC);
//Question#17
//Shrinking Guest List
//Removing four guests so that only two of them remains
const removeGuest1 = guestList.pop();
let msG1 = "Miss Rimsha! I'm sorry I can't invite you to the dinner. ";
console.log(msG1);
const removeGuest2 = guestList.pop();
let msG2 = "Mr.Arslan! I'm sorry I can't invite you to the dinner. ";
console.log(msG2);
const removeGuest3 = guestList.pop();
let msG3 = "Mr.Ahmad! I'm sorry I can't invite you to the dinner. ";
console.log(msG3);
const removeGuest4 = guestList.pop();
let msG4 = "Miss Sumaiya! I'm sorry I can't invite you to the dinner. ";
console.log(msG4);
//printing message for those who are still invited
let msG5 = "Mr.Adnan! You're still invited for the dinner.";
console.log(msG5);
let msG6 = "Miss Jaweria! You're still invited for the dinner.";
console.log(msG6);
//empty list//removing that two guests too
const removeGuest5 = guestList.pop();
const removeGuest6 = guestList.pop();
console.log(guestList); //checking the empty list
//Question#19//printing message indicating the number of people being invited
let Message3 = "Zero Number of people are being invited right now.";
console.log(Message3);
