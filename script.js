const form = document.querySelector('#myForm');

var ul = document.querySelector('ul');

form.addEventListener('submit', onCall);

const apiUrl = 'https://crudcrud.com/api/eb1177677e4e492994d33a1d499c2f1c/appointments';


window.addEventListener('load', function () {
    axios.get(apiUrl).then(function (response) {
        const appointments = response.data;
        for (const id in appointments) {
            const appointment = appointments[id];
            const li = createAppointmentLi(appointment);
            // ul.appendChild(li);
        }
    }).catch(function (error) {
        console.error(error);
    });
});

function onCall(e) {
    e.preventDefault();

    let name = document.getElementById('name').value; // e.target.name.value;
    let mail = document.getElementById('mail').value; // e.target.mail.value;
    let phone = document.getElementById('phone').value; // e.target.phone.value;
    let date = document.getElementById('date').value; // e.target.date.value;
    let time = document.getElementById('time').value; // e.target.time.value;
    let items = document.querySelector('#users');


    let user = {
        name: name,
        mail: mail,
        phone: phone,
        date: date,
        time: time
    };


    var userStr = JSON.stringify(user);

    // localStorage.setItem(mail, userStr);

    axios.post(apiUrl, user).then(function (response) {
        console.log(response);


        // var userPar = JSON.parse(localStorage.getItem(mail));

        axios.get(apiUrl).then(function (response) {
            console.log(response);
            var userPar = response.data[response.data.length - 1];

            createAppointmentLi(userPar);

        }).catch(function (error) {
            console.error(error);
        })

    }).catch(function (error) {
        console.error(error);
    })

    document.querySelector('form').reset();
}

function createAppointmentLi(userPar) {
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(JSON.parse(localStorage.getItem(mail))));
    li.innerHTML = userPar.name + ' ' + userPar.mail + " " + userPar.phone + ' ' + userPar.date + ' ' + userPar.time;
    li.style.color = "black";
    li.style.backgroundColor = '#f4f4f4';

    var editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.className = 'btn btn-success btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.addEventListener('click', editItem);

    var delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));
    delBtn.addEventListener('click', removeItem);

    li.appendChild(delBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);

    ul.style.border = 'solid 2px black';
    ul.style.borderRadius = '5px';

    function editItem() { // Showing User Details on respective input field so that user can directly edit there.
        document.getElementById('name').value = userPar.name;
        document.getElementById('mail').value = userPar.mail;
        document.getElementById('phone').value = userPar.phone;
        document.getElementById('time').value = userPar.time;
        document.getElementById('date').value = userPar.date;

        editBtn.removeEventListener('click', editItem);
        editBtn.textContent = 'Save';
        editBtn.addEventListener('click', updateItem);
    }

    function updateItem() {
        var editedUser = {
            name: document.getElementById('name').value,
            mail: document.getElementById('mail').value,
            phone: document.getElementById('phone').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value
        };

        axios.put(apiUrl + '/' + userPar._id, editedUser).then(function (response) {
            console.log(response);
            li.innerHTML = editedUser.name + ' ' + editedUser.mail + " " + editedUser.phone + ' ' + editedUser.date + ' ' + editedUser.time;
            li.style.color = "black";
            li.style.backgroundColor = '#f4f4f4';

            var editBtn = document.createElement('button');
            editBtn.type = 'button';
            editBtn.className = 'btn btn-success btn-sm float-right edit';
            editBtn.appendChild(document.createTextNode('Edit'));
            editBtn.addEventListener('click', editItem);

            var delBtn = document.createElement('button');
            delBtn.type = 'button';
            delBtn.className = 'btn btn-danger btn-sm float-right delete';
            delBtn.appendChild(document.createTextNode('Delete'));
            delBtn.addEventListener('click', removeItem);

            li.appendChild(delBtn);
            li.appendChild(editBtn);
            document.querySelector('form').reset();
        }).catch(function (error) {
            console.error(error);
        });
    }


    function removeItem() {
        if (confirm('Are you sure you want to delete?')) {
            ul.removeChild(li);
            axios.delete(apiUrl + '/' + userPar._id).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
}
