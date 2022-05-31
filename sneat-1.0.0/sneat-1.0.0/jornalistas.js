var jornalistas = [
    {
        "nome": "João António",
        "password": "1234",
        "genero": "masculino",
        "idade": 24,
        "disponibilidade": true
    },
    {
        "nome": "Rui Silva",
        "password": "1234",
        "genero": "masculino",
        "idade": 34,
        "disponibilidade": true
    },
    {
        "nome": "Rita Oliveira",
        "password": "1234",
        "genero": "feminino",
        "idade": 47,
        "disponibilidade": true
    },
    {
        "nome": "Sofia Costa",
        "password": "1234",
        "genero": "feminino",
        "idade": 21,
        "disponibilidade": true
    },
    {
        "nome": "José Pereira",
        "password": "1234",
        "genero": "masculino",
        "idade": 32,
        "disponibilidade": true
    },
    {
        "nome": "Miguel Estevão",
        "password": "1234",
        "genero": "masculino",
        "idade": 24,
        "disponibilidade": true
    },
    {
        "nome": "Ricardo Monteiro",
        "password": "1234",
        "genero": "masculino",
        "idade": 45,
        "disponibilidade": true
    }

]


buildTable(jornalistas);



function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        if (data[i].disponibilidade === true) {
            var row = `<tr>
							<td>${data[i].nome}</td>
							<td>${data[i].genero}</td>
							<td>${data[i].idade}</td>
					  </tr>`
            table.innerHTML += row
        }

    }
}
loadListJorn(jornalistas);

function loadListJorn(data) {
    let chooseJorn = document.getElementById('chooseJorn');
    let input;
    let label;
    for (var i = 0; i < data.length; i++)
        if (data[i].disponibilidade === true) {
            input = document.createElement('input');
            console.log(data[i].nome);
            input.class = 'form-check-input';
            input.type = 'checkbox';
            input.name = 'jornalistas';
            input.value = data[i].nome;
            input.id = 'data[i].nome;'
            chooseJorn.append(input);
            label = document.createElement('label');
            label.class = 'form-check-label';
            label.for = data[i].nome;
            label.textContent = data[i].nome;
            chooseJorn.append(label);
        };

}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function alterarDisponibilidade(){
    
}