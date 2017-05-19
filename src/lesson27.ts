//https://www.typescriptlang.org/docs/handbook/interfaces.html

interface  Person{
 fname :string,
 lname:string,
 age? :number
}

var p1:Person = {
 fname : "TEN",
 lname :"sdfs",
 age : 2
}

var p2:Person = {
 fname : "TEN2",
 lname :"sdfs2"
}

interface LabelledValue {
   readonly label: string; //readonly khong cho phep chinh sua
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);