//only method declaration
//can not create object of interface
//can not have constructor
//can not have method body
//can not have data member
//can not have static member
//can not have access specifier

//interface with objects: define the shape of an object/ blueprint for an object

interface IUser{
    name: string;
    age: number;
    salary?: number;    //optional property
    readonly compName: string;    //constant: value can not be changed

    display(): void;  
}

let u1: IUser = {
    name: "John Doe",
    age: 30,
    compName: "ABC Corp",   
    display(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Company: ${this.compName}`);
    }
}
    
u1.display();   

console.log(u1.name);
console.log(u1.age);
console.log(u1.compName);

// u1.compName = "XYZ Corp"; // Error: Cannot assign to 'compName' because it is a read-only property.