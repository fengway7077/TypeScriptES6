"use strict";
//  Giá trị mặc định cho tham số của function 
var getPercent = function () { return 0.5; };
var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    if (salary === void 0) { salary = 1; }
    console.log(value + tax); //15 45 60 60
    console.log(arguments.length); // 0 ,1 ,2,3,
};
getBonus(); //15
getBonus(30); //45
getBonus(20, 40); //60
getBonus(20, 40, 70); //60
//# sourceMappingURL=lesson10.js.map