"use strict";
//this
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        /*    var selt= this;
            setTimeout(function(){
               //console.log(this.id);
                console.log(selt.id);
            },1000);*/
        setTimeout(function () { return console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=lesson9.js.map