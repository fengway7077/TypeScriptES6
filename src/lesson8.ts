let salary = function(){

    return 1000;
}

//Arrow function //ngan gon
let arrow = (bonus:number , tax:number)=> 2000 + bonus - tax;

console.log(salary());
console.log("Arrow function ");
console.log(arrow(250,120));
 