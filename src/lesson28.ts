/*@Component({
    selector:"my-app",
    template:"<h1> Welcome to {{name}}</h1>"
})
export class AppComponent{
    name:string = "ABCC";
}*/

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @validate
    greet(@required name: string) {
        return "Hello " + name + ", " + this.greeting;
    }
}