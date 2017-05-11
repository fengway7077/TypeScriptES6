//  Giá trị mặc định cho tham số của function 

let getPercent = ()=>0.5;
let getBonus = function(value = 10,tax = value * getPercent(),salary = 1){
    console.log(value + tax );//15 45 60 60
    console.log(arguments.length);// 0 ,1 ,2,3,
}
getBonus();//15
getBonus(30);//45
getBonus(20,40);//60
getBonus(20,40,70);//60