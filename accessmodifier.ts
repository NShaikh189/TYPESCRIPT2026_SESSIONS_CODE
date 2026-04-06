class User {
public development():void {
    console.log("development"); 
}

private testing():void {
    console.log("Testing "); 
}

protected execution():void {
    console.log("execution"); 
}

public doTesting():void {
    this.testing(); // Accessible within the class
}

}   

class Employee extends User {

    public working():void {
     this.development(); // Accessible within the subclass}
        this.execution();
        this.doTesting();
    }
}

let emp1 = new Employee();
emp1.development(); // Accessible
emp1.working(); // Accessible
// emp1.testing(); // Error: Property 'testing' is private and only accessible within class 'User'.
// emp1.execution(); // Error: Property 'execution' is protected and only accessible within class 'User' and its subclasses.
emp1.doTesting(); // Accessible
