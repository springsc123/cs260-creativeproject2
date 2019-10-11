/*global fetch*/
function init() {
    let dropdownTo = document.getElementById("currencyTypeTo");
    let dropdownFrom = document.getElementById("currencyTypeFrom");
    const url = "https://api.exchangerate-api.com/v4/latest/USD";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);
            var text = "";
            for (var i in json.rates) {
                text += "<option value=\"" + i + "\">" + i + "</option>"
            }
            dropdownTo.innerHTML = text;
            dropdownFrom.innerHTML = text;
        });
}

function submitCurrency() {
        const currencyFrom = document.getElementById("currencyTypeFrom").value;
        const currencyTo = document.getElementById("currencyTypeTo").value;
        const value = document.getElementById("moneyInput").value;
        console.log("value is " + currencyFrom);
        console.log("moneyInput is " + value);

        if (currencyFrom === "")
            return;
        console.log(currencyFrom);

        const url = "https://api.exchangerate-api.com/v4/latest/" + currencyFrom;
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log(json);
                var text = "";
                var result = json.rates[currencyTo]
                console.log("RESULT: " + result)
                console.log("value * result: " + (value * result))
                
                document.getElementById("currencyResult").innerHTML = (value * result).toFixed(2);
            });
}