const body = document.body;
const loginBox = document.querySelector( '.login-box');
const h1 = document.getElementsByTagName( '.h1');
const input = document.querySelectorAll( '.input');
const loginButton = document.getElementById( '.login-button');

function switchTheme() {
    loginBox.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    h1.classlist.toggle("dark-mode");
    inputs.foreach(input => {
        input.classlist.toggle("dark-mode")
    } );
    loginButton.ckasslist.toggle("dark-mode");
    h2.classlist.toggle("dark-mode");
}