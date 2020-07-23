// Chapters 49 - 52 
// Task 01
var nameElement = document.getElementById('name');
var emailElement = document.getElementById('email');
var passElement = document.getElementById('pass');
var task01Container = document.getElementById('task01Container');

function submitForm() {
    task01Container.innerHTML =
        `
        <h2>Form Details</h2>
        NAME: ${nameElement.value} <br/>
        E-Mail: ${emailElement.value} <br/>
        PASSWORD: ${passElement.value}
    `;
}

//  Task 02
var textElement = document.getElementById('textElement');
var text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque expedita iure commodi
laboriosam laborum.dolor at deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus ea reprehenderit,
deleniti impedit doloribus ratione quam perferendis optio ab quaerat incidunt tempora iusto numquam expedita
rem et, excepturi nobis dolor at deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus ea reprehenderit,
deleniti impedit doloribus ratione quam perferendis optio ab quaerat incidunt tempora iusto numquam expedita
rem et, excepturi nobis dolor at deleniti Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus ea reprehenderit,
deleniti impedit doloribus ratione quam perferendis optio ab quaerat incidunt tempora iusto numquam expedita
rem et, excepturi nobis`
var isToggled = false;
textElement.innerHTML = text.slice(0, 200);

function readMore(a) {
    if (!isToggled) {
        isToggled = true;
        a.innerText = 'Read More';
        textElement.innerHTML = `${text.slice(0, 200)}...`;
    } else {
        isToggled = false;
        a.innerText = 'Show Less';
        textElement.innerHTML = text;
    }

}

//  Task 03
var dataTable = document.getElementById('table1');
var idElement = document.getElementById('id');
var nameElement = document.getElementById('stdName');
var classElement = document.getElementById('class');
var task03Container = document.getElementById('task03Container');
var editStd = document.getElementById('editStd');
editStd.style.visibility = 'hidden';

function addStudent() {
    var newRow = dataTable.insertRow(-1);
    newRow.innerHTML = `
    <td>${idElement.value}</td> 
    <td>${nameElement.value}</td> 
    <td>${classElement.value}</td> 
    <td><button onclick="editStudent(this)">Edit</button></td>
    <td><button onclick="deleteStudent(this)">Delete</button></td>
    `
}

function deleteStudent(e) {
    e.parentNode.parentNode.remove();
}

function editStudent(e) {
    var doneBtn = document.getElementById('doneBtn');
    if (editStd.style.visibility == 'hidden') {
        editStd.style.visibility = 'visible';

        var updateIdElement = document.getElementById('updateId');
        var updateNameElement = document.getElementById('updateStdName');
        var updateClassElement = document.getElementById('updateClass');
        var updateBtn = document.getElementById('updateBtn');

        updateIdElement.value = e.parentNode.parentNode.childNodes[1].innerText;
        updateNameElement.value = e.parentNode.parentNode.childNodes[3].innerText;
        updateClassElement.value = e.parentNode.parentNode.childNodes[5].innerText;

        updateBtn.addEventListener('click', () => {
            e.parentNode.parentNode.childNodes[1].innerText = updateIdElement.value;
            e.parentNode.parentNode.childNodes[3].innerText = updateNameElement.value;
            e.parentNode.parentNode.childNodes[5].innerText = updateClassElement.value;
        })
        doneBtn.addEventListener('click', () => {
            editStd.style.visibility = 'hidden';
        })
    } else {
        editStd.style.visibility = 'hidden';
    }
}
