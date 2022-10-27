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
    let firstName = fullNitame.substring(0,indexOfSpace);
    // console.log(firstName);
    let lastName = fullName.substring(indexOfSpace + 1);
    console.log(firstName, lastName, fullName);

    let lastSpan = document.getElementById('last');
    let firstSpan = document.getElementById('first');
    let fullSpan = document.getElementById('fullname');

    console.log(lastSpan);
    console.log(firstName);
    console.log(fullName);

    lastSpan.innerText = lastName ;
    firstSpan.innerText = firstName;
    fullSpan.innerText = fullName;

}
parseAndDisplayName('sam bhandari');