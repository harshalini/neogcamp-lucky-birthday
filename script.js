const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#result");

checkButton.addEventListener("click", function getValues() {
    var bDate = birthDate.value;
    bDate = bDate.replaceAll("-", "");
    console.log(bDate);
    let sum = 0;
    for (let i = 0; i < bDate.length; i++) {
        sum = sum + Number(bDate.charAt(i));
    }
    console.log(sum);

    message.style.display = "none";
    if (sum % luckyNumber.value === 0) {
        message.style.display = "block";
        message.innerText = "Your  bday is lucky";
    } else {
        message.style.display = "block";
        message.innerText - "Your bday is not lucky";
    }
});