document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const errorMessage = document.getElementById('errorMessage');

// Пример проверки учетных данных
if (username === 'user' && password === 'password') {
alert('Успешный вход!');
// Перен
