document.getElementById("weatherSubmit").addEventListener("click", function(event) {

    event.preventDefault();
    const currency = document.getElementById("weatherInput").value;
    console.log("value is ", currency)

    if (currency === "")
        return;
    console.log(currency);
    
    const url = "https://api.exchangerate-api.com/v4/latest/" + currency;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log(json);

            
        });


});



