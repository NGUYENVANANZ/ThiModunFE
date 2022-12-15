function deatail(){
    let id = localStorage.getItem("idCity");
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/deatil/" + id,
        success: function (data) {

            let std = `
            <h1>Thành Phố ${data.nameCity}</h1>
            <p>Tên ${data.nameCity}</p>
            <p>Quốc gia ${data.country.nameCountry}</p>
            <p>Diện tích ${data.area}</p>
            <p>Dân số ${data.population}</p>
            <p>GDP ${data.gdp}</p>
            <p>Giới thiệu :</p>
            <p>${data.describe_}</p>
            <a onclick="edit(${data.id})" type="button" class="btn btn-primary">Chỉnh sửa</a><a onclick="delete_(${data.id})" type="button" class="btn btn-danger">Xóa</a>
            `;

            document.getElementById("detailCity").innerHTML = std;


        },
        error: function (error) {
            console.log(error);
        }
    });
}

deatail();

function edit(id){
    localStorage.setItem("idCity", id);
    location.href = "editCity.html"
}

function delete_(id){
    localStorage.setItem("idCity", id);
    location.href = "deleteCity.html"
}