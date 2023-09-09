"use strict";
//Ordinal Numbers
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let k = 0; k < array.length; k++) {
    let ordinal;
    if (array[k] === 1) {
        ordinal = "1st";
    }
    else if (array[k] === 2) {
        ordinal = "2nd";
    }
    else if (array[k] === 3) {
        ordinal = "3rd";
    }
    else {
        ordinal = `${array[k]}th`;
    }
    console.log(ordinal);
}
;
