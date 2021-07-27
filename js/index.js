const $form = document.getElementById("form");
const $nameUser = document.getElementById("name-user");
const $emailUser = document.getElementById("email");
const $passwordUser = document.getElementById("password");
const $btnSubmit = document.getElementById("btn-submit");
const $warningText = document.getElementById("warning-message");
const $paragraph = document.getElementById("message");

$form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    $paragraph.innerHTML = '';
    // regular expression
    let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

    if ($nameUser.value.length < 5 || $nameUser.value.length > 40) {
        $paragraph.innerHTML = 'Incorrect name <br>';    
    }
    if (!regexEmail.test($emailUser.value)) {
        $paragraph.innerHTML += 'Incorrect email <br>';
    }
    if ($passwordUser.value.length < 8) {
        $paragraph.innerHTML += 'Incorrect password';
    }

    if ($paragraph.innerHTML.length < 1) {
        $paragraph.innerHTML = 'Enviado'
    }
})