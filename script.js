const charVal = document.getElementById("textarea");
console.log(textarea) // working properly in the browser
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");
console.log(remainingCount)

let userChar = 0;

const updateCounter = () => {
    // alert("Plzz subscribe") // working perfectly
    userChar = charVal.value.length;
    console.log(userChar)

    totalCount.innerText = userChar;

    remainingCount.innerText = 350 - userChar;
}

charVal.addEventListener("keyup", () => updateCounter())


// last part which is copying the text from textarea by clicking on copy button
const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0,9999999999); // it is for mobile version
    //api for copying text
    navigator.clipboard.writeText(charVal.value); // its very important
    alert("Copied to clipboard")
}