function onCall(e) {
    // localStorage.setItem('UserName', e.target.name.value);
    // localStorage.setItem('UserMail', e.target.mail.value);
    // localStorage.setItem('UserPhone', e.target.phone.value);
    // localStorage.setItem('UserDate', e.target.date.value);
    // localStorage.setItem('UserTime', e.target.time.value);

    var name = e.target.name.value;
    var mail = e.target.mail.value;
    var phone = e.target.phone.value;
    var date = e.target.date.value;
    var time = e.target.time.value;

    let user = {
        name: name,
        mail: mail,
        phone: phone,
        date: date,
        time: time,
    }

    let userStr = JSON.stringify(user);

    localStorage.setItem('User',userStr);

    let userPar = JSON.parse(localStorage.getItem('User'));

    console.log(userPar);
    console.log(userStr);
}