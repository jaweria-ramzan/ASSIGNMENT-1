"use strict";
;
function car_info(Manufacturer, ModelName, Color, SunRoof) {
    const CarInfo = {
        Manufacturer,
        ModelName,
        Color,
    };
    if (SunRoof) {
        CarInfo.SunRoof = SunRoof;
    }
    ;
    return CarInfo;
}
;
console.log(car_info("Toyota", "Toyota Corolla", "Black"));
console.log(car_info("Honda", "Honda Civic", "Black"));
console.log(car_info("Ford", "Ford Mustang", "White", "Yes"));
console.log(car_info("BMW", "BMW 3 series", "white", "Yes"));
