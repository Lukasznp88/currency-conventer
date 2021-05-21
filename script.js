let form = document.querySelector(".js-form");
let form__field = document.querySelector(".js-amount");
let form__select = document.querySelector(".js-select");
let form__result = document.querySelector(".js-result");

let eur = 4.5565;
let usd = 3.7657;
let chf = 4.1258;
let gbp = 5.2426;


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let finalText = "Otrzymasz";
    let finalResetText = "Wyczyszczono";
    let currency = form__select.value;
    let pln = +form__field.value;

    let result;
    switch (currency) {
        case "EUR":
            result = (pln / eur).toFixed(2);
            form__result.innerText = `${finalText} ${result} EUR`;
            break;

        case "USD":
            result = (pln / usd).toFixed(2);
            form__result.innerText = `${finalText} ${result} USD`;
            break;

        case "CHF":
            result = (pln / chf).toFixed(2);
            form__result.innerText = `${finalText} ${result} CHF`;
            break;

        case "GBP":
            result = (pln / gbp).toFixed(2);
            form__result.innerText = `${finalText} ${result} GBP`;
            break;

        default:
            form__result.innerText = "Coś nie działa!";
    }

    form.addEventListener("reset", () => {
        form__result.innerText = `${finalResetText}`;
        console.log("formularz został zresetowany");
    });
});