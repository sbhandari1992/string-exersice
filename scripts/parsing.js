// console.log('scripts works');


// let fullName = "Sam Bhandari";
// console.log(`My full name is ${fullName}`);
// let indexOfSpace = fullName.indexOf(' ');
// console.log(indexOfSpace);
// let firstName = fullName.substring(0,indexOfSpace);
// console.log(firstName);
// let lastName = fullName.substring(indexOfSpace + 1);
// console.log(lastName);


function parseAndDisplayName(fullName) {
    let indexOfSpace = fullName.indexOf(' ');
    // console.log(indexOfSpace);
    let firstName = fullName.substring(0,indexOfSpace);
    // console.log(firstName);
    let lastName = fullName.substring(indexOfSpace + 1);
    console.log(firstName, lastName, fullName);

}
parseAndDisplayName('sam bhandari');