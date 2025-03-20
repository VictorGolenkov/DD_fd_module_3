//Вариант 3
function loadData(dataPath) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', dataPath, false);
    xhr.send();
    if (xhr.status !== 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
    }
    else {
        alert(xhr.responseText);
    }
}
loadData("data.json");
loadData("data1.json");
