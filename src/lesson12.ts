//Spread parameter 

let displayColorSpread = function(message,...colors:string[]){
        
    for(let i in colors){
        console.log(colors[i]);//red greed blue
    }
    
}
let messageSpread = "Hello";
let colors = ['red','green','blue']
displayColorSpread(messageSpread,...colors);
