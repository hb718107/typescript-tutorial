// // // // // // // //  let num = 100;
// // // // // // // // String Data Type
// // // // // // // //  const str = 'Hello World';

// // // // // // // // const str1 = 'This is a string created using ${str1} single qoutes';
// // // // // // // // const str2 = "This is a string created using single qoutes";
// // // // // // // // const str3 = `This is a string 
// // // // // // // //             created using ${str1} 
// // // // // // // //             single qoutes`;

// // // // // // // // console.log(str1);
// // // // // // // // console.log(str3);
// // // // // // // // Number Data Type
// // // // // // // // let num = 12;
// // // // // // // // const pi = 3.14;
// // // // // // // // Boolean Data Type
// // // // // // // let isEligible = true;
// // // // // // // let isEqual = false;

// // // // // // // // console.log(Boolean(null));
// // // // // // // // console.log(Boolean('Hello'));

// // // // // // // let isGreater = 10 > 15;
// // // // // // // console.log(isGreater);

// // // // // // // Type Assignment & Type Interferance

// // // // // // function sum(num1 : number,num2 : number,isPrint: boolean){
// // // // // //     if(isPrint){
// // // // // //         let s = num1 + num2;
// // // // // //         console.log("Sum ="+ s);
// // // // // //     } else{
// // // // // //         console.log("Sum not found");
// // // // // //     }
// // // // // //     return num1 + num2;
// // // // // // }
// // // // // // let n1: number = 10;
// // // // // // let n2: number = 20;
// // // // // // // console.log(sum(12,13));
// // // // // // console.log(sum(n1,n2,false));

// // // // // //Object type in typescript
// // // // // // let person = {
// // // // // //     name: 'John',
// // // // // //     age: 30
// // // // // // }
// // // // // // console.log(person.name);
// // // // // // console.log(person["age"]);
// // // // // //Arrays In Typescript
// // // // // // let person: (string | number)[] = ['john',28,'male',1000];
// // // // // // let names: string[]= [];
// // // // // // let birthyear: number[] = [1998,1989,2007];

// // // // // // names.push('john');

// // // // // // // console.log(names[0]);
// // // // // // // console.log(birthyear[0]);

// // // // // // for(let i of birthyear){
// // // // // //     console.log(i);
// // // // // // }

// // // // // //Tuples in typescript

// // // // // // let employee: [number,string ,number ,boolean] = [123,'john',2000,true,];
// // // // // // console.log(employee[1]);
// // // // // //////////////Enums in typescript
// // // // // // const ADMIN = 0;
// // // // // // const READ_ONLY = 1;
// // // // // // const WRITE_ONLY = 2;
// // // // // // const READ_WRITE = 3;   THIS IS ONE WAY OF DOING WITHOUT ENUMS

// // // // // enum Roles {
// // // // //     ADMIN,
// // // // //     READ_ONLY,
// // // // //     WRITE_ONLY,
// // // // //     READ_WRITE
// // // // // }
// // // // // const user = {
// // // // //     name: 'John',
// // // // //     age: 30,
// // // // //     gender: 'male',
// // // // //     role: Roles.ADMIN;
// // // // // }
// // // // // if(user.role === Roles.ADMIN){
// // // // //     console.log('You are an admin user');
// // // // // }
// // // // // // THIS IS THE WAY OF DOING WITH ENUMS

// // // // // //any type in typescript
// // // // // let dynamicData: any;
// // // // // dynamicData = 100;

// // // // // let arr: any[];
// // // // // arr = [100,'hello',true,null,undefined];

// // // // // Union Types in Typescript
// // // // /*let user: {name: string; age: number} | null = null;

// // // // function getUser(){
// // // //     const uname = 'john';
// // // //     const uage = 30;
// // // //     user = {name: uname, age: uage};
// // // //     return user;
// // // // }
// // // // console.log(getUser());*/

// // // // function printStatus(message: string, statusCode: number | string | boolean){
// // // //     if(typeof statusCode === 'string'){
// // // //         console.log(`${message} Status : ${statusCode.trim()}`);
// // // //     }else{console.log(`${message} Status : ${statusCode}`);}
// // // // }

// // // // printStatus('Success', 200);
// // // // printStatus('Error', '500 Internal Server Error');
// // // // printStatus('Success',' 200');
// // // // printStatus('Success',true);
// // // // // printStatus('Not Found', true); // This will give an error

// // // /////////////////Literal Types in Typescript//////////////
// // // const str = 'Hello World' ;
// // // let str2 ='Anything' ;

// // // //Without literal types this function would accept any string value

// // // // function roleMessage(role: string){
// // // //     switch(role){
// // // //         case 'admin':
// // // //             console.log('You are an admin user');
// // // //             break;
// // // //         case 'read-only':
// // // //             console.log('You are a read-only user');
// // // //             break;
// // // //         case 'read-write':
// // // //             console.log('You are a read-write user');
// // // //             break;
// // // //             default:
// // // //                 console.log('Invalid role');
// // // //     }
// // // // }


// // // // roleMessage('admin');
// // // // roleMessage('read-only');
// // // // roleMessage('read-write');
// // // // roleMessage('super-admin'); // This will give the default case message


// // // function roleMessage(role: 'admin' | 'read-only' | 'read-write'){
// // //     switch(role){
// // //         case 'admin':
// // //             console.log('You are an admin user');
// // //             break;
// // //         case 'read-only':
// // //             console.log('You are a read-only user');
// // //             break;
// // //         case 'read-write':
// // //             console.log('You are a read-write user');
// // //             break;
// // //             default:
// // //                 console.log('Invalid role');
// // //     }
// // // }


// // // roleMessage('admin');
// // // roleMessage('read-only');
// // // roleMessage('read-write');
// // // // roleMessage('super-admin'); // This will throw an error now


// // // Type Aliases in Typescript

// // // type stringType = string;
// // // let str: stringType = 'Hello';

// // type StringOrNumber = string | number;
// // /*function printStatus(message: string, statusCode: StringOrNumber){
// //     if(typeof statusCode === 'string'){
// //         console.log(`${message} Status : ${statusCode.trim()}`);
// //     }else{console.log(`${message} Status : ${statusCode}`);}
// // }

// // printStatus('Success', 200);
// // printStatus('Error', '500 Internal Server Error');*/

// // type UserRole = 'admin' | 'read-only' | 'read-write';
// // // function roleMessage(role: UserRole){
// // //     switch(role){
// // //         case 'admin':
// // //             console.log('You are an admin user');
// // //             break;
// // //         case 'read-only':
// // //             console.log('You are a read-only user');
// // //             break;
// // //         case 'read-write':
// // //             console.log('You are a read-write user');
// // //             break;
// // //             default:
// // //                 console.log('Invalid role');
// // //     }
// // // }


// // // roleMessage('admin');
// // // roleMessage('read-only');
// // // roleMessage('read-write');

// // type User = {
// //     firstName: string;
// //     lastName: string;
// //     age: number;
// // }
// // function getFullName(user: User){
// //     return user.firstName + ' ' + user.lastName;
// // }

// // function isAdult(user: User){
// //     return user.age >= 18;
// // }

// // let user1: User = {
// //     firstName: 'John',
// //     lastName: 'Doe',
// //     age: 25
// // }
// // console.log(getFullName(user1));
// // console.log(isAdult(user1));

// //////Function Return Types in Typescript

// // function add(num1: number, num2 : number){
// //     console.log(num1 + num2);
// //     return;
// // }

// //////// Function as a type in Typescript

// type User = { name: string;  age: number};

// function greetUser(user: User) {
//     const greetmsg = 'Hello, ' + user.name + '! You are ' + user.age + ' years old.';
//     console.log(greetmsg);
// }
// function isEligible(user: User){
//     console.log(user.age >= 18);
// }

// // let hello : Function; //  Declare a variable 'greet' of type Function But it would allow any function to get in..to avoid this we will tell typescrit which function to accept
// let hello : (usr: User) => void;
// hello = greetUser;

// let user = { name: 'Alice', age: 28 };
// hello(user);

// hello = isEligible;
// hello(user);
// let anotheruser = { name: 'Bob', age: 16 };
// hello(anotheruser);

///////////////////// Funtion Type For Callbacks in Typescript ///////////////////////

/*
let addNumbers = (n1: number, n2: number) => number;

function sum(num1 : number, num2 : number){
    return num1 + num2;                            ////This function 'sum' matches the type of the callback
}

function add(num1 : number, num2: number){
    console.log(num1 + num2);         ////This function 'add' doesn't matches the type of the callback
}

addNumbers = sum;
addNumbers = add; // This will give an error


function calculate(num1: number, num2: number, print: (str:string, n: number) => void){
    const result = num1 + num2;
    print('The result is:', result);
}
function display(msg: string, value: number){
    console.log(msg, value);
}

calculate(10, 20, display);
*/