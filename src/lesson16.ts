//Vòng lặp for of 
var colorNames = ['RED','green','blue','yellow','puple']
for(let index in colorNames){
    console.log(colorNames[index]); //RED green blue yellow puple
}

console.log("----------------------");
for(let item of colorNames ){
    console.log(item);//RED green blue yellow puple
}
console.log("----------------------");
let name2 = "abcj";
for (let c of name2){   // in name2            0 1 2 3
console.log(c);//abcj
}

