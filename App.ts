// // //  let num = 100;
// // // String Data Type
// // //  const str = 'Hello World';

// // // const str1 = 'This is a string created using ${str1} single qoutes';
// // // const str2 = "This is a string created using single qoutes";
// // // const str3 = `This is a string 
// // //             created using ${str1} 
// // //             single qoutes`;

// // // console.log(str1);
// // // console.log(str3);
// // // Number Data Type
// // // let num = 12;
// // // const pi = 3.14;
// // // Boolean Data Type
// // let isEligible = true;
// // let isEqual = false;

// // // console.log(Boolean(null));
// // // console.log(Boolean('Hello'));

// // let isGreater = 10 > 15;
// // console.log(isGreater);

// // Type Assignment & Type Interferance

// function sum(num1 : number,num2 : number,isPrint: boolean){
//     if(isPrint){
//         let s = num1 + num2;
//         console.log("Sum ="+ s);
//     } else{
//         console.log("Sum not found");
//     }
//     return num1 + num2;
// }
// let n1: number = 10;
// let n2: number = 20;
// // console.log(sum(12,13));
// console.log(sum(n1,n2,false));

//Object type in typescript
// let person = {
//     name: 'John',
//     age: 30
// }
// console.log(person.name);
// console.log(person["age"]);
//Arrays In Typescript
// let person: (string | number)[] = ['john',28,'male',1000];
// let names: string[]= [];
// let birthyear: number[] = [1998,1989,2007];

// names.push('john');

// // console.log(names[0]);
// // console.log(birthyear[0]);

// for(let i of birthyear){
//     console.log(i);
// }

//Tuples in typescript