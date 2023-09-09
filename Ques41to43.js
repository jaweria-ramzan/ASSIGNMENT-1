"use strict";
//Question#41
//Magicians
/*let magiciansName: string[]=["Adele","Michael","Deniz","Ken","Beyonce"];
function show_magicians(magiciansName:string[]) {
    return magiciansName
};
console.log(show_magicians(magiciansName));*/
let magiciansName = ["Adele", "Michael", "Deniz", "Ken", "Beyonce"];
function show_magicians(magiciansName) {
    for (let n = 0; n < magiciansName.length; n++) {
        console.log(magiciansName[n]);
    }
}
;
//Question#42
//Great Magicians
/*function make_great(magiciansName:string[]) {
    for(?){
        magiciansName="The Great"+magiciansName
    }
};*/
show_magicians(magiciansName);
