console.log("Witam w moim kalkulatorze")
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result")
let rateElement = document.querySelector(".js-rate")
let rateUSDElement = document.querySelector(".js-rateUSD")
let rateGBPElement = document.querySelector(".js-rateGBP")
let rateCHFElement = document.querySelector(".js-rateCHF")
let amountElement = document.querySelector(".js-amount")
let option = document.querySelector(".js-option")
formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = amountElement.value;
    let rate = rateElement.value;
    let rateUSD = rateUSDElement.value;
    let rateGBP = rateGBPElement.value;
    let rateCHF = rateCHFElement.value;
    let result;
    switch (option.value) {
        case "EUR":
            result = amount / rate
            break
        case "USD":
            result = amount / rateUSD
            break
        case "GBP":
            result = amount / rateGBP
            break
        case "CHF":
            result = amount / rateCHF
            break
    }
    resultElement.innerHTML = `${result.toFixed(2)} ${option.value}` 
})