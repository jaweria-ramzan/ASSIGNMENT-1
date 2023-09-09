//Question#23
//Conditional Tests
//True Test Practice
//Test1
let car='Suzuki';
console.log("Is car=='Suzuki'?I predict True.");
console.log(car=='Suzuki');
//Test2
let fruit='Banana';
console.log("Is fruit=='Banana'?I predict True.");
console.log(fruit=='Banana');
//Test3
let myName='Jaweria';
console.log("Is myName=='Jaweria'?I predict True.");
console.log(myName=='Jaweria');
//Test4
let bike='HondaCity';
console.log("Is bike=='HondaCity'?I predict True.");
console.log(bike=='HondaCity');
//Test5
let bookName='IT ENDS WITH US';
console.log("Is bookName=='IT ENDS WITH US'?I predict True.");
console.log(bookName=='IT ENDS WITH US');
//False Test Practice
//Test1
let bagColor='Black';
console.log("Is bagColor=='Blue'?I predict False.");
console.log(bagColor=='Blue');
//Test2
let shoeColor='White';
console.log("Is shoeColor=='Black'?I predict False.");
console.log(shoeColor=='Black');
//Test3
let house='Beautiful';
console.log("Is house=='Bad'?I predict False.");
console.log(house=='Bad');
//Test4
let rings=4;
console.log("Is rings==5?I predict False.");
console.log(rings==5);
//Test5
let scarf='Pink';
console.log("Is scarf=='Red'?I predict False.");
console.log(scarf=='Red');
//Question#24
//More Conditional tests
//Test for Equality and Inequality with strings
//Equality Test
let item1="Pen";
let item2="Pencil";
let item3="Marker";
let item4="Pen";
let item5="Pencil";
let item6="Marker";
console.log(item1===item4);//true
console.log(item1===item2);//false
console.log(item3===item6);//true
console.log(item3===item4);//false
console.log(item5===item2);//true
console.log(item5===item6);//false
//Inquality Test
let item7="Scale";
let item8="Eraser";
let item9="Sharpner";
let item10="Scale";
let item11="Eraser";
let item12="Sharpner";
console.log(item7!==item10);//false
console.log(item7!==item8);//true
console.log(item9!==item12);//false
console.log(item9!==item10);//true
console.log(item11!==item8);//false
console.log(item11!==item12);//true
//Tests using lowercase function
//in case of equality
let string1="JAWERIA";
let string2="RAMZAN";
let string3="JAWERIA";
let string4="RAMZAN";
console.log(string1.toLowerCase()===string3.toLowerCase());//true
console.log(string2.toLowerCase()===string3.toLowerCase());//false
console.log(string3.toLowerCase()===string3.toLowerCase());//true
console.log(string4.toLowerCase()===string3.toLowerCase());//false
//in case of inequality
let string5="JAWERIA";
let string6="RAMZAN";
let string7="JAWERIA";
let string8="RAMZAN";
console.log(string5.toLowerCase()!==string6.toLowerCase());//true
console.log(string5.toLowerCase()!==string7.toLowerCase());//false
console.log(string6.toLowerCase()!==string7.toLowerCase());//true
console.log(string6.toLowerCase()!==string8.toLowerCase());//false
//Numerical Tests involving equality and inequality,greater than and less than,greater than or equal to,less than or equal to
//Numerical Tests involving equality and inequality
//equality test
let  nuM1=1;
let  nuM2=2;
let  nuM3=1;
let  nuM4=2;
console.log(nuM1===nuM3);//true
console.log(nuM1===nuM2);//false
console.log(nuM2===nuM4);//true
console.log(nuM2===nuM3);//false
//inequality test
let  nuM5=1;
let  nuM6=2;
let  nuM7=1;
let  nuM8=2;
console.log(nuM5!==nuM6);//true
console.log(nuM5!==nuM7);//false
console.log(nuM8!==nuM7);//true
console.log(nuM8!==nuM6);//false
//greater than and lesser than
//Incomplete
