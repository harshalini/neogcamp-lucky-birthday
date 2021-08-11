const birthDate = document.querySelector("#birth-date");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");

checkButton.addEventListener("click", function getValues() {
    console.log(birthDate.value, luckyNumber.value);
});