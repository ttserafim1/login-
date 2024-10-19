document.getElementById('registerForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
fetch('/register', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password })
})
.then(response => response.text())
.then(data => alert(data))
.catch(error => console.error('Error:', error));
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();
const username = document.getElementById('loginUsername').value;
const password = document.getElementById('loginPassword').value;
fetch('/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ username, password })
})
.then(response => response.text())
.then(data => alert(data))
.catch(error => console.error('Error:', error));
});
