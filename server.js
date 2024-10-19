const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Регистрация пользователя
app.post('/register', (req, res) => {
const { username, password } = req.body;
const data = `Username: ${username}, Password: ${password}\n`;
fs.appendFileSync('passwords.txt', data);
res.send('Регистрация прошла успешно!');
});

// Вход пользователя
app.post('/login', (req, res) => {
const { username, password } = req.body;
const data = `Login Username: ${username}, Password: ${password}\n`;
fs.appendFileSync('login_attempts.txt', data);
res.send('Вход выполнен успешно!');
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
