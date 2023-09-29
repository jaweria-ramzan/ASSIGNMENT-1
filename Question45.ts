//Cars
function car_Info(manufacturer:string,modelName:string,...args:string[]){
    console.log("Manufacturer:",manufacturer);
    console.log("ModelName:",modelName);
    console.log("Color:",args[0]);
    console.log("Sunroof:",args[1]);
};
console.log(car_Info("Toyota","Toyota Corolla","Black","No"));
console.log(car_Info("Honda","Honda Civic","Black","No"));
console.log(car_Info("Ford","Ford Mustang","White","Yes"));
console.log(car_Info("BMW","BMW 3 Series","White","Yes"));