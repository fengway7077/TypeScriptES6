// https://www.typescriptlang.org/docs/handbook/basic-types.html
let isDone: boolean = false;
console.log(isDone);

let decimal:number = 6;
console.log(decimal);

let color:string= "blue";
console.log(color);


let fullName: ` NONAME `;
let age:number = 20 ;
let sentence: string = `Hello, my name is ${ fullName } . Age is ${age * 2} ` ;

console.log(sentence)

enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);