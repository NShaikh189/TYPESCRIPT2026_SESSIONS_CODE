// let isLaunched = launchBrowser('ie');
// console.log(isLaunched);


function getNumber(): Promise<number>{
    return Promise.resolve(100);
}

getNumber().then((res)=>console.log(res));


function getTrainerName(): Promise<string>
{
    return Promise.resolve('nayum');
}

getTrainerName().then((trnm)=>console.log(trnm));

//playwright
type userType = {name:string,age:number};
function getUserData(): Promise<userType>
{
    return new Promise((resolve, reject)=>{
setTimeout(()=>{
    let user = {
        name: 'Ahuja',
        age: 30
        };
        resolve(user);
    },3000);
    })
};

//getUserData().then((myuser)=>console.log(myuser));
//utility
async function getMyUserData()
{
 let myUser = await getUserData();
 console.log(myUser);
}

//test class
getMyUserData();
