const body = document.body;
const authBox = document.querySelector('.auth-box');
const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');

function switchTheme() {
    body.classList.toggle("dark-mode");
    authBox.classList.toggle("dark-mode");
    document.querySelectorAll('input').forEach(input => {
        input.classList.toggle("dark-mode");
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.toggle("dark-mode");
    });
    document.querySelectorAll('h1').forEach(h1 => {
        h1.classList.toggle("dark-mode");
    });
}

function toggleForms() {
    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    }
}

// Adicione o tratamento dos eventos de submit dos formulários, se necessário.
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de login
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Lógica de registro
});
