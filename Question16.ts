//Seeing the World
let placeName: string[]=["Queeta","Islamabad","Turkey","Kashmir","Chitral"];
console.log(placeName);//original order
//printing the array in alphabetical order without modifying the actual list
//sorting the array
let sortedArray: string[]=placeName.slice().sort();
console.log(sortedArray);
//original order of array"placeName"
console.log(placeName);
//Reverse Alphabetical Order//sorting the array list in reverse alphabetical order
let rAlphabeticArray: string[]=placeName.slice().sort((a,b)=>b.localeCompare(a));
console.log(rAlphabeticArray);
//original order of array"placeName"
console.log(placeName);
//reversing the order of the list
placeName.reverse();
console.log(placeName);
//re-reversing the array to original one
placeName.reverse();
console.log(placeName);
//sorting the array in alphabetical order
placeName.sort();
console.log(placeName);
//sorting the array in reverse alphabetical order
placeName.sort((a,b)=>b.localeCompare(a));
console.log(placeName);
