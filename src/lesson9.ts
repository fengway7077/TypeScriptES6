//this

var employee = {
    id : 1,
    greet:function(){
    /*    var selt= this;
        setTimeout(function(){
           //console.log(this.id);
            console.log(selt.id);
        },1000);*/
        setTimeout(() => console.log(this.id),1000);
    
    }
}
employee.greet();