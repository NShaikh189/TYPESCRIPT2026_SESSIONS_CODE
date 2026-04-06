
//public protected private
class Employee {
    public empCode: number;
    private empName: string;
    protected empSalary: number;

    constructor(code: number, name: string, salary: number) {
        this.empCode = code;
        this.empName = name;
        this.empSalary = salary;
    }

    public display(): void {
        console.log(`Employee Code: ${this.empCode}, Employee Name: ${this.empName}, Employee Salary: ${this.empSalary}`);
    }
}

let emp1 = new Employee(101, "John Doe", 50000);
emp1.display(); // Accessible

// console.log(emp1.empName); // Error: Property 'empName' is private and only accessible within class 'Employee'.
// console.log(emp1.empSalary); // Error: Property 'empSalary' is protected and only accessible within class 'Employee' and its subclasses.

class Manager extends Employee {
    constructor(code: number, name: string, salary: number) {
        super(code, name, salary);
    }

    public displayManagerInfo(): void {
        console.log(`Manager Code: ${this.empCode}, Manager Salary: ${this.empSalary}`);
        // console.log(this.empName); // Error: Property 'empName' is private and only accessible within class 'Employee'.
    }
}

let manager1 = new Manager(201, "Jane Smith", 80000);
manager1.displayManagerInfo(); // Accessible                    