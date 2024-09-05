const name = document.getElementById('name');
const email = document.getElementById('email');
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');

form.addEventListener('submit', (e) => {
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let isValid = true;

    // Validasi Nama
    if (name.value === '' || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
        isValid = false;
    } else {
        name_error.innerHTML = "";
    }

    // Validasi Email
    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
        isValid = false;
    } else {
        email_error.innerHTML = "";
    }

    // Cegah pengiriman form jika tidak valid
    if (!isValid) {
        e.preventDefault();
    }
});
