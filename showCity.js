function showCity(){
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/show",
        success: function (data) {

            let std = "";
            for (let i = 0; i < data.length; i++) {
                std +=  `<tr>
<td>${i+1}</td>
<td><a onclick="deatailCity(${data[i].id})">${data[i].nameCity}</a></td>
<td>${data[i].country.nameCountry}</td>
<td><a onclick="edit(${data[i].id})">Chỉnh Sửa</a> | <a onclick="delete_(${data[i].id})">Xóa</a></td>
</tr>`
            }

            document.getElementById("tbody").innerHTML = std;


        },
        error: function (error) {
            console.log(error);
        }
    });
}
showCity();

function deatailCity(id){
    localStorage.setItem("idCity", id);
    location.href = "detailCity.html"
}

function edit(id){
    localStorage.setItem("idCity", id);
    location.href = "editCity.html"
}

function delete_(id){
    localStorage.setItem("idCity", id);
    location.href = "deleteCity.html"
}