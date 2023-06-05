// const firstCurrency = document.getElementById("first-currency");
// const secondCurrency = document.getElementById("second-currency");
// const firstAmount = document.getElementById("first-amount");
// const secondAmount = document.getElementById("second-amount");
// const outPut = document.getElementById("output");

// const rand = document.querySelectorAll("zar");
// const pound = document.querySelectorAll("gbp");
// const dollar = document.querySelectorAll("usd");
// const euro = document.querySelectorAll("eur");

// function convert() {
//     if(firstCurrency === rand.value) {}
// }
// 
const myKey = "c9703d79ef26fdcbf53842d6";

// fetch currency options

fetch(`https://v6.exchangerate-api.com/v6/${myKey}/codes`)
  .then((response) => response.json())
  .then((data) => {
    const { supported_codes } = data;
    const selectElements = document.querySelectorAll("select");

    supported_codes.forEach((code) => {
      const optionElement = document.createElement("option");
      optionElement.value = code;
      optionElement.text = code;

      selectElements.forEach((select) => {
        select.appendChild(optionElement.cloneNode(true));
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching currency options:", error);
  });


function convert() {
    const amountInput = document.getElementById("amount")
    const fromCurrency = document.getElementById("first-currency").value
    const toCurrency =document.getElementById("second-currency").value
    const resultElement = document.getElementById("output")

    fetch(`https://v6.exchangerate-api.com/v6/${myKey}/pair/${fromCurrency}/${toCurrency}`)
    .then(response => response.json())
    .then(data => {
        const {conversion_rate} = data;
        const convertedAmount = (amountInput.value * conversion_rate).toFixed(2);

        resultElement.innerHTML = `${amountInput.value} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    })

    .catch(error => {
        console.log("Error fetching exchange rate:", error);
    })
}


const convertBtn = document.getElementById("button")
button.addEventListener('click', convert)