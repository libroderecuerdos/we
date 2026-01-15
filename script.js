const formulario = document.getElementById('formulario');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', (e) => {
 e.preventDefault();
 const nombre = document.getElementById('nombre').value;
 const apellido = document.getElementById('apellido').value;
 const email = document.getElementById('email').value;
 const contraseña = document.getElementById('contraseña').value;

 const usuario = {
 nombre,
 apellido,
 email,
 contraseña
 };

 if (localStorage.getItem(email)) {
 mensaje.innerText = 'El email ya está registrado';
 } else {
 localStorage.setItem(email, JSON.stringify(usuario));
 mensaje.innerText = 'Usuario registrado con éxito!';
 formulario.reset();
 // Redirigir a la página de inicio de sesión
 setTimeout(() => {
 window.location.href = 'login.html';
 }, 2000);
 }
});