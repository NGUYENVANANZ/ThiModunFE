function showCountry() {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/showCountry",
        success: function (data) {

            let std = "";
            for (let i = 0; i < data.length; i++) {
                std +=  `<option value="${data[i].id}" id="${data[i].id}">${data[i].nameCountry}</option>`
            }

            document.getElementById("country").innerHTML = std;


        },
        error: function (error) {
            console.log(error);
        }
    });
}
showCountry();