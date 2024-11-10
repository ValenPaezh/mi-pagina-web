document.getElementById('RegistroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const Nombre = document.getElementById('Nombre').value;
    const Apellido = document.getElementById('Apellido').value;
    const Correo = document.getElementById('Correo').value;
    const Contraseña = document.getElementById('Contraseña').value;
    const Genero = document.getElementById('Genero').value;

    const usuario = { Nombre, Apellido, Correo, Contraseña, Genero };

    localStorage.setItem ('usuario', JSON.stringify(usuario)) //Para almacenar 

    window.location.href = 'login.html';  //Para redirigir 

});
