document.addEventListener("DOMContentLoaded", function () {

    const Email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Seleccionar elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')

    // Asignar eventos

    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    function validar(e) {
        if(e.target.value.trim() === ''){
            mostrarAlert(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlert('El email no es valido', e.target.parentElement)
            return;
        }

        limpiarAlerta(e.target.parentElement);

        // asignar los valores
        email[e.target.name] = e.target.value.trim().toLocaleLowerCase()

        console.log(email)
    }

    function mostrarAlert(mensaje, referencia) {
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-700', 'text-white', 'p-2', 'text-center', 'rounded-lg')

        // Inyectar el error al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-700')
        if(alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

});