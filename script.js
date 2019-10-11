/*global fetch*/
function init() {
    let dropdown = document.getElementById("currencyType");
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
            dropdown.innerHTML = text;
        });
}

function submitCurrency() {
        const currency = document.getElementById("currencyType").value;
        const value = document.getElementById("moneyInput").value;
        console.log("value is " + currency);
        console.log("moneyInput is " + value);

        if (currency === "")
            return;
        console.log(currency);

        const url = "https://api.exchangerate-api.com/v4/latest/" + currency;
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                console.log(json);
                var text = "";
                var result = json.rates["USD"]
                console.log("RESULT: " + result)
                console.log("result * value: " + (result*value))
                
                document.getElementById("currencyResult").innerHTML = (result * value);
            });
}