// form.js
const saveButton = document.querySelector("#save"); // select save button
const loadButton = document.querySelector("#load"); // select load button
const showButton = document.querySelector("#show"); // select show button

const alertBox = document.querySelector(".alert"); // select alert display div
const url = location.href; //  href for the page

window.onload = function () {
    idTable ="events"
    idForm ="formEvento"
    loadData(idTable,idForm)
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

const loadData = (idTable, idform) => {
    let data = JSON.parse(localStorage.getItem(idform))
    let tableData = data.map(user => (

        `         
        <tr>
        <td>${user[idform].listEvent}</td>
        <td>${user[idform].jornalistas}</td>
        <td>${user[idform].listIntern}</td>
        <td>${user[idform].material_info}</td>
        </tr>

    `
    )).join('');

    let tbody = document.querySelector(`#${idTable}`);
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



/**
 * This function populates the form
 * with data from localStorage
 *
 */
