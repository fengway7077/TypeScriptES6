for(var i=1;  i<=5 ; i++){
    (function(x){
    setTimeout(function(){
        console.log(" dung var"); 
        console.log(x);
    },1000);
   })(i)
  }


for(let i=1;  i<=5 ; i++){
    setTimeout(function(){
        console.log("cach 2 dung let"); 
        console.log(i);
    },1000);
}