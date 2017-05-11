//Rest Parameter 

let displayColor = function(...colors:string[]){
        console.log(message);
        console.log(colors);
        console.log(arguments.length);
    
}
let message = "Hello";
displayColor(message,'red');
displayColor(message,'red','green');
displayColor(message,'red','green','blue');

/** lesson11.ts:4 Hello
lesson11.ts:5 (2) ["Hello", "red"]
lesson11.ts:6 2
lesson11.ts:4 Hello
lesson11.ts:5 (3) ["Hello", "red", "green"]
lesson11.ts:6 3
lesson11.ts:4 Hello
lesson11.ts:5 (4) ["Hello", "red", "green", "blue"]
lesson11.ts:6 4 */