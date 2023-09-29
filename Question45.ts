//Cars
//Method#01
/*function car_Info(manufacturer:string,modelName:string,...args:string[]){
    console.log("Manufacturer:",manufacturer);
    console.log("ModelName:",modelName);
    console.log("Color:",args[0]);
    console.log("Sunroof:",args[1]);
};
console.log(car_Info("Toyota","Toyota Corolla","Black","No"));
console.log(car_Info("Honda","Honda Civic","Black","No"));
console.log(car_Info("Ford","Ford Mustang","White","Yes"));
console.log(car_Info("BMW","BMW 3 Series","White","Yes"));*/
//Method#02
interface carInfo{
    Manufacturer:string,
    ModelName:string,
    Color:string,
    SunRoof?:string,
};
function car_info(
    Manufacturer:string,
    ModelName:string,
    Color:string,
    SunRoof?:string):carInfo {
    const CarInfo:carInfo={
        Manufacturer,
        ModelName,
        Color,
    } 
    if (SunRoof){CarInfo.SunRoof=SunRoof};
      return CarInfo
};
console.log(car_info("Toyota","Toyota Corolla","Black"));
console.log(car_info("Honda","Honda Civic","Black"));
console.log(car_info("Ford","Ford Mustang","White","Yes"));
console.log(car_info("BMW","BMW 3 series","white","Yes"));