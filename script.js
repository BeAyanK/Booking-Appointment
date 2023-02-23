const form = document.querySelector('#myForm');

form.addEventListener('submit', onCall);

function onCall(e) {
    e.preventDefault();

    let name = document.getElementById('name').value; // e.target.name.value;
    let mail = document.getElementById('mail').value; // e.target.mail.value;
    let phone = document.getElementById('phone').value; // e.target.phone.value;
    let date = document.getElementById('date').value; // e.target.date.value;
    let time = document.getElementById('time').value; // e.target.time.value;
    let items = document.querySelector('#users');

    let ul = document.querySelector('ul');

    let user = {
        name: name,
        mail: mail,
        phone: phone,
        date: date,
        time: time
    };


    var userStr = JSON.stringify(user);

    // localStorage.setItem(mail, userStr);

    axios.post('https://crudcrud.com/api/281da1e7e02545c7bcc2813a7783d1b3/appointments', user)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.error(error);
        })

    ul.style.border = 'solid 2px black';

    // var userPar = JSON.parse(localStorage.getItem(mail));
    
    var userPar = JSON.parse(localStorage.getItem(mail));

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

    function editItem() { // Showing User Details on respective input field so that user can directly edit there.
        document.getElementById('name').value = name;
        document.getElementById('mail').value = mail;
        document.getElementById('phone').value = phone;
        document.getElementById('time').value = time;
        document.getElementById('date').value = date;
        // console.log(mail);
        localStorage.removeItem(mail);
        // ul.array.forEach(li => {
        //     if (li.mail === mail) {
        //         ul.removeChild(li);
        //     }
        // });
    }


    function removeItem() {
        // console.log(mail);
        // var mail = document.getElementById('mail').value;
        if (confirm('Are You Sure?')) { // console.log(mail);

            ul.removeChild(li);
            localStorage.removeItem(mail);
        }
    }
    // for (var i = 0; i < items.length; i++) {
    //     if (items[i].mail === mail) {
    //         ul.removeChild(items[i]);

    //     }
    //     console.log(items[i].mail);
    // }

    document.querySelector('form').reset();
}
