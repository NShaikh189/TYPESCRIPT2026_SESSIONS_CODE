

//function overloading: available in the type of proto-type: signature

function combination(a:number, b:number): number;
function combination(a:number, b:string): number;
function combination(a:string, b:string): number;
//function combination(a:string, b:string): string;

//only one with the body
function combination(a:any,b:any):any{
return a+b;
}

// function combination(a:any,b:any):any{
// return "hello"+a+b;
// }

console.log(combination(100,200));
console.log(combination("Ajay","Sharma"));