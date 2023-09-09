//Question#36
//T-Shirt
function make_shirt (Size:number|string,MsgA:string) {
    console.log(`The size of T-shirt is ${Size} and the message printed on it is ${MsgA}.`)
};
make_shirt("Medium","Hello, Sweety!");
//Question#37
//Large Shirts
function make_shirt1 (Size:number|string="Large",MsgA:string="I love Typescript.") {
    console.log(`The size of T-shirt is ${Size} and the message printed on it is ${MsgA}.`)
};
make_shirt1();
make_shirt1("Medium");
make_shirt1("Small","I Hate Everyone!");