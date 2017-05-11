"use strict";
for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(" dung var");
            console.log(x);
        }, 1000);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log("cach 2 dung let");
        console.log(i_1);
    }, 1000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//# sourceMappingURL=lesson5.js.map