{
    console.log("Witam w moim kalkulatorze")
    const calculateResult = (option, amount) => {
        const rateEURElement = document.querySelector(".js-rateEUR")
        const rateUSDElement = document.querySelector(".js-rateUSD")
        const rateGBPElement = document.querySelector(".js-rateGBP")
        const rateCHFElement = document.querySelector(".js-rateCHF")
        const rateEUR = rateEURElement.value;
        const rateUSD = rateUSDElement.value;
        const rateGBP = rateGBPElement.value;
        const rateCHF = rateCHFElement.value;
        switch (option) {
            case "EUR":
                return amount / rateEUR
            case "USD":
                return amount / rateUSD
            case "GBP":
                return amount / rateGBP
            case "CHF":
                return amount / rateCHF
        }
    }
    const resultText = (result, option) => {
        const resultElement = document.querySelector(".js-result")
        resultElement.innerHTML = `${result.toFixed(2)} ${option}`
    }
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount")
        const optionElement = document.querySelector(".js-option")


        const amount = amountElement.value;
        const option = optionElement.value;

        const result = calculateResult(option, amount);
        resultText(result, option);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form")
        formElement.addEventListener("submit", onFormSubmit)
    }
    init();
}