function creat() {
    let nameCity = document.getElementById("nameCity").value
    let country = document.getElementById("country").value
    let nameCountry = document.getElementById("country").value
    let dienTich = document.getElementById("dienTich").value
    let danSo = document.getElementById("danSo").value
    let gpa = document.getElementById("gpa").value
    let comment = document.getElementById("comment").value

    let city = {
        "nameCity": nameCity, "area": dienTich, "population": danSo, "describe_": comment, "country": {
            "id": country, "nameCountry": nameCountry

        }, "gdp": gpa
    }
    $.ajax({
        type: "Post", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/creat", data: JSON.stringify(city), success: function (data) {
            alert("thêm thành công")
            location.href = "home.html"
        }, error: function (error) {
            console.log(error);
        }
    });
}

function check() {
    let dienTich = document.getElementById("dienTich").value
    let danSo = document.getElementById("danSo").value
    let gpa = document.getElementById("gpa").value
    if (dienTich < 50 || danSo < 50 || gpa < 50) {
        alert("diện tích, dân số, gpa phải hơn 50")
    } else {
        creat();
    }

}


