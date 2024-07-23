//const { response } = require("express");

document.addEventListener('DOMContentLoaded', ()=> {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => console.log(data));
    loadHTMLTable([]);
});

function loadHTMLTable(data) {
    const table = document.querySelector('table tbody');
    //let tableHtml = "";
    if (data.length === 0) {
        table.innerHTML = "<tr class='no-data colspan='5' align='center'>Aucune Donnee Disponible</tr>";
    }

}