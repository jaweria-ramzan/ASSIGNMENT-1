//Checking Usernames
let current_users: string[]=["Daniyal","Farhaan","Farukh","Farhan","Faheem","Dhruva"];
let new_users: string[]=["DANIYAL","Farhan","Amaan","Arsal","Arham"];
for(let i=0;i<new_users.length;i++){
    let usernameExists=false;
    for(let j=0;j<current_users.length;j++)
    
    if (new_users[i].toLowerCase()===current_users[j].toLowerCase()){
        usernameExists=true;
        break;
    }

if(usernameExists){
    console .log("You will need to enter a new username!")
}else{
    console.log("the username is available")
};
};