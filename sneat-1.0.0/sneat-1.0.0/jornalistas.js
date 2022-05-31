var jornalistas = [
    {
        "nome": "João António",
        "password": "1234",
        "genero": "masculino",
        "idade": 24,
        "tipologia": "Gestor de Opereções"
    },
    {
        "nome": "Rui Silva",
        "password": "1234",
        "genero": "masculino",
        "idade": 34,
        "tipologia": "Gestor de Opereções"
    },
    {
        "nome": "Rita Oliveira",
        "password": "1234",
        "genero": "feminino",
        "idade": 47,
        "tipologia": "Cameraman"
    },
    {
        "nome": "Sofia Costa",
        "password": "1234",
        "genero": "feminino",
        "idade": 21,
        "tipologia": "Cameraman"
    },
    {
        "nome": "José Pereira",
        "password": "1234",
        "genero": "masculino",
        "idade": 32,
        "tipologia": "Fotojornalista"
    },
    {
        "nome": "Miguel Estevão",
        "password": "1234",
        "genero": "masculino",
        "idade": 24,
        "tipologia": "Fotojornalista"
    },
    {
        "nome": "Ricardo Monteiro",
        "password": "1234",
        "genero": "masculino",
        "idade": 45,
        "tipologia": "Fotojornalista"
    },
    {
        "nome": "Roberto Azevedo",
        "password": "1234",
        "genero": "masculino",
        "idade": 56,
        "tipologia": "Editor de texto"
    },
    {
        "nome": "João Santos",
        "password": "1234",
        "genero": "masculino",
        "idade": 35,
        "tipologia": "Editor de texto"
    }
]


buildTable(jornalistas);



function buildTable(data) {
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td>${data[i].nome}</td>
                        <td>${data[i].genero}</td>
                        <td>${data[i].idade}</td>
                    </tr>`
        table.innerHTML += row
    }
}
loadListJorn(jornalistas);

function loadListJorn(data) {
    let chooseJorn = document.getElementById('chooseJorn');
    let input;
    let label;
    for (var i = 0; i < data.length; i++){
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
    }

}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function verificarDisponibilidade(hire, jorn){
    value = true
    let hires = JSON.parse(localStorage.getItem("formHire"))
    hires.forEach(h => {
        if (h["formHire"]["nome"]==hire) hire = h["formHire"]
    });
    let dataInicio = new Date(hire["dataIn"]) // to
    let dataFinal = new Date(hire["dataFin"]) // from

    let events = JSON.parse(localStorage.getItem("formEvento"))
    if (events)
        events.forEach(e => {
            e["formEvento"]["jornalistas"].forEach(j => {
                if (j==jorn)
                {
                    hires.forEach(h => {
                        if (h["formHire"]["nome"]==e["formEvento"]["listEvent"]){
                            let dataInicio2 = new Date(h["formHire"]["dataIn"])
                            let dataFinal2 = new Date(h["formHire"]["dataFin"])

                            dataFinal2.setDate(dataFinal2.getDate() + parseInt(h["formHire"]["riskLevel"]));
                            if(dateCheck(dataInicio2, dataFinal2, dataInicio) || dateCheck(dataInicio2, dataFinal2, dataFinal))
                                value = false
                        }
                    });
                }
            });
        });
    return value
}

function verificarTipologia(jorns){
    let limit = 2
    let value = true

    for (let i = 0; i < jorns.length; i++) {
        jorns[i] = getJournalist(jorns[i])  
    }

    jorns.forEach(j => {
        count = 0
        jorns.forEach((j2) => (j["tipologia"] === j2["tipologia"] && count++));
        if (count>limit) value = false
    });
    return value
}

function dateCheck(from,to,check) {
    var fDate,lDate,cDate;
    fDate = Date.parse(from);
    lDate = Date.parse(to);
    cDate = Date.parse(check);

    if((cDate <= lDate && cDate >= fDate)) {
        return true;
    }
    return false;
}

function getJournalist(name) {
    for (const j of jornalistas)
        if (j["nome"] == name) return j

    return null
}

function getHire(name){
    let theHire = null
    hires = JSON.parse(localStorage.getItem("formHire")) || [];

    for (const h of hires){
         if (h["formHire"]["nome"] == name) theHire = h["formHire"]
    }

    return theHire
}