
function parseAndDisplayName(fullName) {

    let splitName = fullName.split(' ');

    let firstName = splitName[0];
    let middleName = splitName.slice(1, splitName.length - 1).join(' ');
    let lastName = (splitName[splitName.length - 1]);

    let fullSpan = document.getElementById('full');
    let firstSpan = document.getElementById('first');
    let middleSpan = document.getElementById('middle');
    let lastSpan = document.getElementById('last');

    fullSpan.innerText = fullName;
    firstSpan.innerText = firstName;
    splitName.length > 2 ? middleSpan.innerText = middleName : middleSpan.innerText = "N/A";
    lastSpan.innerText = lastName ;

}
parseAndDisplayName('Sam bahadur Bhandari');