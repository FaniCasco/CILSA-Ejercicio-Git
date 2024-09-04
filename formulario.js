function validarFormulario() {
    const campos = document.querySelectorAll('input[required]');
    let esValido = true;

    campos.forEach(campo => {
        if (!campo.checkValidity()) {
            campo.setCustomValidity(campo.title);
            esValido = false;
        } else {
            campo.setCustomValidity('');
        }
    });

    // Verificación del honeypot para protección contra SPAM
    const honeypot = document.getElementById('honeypot');
    if (honeypot.value !== "") {
        return false; // Evita el envío del formulario
    }

    return esValido;
}

function aplicarEstilo1() {
    document.body.className = 'estilo-1';
}

function aplicarAltoContraste() {
    document.body.className = 'alto-contraste';
}

function validarEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');
    
    // Expresión regular para validar un formato de correo electrónico más completo
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'none'; // Oculta el mensaje de error si es válido
    } else {
        errorMessage.style.display = 'block'; // Muestra el mensaje de error si es inválido
    }
}
