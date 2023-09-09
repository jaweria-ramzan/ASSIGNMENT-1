"use strict";
//Cities
function describe_city(cityName, countryName = "Pakistan") {
    console.log(`${cityName} is one of the most known places in ${countryName}.`);
}
;
describe_city("Lahore");
describe_city("Karachi");
describe_city("Mumbai", "India");
