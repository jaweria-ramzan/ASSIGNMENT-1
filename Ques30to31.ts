//Question#30
//Hello Admin
let user_Names: string[]=["Admin","Afaan","Jaweria","Afnan","Arham","Aadi"];
for (let f=0;f<user_Names.length;f++){
    if(user_Names[f]==="Admin"){
        console.log(`Hello ${user_Names[0]}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${user_Names[f]}, thank you for logging in again.`)
    };
};
//Question#31
//No Users
//removing all the usernames from the array list
const removeName1=user_Names.pop();
const removeName2=user_Names.pop();
const removeName3=user_Names.pop();
const removeName4=user_Names.pop();
const removeName5=user_Names.pop();
const removeName6=user_Names.pop();
console.log(user_Names);
if (user_Names.length===0){
    console.log("We need to find some users!")
};
