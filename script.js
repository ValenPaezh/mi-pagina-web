function checkLoginStatus() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if (usuario) {
        document.getElementById('user-info').textContent = `Bienvenido, ${usuario.Correo}`;
        document.getElementById('user-info').style.display = 'block';
        document.getElementById('logout-button').style.display = 'block';
        document.getElementById('login-button').style.display = 'none';
    } else {
        document.getElementById('user-info').style.display = 'none';
        document.getElementById('logout-button').style.display = 'none';
        document.getElementById('login-button').style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('usuario'); // Elimina la información del usuario del localStorage
    checkLoginStatus(); // Verifica el estado de inicio de sesión
}

// Llama a la función para verificar el estado de inicio de sesión al cargar la página
document.addEventListener('DOMContentLoaded', checkLoginStatus);
