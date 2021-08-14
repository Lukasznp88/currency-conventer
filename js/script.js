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
        const form__result = document.querySelector(".js-result");
        const finalText = "Otrzymasz";

        form__result.innerText = `${finalText} ${pln} PLN = ${result} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const form__field = document.querySelector(".js-amount");
        const form__select = document.querySelector(".js-select");
        const currency = form__select.value;
        const pln = +form__field.value;
        const result = calculateResult(pln, currency);
        updateResultText(pln, result, currency)
    }

    const clearForm = () => {
        const clean = document.querySelector(".js-result");
        clean.innerHTML = "Wyczyszczono!";
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

        const buttonClean = document.querySelector(".js-reset");
        buttonClean.addEventListener("click", clearForm);
    };

    init();

}