const formulario = document.getElementById('form-contatos')
const nome = document.getElementById('nome-contato');
const numero = document.getElementById('numero-contato');

let contatos = []

let tableRows = '';

function resetForm() {
    nome.value = '';
    numero.value = '';
}


function addTableRow() {

    if (contatos.includes(nome.value)) {
        alert("Contato já cadastro.")
        return;
    }

    contatos.push(nome.value);

    let tableRow = '<tr>';
    tableRow += `<td><span class="material-symbols-rounded">person</span></td>`
    tableRow += `<td>${nome.value}</td>`;
    tableRow += `<td>${numero.value}</td>`;
    tableRow += `</tr>`;

    tableRows += tableRow;

    const table = document.querySelector('tbody');
    table.innerHTML = tableRows;

    console.log(tableRows);
}



formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    addTableRow();
    resetForm();
});
