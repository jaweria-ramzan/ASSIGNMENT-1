//Question#41
//Magicians
 const magiciansName: string[]=["Adele","Michael","Deniz","Ken","Beyonce"];
 
 for (let i = 0; i < magiciansName.length; i++) { 
     console.log(magiciansName[i]);
     };
     function show_magicians(magiciansName:string[]) {
        for(let n=0; n<magiciansName.length; n++){
             console.log(magiciansName[n])
           }
      };
//Question#42
//Great Magicians
function make_great(magiciansName:string[]) {
    for(let n=0; n<magiciansName.length; n++){
       let newName = "The Great "+ magiciansName[n];
       magiciansName[n] = newName;
    }
};
 make_great(magiciansName);
 show_magicians(magiciansName);
//Question#43
//Unchanged Magicians
let magiciansName1: string[]=["Adele","Michael","Deniz","Ken","Beyonce"];//original
for(let n=0; n<magiciansName1.length; n++){
   console.log(magiciansName1[n])
 }
 const modifiedMagicians1: string[]=[];
function make_great1(magiciansName1:string[]) {
   
for (let g = 0; g < magiciansName1.length; g++) {
   modifiedMagicians1.push('The Great ' + magiciansName1[g])
}
return make_great1
};
function show_magicians1(magiciansName1:string[]) {
   for(let n=0; n<magiciansName1.length; n++){
        console.log(magiciansName1[n])
      }
 };
make_great1(magiciansName1);
show_magicians1(modifiedMagicians1);