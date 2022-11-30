function onCall(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;//e.target.name.value;
    var mail = document.getElementById('mail').value; //e.target.mail.value;
    var phone = document.getElementById('phone').value; //e.target.phone.value;
    var date = document.getElementById('date').value; //e.target.date.value;
    var time = document.getElementById('time').value; //e.target.time.value;

    var user = {
        name: name,
        mail: mail,
        phone: phone,
        date: date,
        time: time,
    };


    var userStr = JSON.stringify(user);

    localStorage.setItem(mail, userStr);

    var ul = document.querySelector('ul');
    ul.style.border = 'solid 2px black';
    for (var i = 0; i < localStorage.length; i++) {

        var userPar = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var li = document.createElement('li');

        li.className = 'list-group-item';
        li.appendChild(document.createTextNode(JSON.parse(localStorage.getItem(mail))));

        li.innerHTML = (i + 1) + '. ' + userPar.name + ' ' + userPar.mail + " " + userPar.phone + ' ' + userPar.date + ' ' + userPar.time;
        li.style.color = "black";
        li.style.backgroundColor = '#f4f4f4';
        ul.appendChild(li);
    }

    document.querySelector('form').reset();
}
