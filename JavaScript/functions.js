let archivosSeleccionados = []; // Array para almacenar los archivos seleccionados

// Valida si los campos están completos
function validarCampos() {
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const botonEnviar = document.getElementById("boton-enviar");

    // Verificar si todos los campos están llenos
    if (nombre !== "" && email !== "" && asunto !== "" && mensaje !== "") {
        botonEnviar.disabled = false;
        botonEnviar.style.backgroundColor = "var(--color-de-botones)";
    } else {
        botonEnviar.disabled = true;
        botonEnviar.style.backgroundColor = "grey";
    }
}

// Valida los campos del formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const mensajeError = document.getElementById("mensaje-error");

    // Limpiar mensajes de error anteriores
    mensajeError.innerHTML = "";

    // Validar campo nombre
    if (nombre === "") {
        mensajeError.innerHTML += "El campo Nombre no debe estar en blanco.<br>";
    } else if (nombre.length > 50) {
        mensajeError.innerHTML += "El campo Nombre no debe exceder los 50 caracteres.<br>";
    }

    // Validar campo email
    if (email === "") {
        mensajeError.innerHTML += "El campo E-mail no debe estar en blanco.<br>";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensajeError.innerHTML += "El campo E-mail debe tener un formato válido (ej. texto@texto.com).<br>";
        }
    }

    // Validar campo asunto
    if (asunto === "") {
        mensajeError.innerHTML += "El campo Asunto no debe estar en blanco.<br>";
    } else if (asunto.length > 50) {
        mensajeError.innerHTML += "El campo Asunto no debe exceder los 50 caracteres.<br>";
    }

    // Validar campo mensaje
    if (mensaje === "") {
        mensajeError.innerHTML += "El campo Mensaje no debe estar en blanco.<br>";
    } else if (mensaje.length > 300) {
        mensajeError.innerHTML += "El campo Mensaje no debe exceder los 300 caracteres.<br>";
    }

    // Si no hay errores, el formulario se puede enviar
    if (mensajeError.innerHTML === "") {
        // Alerta usando SweetAlert2 cuando el formulario es válido
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado correctamente',
            text: '¡Gracias por contactarnos!',
            confirmButtonText: 'Aceptar'
        });

        return true; // Permite el envío del formulario
    }

    return false; // Evita el envío si hay errores
}

// Agregar el evento de validación al enviar el formulario
document.querySelector('.form-contacto').addEventListener('submit', function (event) {
    // Si la validación falla, prevenimos el envío del formulario
    if (!validarFormulario()) {
        event.preventDefault();
    }
});