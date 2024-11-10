document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById('login-email').value;
    const loginContraseña = document.getElementById('login-contraseña').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario && usuario.Correo === loginEmail && usuario.Contraseña === loginContraseña) {
        alert('Inicio de sesion exitoso')
        window.location.href = 'index.html'
    }
    else {
        alert('No puede iniciar sesion. Credenciales incorrectas');
    }
});

