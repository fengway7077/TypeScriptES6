//Kiểu Array 
let arr1:string[] = ["hello","world"];
let arr2:number[]= [1 ,3,5,6,8];
let arrAny:any[] = [10,"abc",true];
let arr3:Array<string> =[" My name is"," CHI"];

console.log(arr1[0]);//hello
console.log(arr2[3]);//6
for(var i = 0;i<arrAny.length;i++) { 
  // console.log(arrAny[i]);
   console.log(arrAny[2])  ;
}

for(var i = 0;i<arrAny.length;i++) { 
  console.log(arr3[i])  ;
}

//Kiểu Tuples 
let student :[string,number]; //Generics
student=["nguyen can b", 20];
student[2]="HAI MUOI";

