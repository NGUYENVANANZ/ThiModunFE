function showCity() {
    let id = localStorage.getItem("idCity");
    $.ajax({
        type: "Get", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/edit/" + id, success: function (data) {
            document.getElementById("idCity").value = data.id;
            document.getElementById("nameCity").value = data.nameCity;
            document.getElementById("country").value = data.country.id;
            document.getElementById("dienTich").value = data.area;
            document.getElementById("danSo").value = data.population;
            document.getElementById("gpa").value = data.gdp;
            document.getElementById("comment").value = data.describe_;
        }, error: function (error) {
            console.log(error);
        }
    });
}

showCity();

function saveCity() {
    let idCity = document.getElementById("idCity").value
    let nameCity = document.getElementById("nameCity").value
    let country = document.getElementById("country").value
    let nameCountry = document.getElementById("country").value
    let dienTich = document.getElementById("dienTich").value
    let danSo = document.getElementById("danSo").value
    let gpa = document.getElementById("gpa").value
    let comment = document.getElementById("comment").value
    let city = {
        "id": idCity, "nameCity": nameCity, "area": dienTich, "population": danSo, "describe_": comment, "country": {
            "id": country,
            "nameCountry": nameCountry

        }, "gdp": gpa
    }
    $.ajax({
        type: "Post", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/edit", data: JSON.stringify(city), success: function (data) {
            location.href = "home.html"
        }, error: function (error) {
            console.log(error);
        }
    });
}