function formValidate() {

    var name = document.forms['RefForm']['Name'];
    var email = document.forms['RefForm']['Email'];
    var phone = document.forms['RefForm']['Phone'];
    var password = document.forms['RefForm']['Password'];
    var cpassword = document.forms['RefForm']['cPassword'];
    var address = document.forms['RefForm']['Address'];

    var errname = document.getElementById('name');
    var erremail = document.getElementById('email');
    var erraddress = document.getElementById('address');
    var errpass = document.getElementById('pwd');
    var errcpass = document.getElementById('cpwd');
    var errphone = document.getElementById('phone');

    if(name.value.length < 4) {
        errname.innerText = 'Atleast 4 characters requited';
        name.focus();
        return false;
    }
    else {
        errname.innerText ="";
    }

    if(address.value == '') {
        erraddress.innerText = 'Address field cannot be empty';
        address.focus();
        return false;
    }
    else {
        erraddress.innerText = "";
    }

    if(email.value == '') {
        erremail.innerText = "Email cannot be empty";
        email.focus();
        return false;
    }
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))  {
        erremail.innerText = "";
    }
    else {
        erremail.innerText = 'Email is invalid';
        email.focus();
        return false;
    }

    if(password.value == ""){
        errpass.innerText = 'Password Cannot Be Empty'
        password.focus();
        return false;
    }
    else if (password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
        errpass.innerText = "";
    }
    else {
        errpass.innerText = "Password is invalid"
        password.focus();
        return false;
    }

    if(cpassword.value == ""){
        errcpass.innerText = "Password is invalid"
        cpassword.focus();
        return false;
    }
    else if (cpassword.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
        errcpass.innerText = "";
    }
    else {
        errcpass.innerText = "Password is invalid"
        cpassword.focus();
        return false;
    }

    if(phone.value == ""){
        errphone.innerText = "Phone field cannot be empty";
        phone.focus();
        return false;
    }
    else {
        errphone.innerText = "";
    }
}