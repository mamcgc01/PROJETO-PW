// form.js
const saveButton = document.querySelector("#save"); // select save button
const loadButton = document.querySelector("#load"); // select load button
const showButton = document.querySelector("#show"); // select show button

const alertBox = document.querySelector(".alert"); // select alert display div
const url = location.href; //  href for the page

window.onload = function () {

    idTable = "hire"
    idForm = "formHire"
    loadData(idTable, idForm);
    idTable2 = "intern"
    idForm2 = "formIntern"
    loadData2(idTable2, idForm2);
    idList = "listEvent"
    loadDataList(idList, idForm)
    idList2 = "listIntern"
    loadDataList1(idList2, idForm2)
    idTable3 = "events"

}
let submitButton = document.querySelectorAll("button[name='saves']"); // select submit button


submitButton.forEach(function (elem) {
    elem.addEventListener("click", function () {
        //const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
        formId = this.value;
        console.log(formId);
        alert(formId);
        const formIdentifier = `${formId}`; // Identifier used to identify the form
        let form = document.querySelector(`#${formId}`); // select form
        let formElements = form.elements; // get the elements in the form
        const getFormData = () => {
            let data = { [formIdentifier]: {} };
            for (const element of formElements) {
                if (element.name.length > 0) {
                    data[formIdentifier][element.name] = element.value;
                }
            }
            return data;
        };

        data = getFormData();
        console.log(data);
        SaveDataToLocalStorage(data, formIdentifier);

        /**
         * This function gets the values in the form
         * and returns them as an object with the
         * [formIdentifier] as the object key
         * @returns {Object}
         */


        function SaveDataToLocalStorage(data, formIdentifier) {
            let a = [];
            // Parse the serialized data back into an aray of objects
            a = JSON.parse(localStorage.getItem(formIdentifier)) || [];
            console.log(a)
            // Push the new data (whether it be an object or anything else) onto the array
            a.push(data);
            // Alert the array value
            // Re-serialize the array back into a string and store it in localStorage
            localStorage.setItem(formIdentifier, JSON.stringify(a));
        }
    }

    )
});
/**
 * This function displays a message
 * on the page for 1 second
 *
 * @param {String} message
 */
const displayAlert = message => {
    alertBox.innerText = message;
    alertBox.style.display = "block";
    setTimeout(function () {
        alertBox.style.display = "none";
    }, 1000);
};

//localStorage.getItem(dataObj);
const loadData = (idTable, idform) => {
    let data = JSON.parse(localStorage.getItem(idform))
    let tableData = data.map(user => (

        `         
        <tr>
        <td>${user[idform].nome}</td>
        <td>${user[idform].orcamento}</td>
        <td>${user[idform].localizacao}</td>
        <td>${user[idform].dataIn}</td>
        <td>${user[idform].dataFin}</td>
        <td>${user[idform].numJornalistas}</td>
        <td>${user[idform].riskLevel}</td>
        <td>${user[idform].complexityLevel}</td>
        <td>${user[idform].addictional_text}</td>
        </tr>

    `
    )).join('');

    let tbody = document.querySelector(`#${idTable}`);
    tbody.innerHTML = tableData;

}

const loadDataList = (idList, idForm) => {
    let dropdown = document.getElementById(idList);
    let data = JSON.parse(localStorage.getItem(idForm));
    let option;
    data.forEach(user => {
        option = document.createElement('option');
        option.text = user[idForm].nome;
        option.value = user[idForm].nome;
        dropdown.add(option);
    });

}

const loadDataList1 = (idList, idForm) => {
    let dropdown = document.getElementById(idList);
    let data = JSON.parse(localStorage.getItem(idForm));
    let option;
    data.forEach(user => {
        option = document.createElement('option');
        option.text = user[idForm].name;
        option.value = user[idForm].name;
        dropdown.add(option);
    });

}





const loadData2 = (idTable2, idform2) => {
    let data = JSON.parse(localStorage.getItem(idform2))
    let tableData2 = data.map(user => (
        `
        <tr>
        <td>${user[idform2].name}</td>
        <td>${user[idform2].email}</td>
        </tr>
    `
    )).join('');

    let tbody = document.querySelector(`#${idTable2}`);
    tbody.innerHTML = tableData2;

}

function SaveDataToLocalStorage(data) {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("form")) || [];
    console.log(a)
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("form", JSON.stringify(a));
}

function SaveDataToLocalStorageIntern(data) {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("formIntern")) || [];
    console.log(a)
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem("formIntern", JSON.stringify(a));
}

/**
 * This function populates the form
 * with data from localStorage
 *
 */
