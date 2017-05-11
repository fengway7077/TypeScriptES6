//Bóc tách object 

let employee1 = {
    fname:"WAY",
    lname:"FENG",
    level: 2
}
let {fname,lname,level} = employee1;

console.log(fname);// WAY
console.log(lname);// FENG
console.log(level);// 2

console.log("----------------");

let {fname: f,lname:l,level:lv} = employee1;
console.log(f);// WAY
console.log(l);// FENG
console.log(lv);// 2