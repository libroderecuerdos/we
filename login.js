const loginFormulario = document.getElementById('login-formulario');
const mensajeLogin = document.getElementById('mensaje-login');

loginFormulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const email = document.getElementById('email').value;
 const contraseña = document.getElementById('contraseña').value;

 const usuario = JSON.parse(localStorage.getItem(email));

 if (usuario && usuario.contraseña === contraseña) {
 mensajeLogin.innerText = 'Inicio de sesión exitoso!';
 // Redirigir a la página principal
 window.location.href = 'galeria.html';
 } else {
 mensajeLogin.innerText = 'Email o contraseña incorrectos';
 }
});