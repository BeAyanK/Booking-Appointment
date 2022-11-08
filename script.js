function onCall(e) {
    // e.preventDefault();
    // console.log(e.target.name.value);
    // console.log(e.target.mail.value);
    // console.log(e.target.phone.value);
    // console.log(e.target.date.value);
    // console.log(e.target.time.value);

    // var obj = new Array;
    // obj.push({'name':e.target.name.value});
    // obj.push({'mail':e.target.mail.value});
    // obj.push({'phone':e.target.phone.value});
    // obj.push({'date':e.target.date.value});
    // obj.push({'time':e.target.time.value});

    // console.log(obj);

    // localStorage.setItem('User', obj.);

    localStorage.setItem('UserName', e.target.name.value);
    localStorage.setItem('UserMail', e.target.mail.value);
    localStorage.setItem('UserPhone', e.target.phone.value);
    localStorage.setItem('UserDate', e.target.date.value);
    localStorage.setItem('UserTime', e.target.time.value);
}