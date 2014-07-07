var datas;

function showLoading() {
    alert("loading");
    // как-то показываем загрузку
}

function showOnlines(data) {
    // показываем онлайны

    document.getElementById("text").innerHTML = data;
    datas = data;
}

function showError(data) {
    // показываем ошибку
    alert(data);
}

function changeText() {
    showLoading();
    $.ajax({
        url: 'onlines.php',
        type: 'GET',
        success: function (data) {
            showOnlines(data);
        },
        fail: function (data) {
            alert(data);
        },
        error: function (data) {
            showError(data);
        }

    });
} {
    var durov = JSON.stringify(datas));
console.log(JSON.parse(durov));
}