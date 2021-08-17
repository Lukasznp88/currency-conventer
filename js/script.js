{
    const calculateResult = (pln, currency) => {
        const eur = 4.5565;
        const usd = 3.7657;
        const chf = 4.1258;
        const gbp = 5.2426;

        switch (currency) {
            case "EUR":
                return (pln / eur).toFixed(2);

            case "USD":
                return (pln / usd).toFixed(2);

            case "CHF":
                return (pln / chf).toFixed(2);

            case "GBP":
                return (pln / gbp).toFixed(2);

            default:
                form__result.innerText = "Coś nie działa!";
        };

    };

    const updateResultText = (pln, result, currency) => {
        const formResult = document.querySelector(".js-result");
        const finalText = "Otrzymasz";

        formResult.innerText = `${finalText} ${pln} PLN = ${result} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const formField = document.querySelector(".js-amount");
        const formSelect = document.querySelector(".js-select");
        const currency = formSelect.value;
        const pln = +formField.value;
        const result = calculateResult(pln, currency);
        updateResultText(pln, result, currency)
    }

    const clearForm = () => {
        const clearResult = document.querySelector(".js-result");
        clearResult.innerHTML = "Wyczyszczono!";
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

        const buttonClean = document.querySelector(".js-reset");
        buttonClean.addEventListener("click", clearForm);
    };

    init();

}