// // // // // //  let num = 100;
// // // // // // String Data Type
// // // // // //  const str = 'Hello World';
function getFullName(user) {
    return user.firstName + ' ' + user.lastName;
}
function isAdult(user) {
    return user.age >= 18;
}
var user1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25
};
console.log(getFullName(user1));
console.log(isAdult(user1));
