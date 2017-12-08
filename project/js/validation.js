var username = document.getElementById('username');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var text = document.getElementById('text');

function warning(input) {
    input.className = "form-control";
    input.className += " is-invalid";
}

function valid(input) {
    input.className = "form-control";
    input.className += " is-valid";
}

function shoWarning(divclass, message) {
    document.querySelector('div.' + divclass).innerText = '';
    document.querySelector('div.' + divclass).innerText = message;
}

function validate(regex, input, len) {
    var name = input.value.trim();
    var message_div = "invalid-feedback-" + input.id;

    if (name === "") {
        warning(input);
        shoWarning(message_div, "Поле не может быть пустым.");
    } else if (regex.test(name) === false) {
        warning(input);
        shoWarning(message_div, "Данные не валидны.");
    } else if (name.length <= len) {
        warning(input);
        shoWarning(message_div, "Ввод не должен быть короче " + len + " символов.");
    } else {
        shoWarning(message_div, "");
        valid(input);
    }
}

username.addEventListener('input', function() {
    validate(/^[а-яА-Яa-zA-Z]+$/, this, 3);
});

email.addEventListener('input', function() {
    validate(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, this, 5);
});

phone.addEventListener('input', function() {
    validate(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, this, 6);
});

text.addEventListener('input', function() {
    validate(/^[а-яА-Яa-zA-Z0-9.,!? ]*$/, this, 80 - this.value.length);
});