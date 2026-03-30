let num:number = 100;
console.log(num);
console.log(typeof num);

let username: string = 'admin';
console.log(username);

let isActive: boolean = true;
console.log(isActive);
isActive = false;
console.log(isActive);

let user:null = null;
let x:undefined = undefined;
let distance: bigint = 100n; //big integer
console.log(distance);
//console.log(distance + 200); //Operator '+' cannot be applied to types 'bigint' and '200'.
console.log(distance + 200n);

let testValue:any;

testValue = 10;
testValue = 'test';
testValue = true;
console.log(testValue);



let value:unknown;

value = 10;
value = 'test';
value = true;
console.log(value);

function testing():void
{
    console.log("hellp testing");
};

testing();
//every parameter should have its datatype

/**
 * 
 * @param stName 
 * @returns 
 */

function getMarks(stName: string):number
{
    console.log(stName);
    return 100;
}

console.log(getMarks("AA"));

//never: a value which will never occur, will never happen...error

// function throwElementError(locator:string): never{
//     throw new Error(locator+" is not found error.....");
// };

// throwElementError('loginBtn');

//uniontypes:
let id: string|number|boolean;
id = 100;
id = "akash";
console.log(id);
console.log(typeof id);

//arrays
let marks: number[] = [1,2,3,5];
console.log(marks);
console.log(marks[2]);

let names: string[] = ['mac','dell','hp','acer'];
console.log(names);
console.log(names[2]);

let empNames: Array<string> = ["AJ",'DJ','Tim','Tp','DP'];
console.log(empNames);
console.log(empNames[2]);

let empNames1: Array<string|number> = ["AJ",'DJ','Tim','Tp','DP',1000,2000];
console.log(empNames1);
console.log(empNames1[2]);

console.log(empNames1[5]);

//tuple: fixed length array with specific types:

let userInfo: [string, string, number] = ['Somdev','Burman',24];
console.log(userInfo);
console.log(userInfo[1]);

//object:
let newUserData: any = {
    name:'navnit',
    salary:2.55,
    iaActive: true,
    city:'Bengaluru'
};

 newUserData['email'] = 'sss@gmail.com';
 console.log(newUserData);

let newUser: {name:string, salary:number, isActive:boolean, city:string}={
    name:'navnit',
    salary:2.55,
    isActive: true,
    city:'Bengaluru'
}

//schema = type
//readonly = value cannot be changed
type userType = {readonly name:string, salary:number, isActive:boolean, city:string};

let newUserInfo: userType={
    name:'navnit',
    salary:2.55,
    isActive: true,
    city:'Bengaluru'
};

console.log(newUserInfo);
newUserInfo.salary= 12.55;
//newUserInfo.name = 'Jai'; Cannot assign to 'name' because it is a read-only property.
//delete newUserInfo.name;The operand of a 'delete' operator cannot be a read-only property.

type statusCodeType = string|number;
let okStatusCode: statusCodeType = 200;
okStatusCode = "200 OK";
console.log(okStatusCode);