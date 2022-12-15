function deleteCity() {
    let id = localStorage.getItem("idCity");
    $.ajax({
        type: "Delete", headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, url: "http://localhost:8080/delete/" + id, success: function (data) {
            location.href = "home.html"
        }, error: function (error) {
            console.log(error);
        }
    });
}