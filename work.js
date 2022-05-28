
// form.js
const formId = "formHire"; // ID of the form
const formIdIntern = "formIntern";

const url = location.href; //  href for the page
//const formIdentifier = `${url} ${formId}`; // Identifier used to identify the form
const formIdentifier = `${formId}`; // Identifier used to identify the form
const formIdentifierIntern = `${formIdIntern}`; // Identifier used to identify the form
const submitButton = document.querySelector("#submit"); // select submit button
const alertBox = document.querySelector(".alert"); // select alert display div
let form = document.querySelector(`#${formId}`); // select form
let formIntern = document.querySelector(`#${formIdIntern}`); // select form
let formElements = form.elements; // get the elements in the form
let formElementsIntern = formIntern.elements; // get the elements in the form

/**
 * This function gets the values in the form
 * and returns them as an object with the
 * [formIdentifier] as the object key
 * @returns {Object}
 */
const getFormData = () => {
    let data = { [formIdentifier]: {} };
    for (const element of formElements) {
        if (element.name.length > 0) {
            data[formIdentifier][element.name] = element.value;
        }
    }
    return data;
};

const getFormData2 = () => {
    let data = {};
    for (const element of formElements) {
        if (element.name.length > 0) {
            data[element.name] = element.value;
        }
    }
    return data;
};


submitButton.onclick = event => {
    event.preventDefault();
    data = getFormData();
    console.log(data);
    SaveDataToLocalStorage(data);
}

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
const loadData = () => {
    let data = JSON.parse(localStorage.getItem("form"))
    console.log(data)
    let tableData = data.map(user => (
        `
      <tr>
        <td>${user.nome}</td>
        <td>${user.dataIn}</td>
        <td>${user.dataFin}</td>
        <td>${user.dob}</td>
      </tr>
    `
    )).join('');

    let tbody = document.querySelector('#tbbody');
    tbody.innerHTML = tableData;

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
const populateForm = () => {
    if (localStorage.key(formIdentifier)) {
        const savedData = JSON.parse(localStorage.getItem(formIdentifier)); // get and parse the saved data from localStorage
        for (const element of formElements) {
            if (element.name in savedData) {
                element.value = savedData[element.name];
            }
        }
        const message = "Form has been refilled with saved data!";
        displayAlert(message);
    }

const populateFormIntern = () => {
        if (localStorage.key(formIdentifierIntern)) {
            const savedData = JSON.parse(localStorage.getItem(formIdentifierIntern)); // get and parse the saved data from localStorage
            for (const element of formElementsIntern) {
                if (element.name in savedData) {
                    element.value = savedData[element.name];
                }
            }
            const message = "Form has been refilled with saved data!";
            displayAlert(message);
        }
    }
};