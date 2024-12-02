/*Crea un formulario de registro que pidan los siguientes datos:
 * - Nombre
 * - Apellido
 * - Correo electrónico
 * - Contraseña
 * - Confirmar contraseña
 * 
 * Validaciones:
 * - Nombre y apellido: Solo letras y espacios
 * - Correo electrónico: Debe tener un formato válido
 * - Contraseña: Mínimo una letra minúscula, una mayúscula, un número, un caracter especial (!$-_.,) y mínimo 8 caracteres
 * - Confirmar contraseña: Debe ser igual a la contraseña
 * 
 * Debes crear una interfaz gráfica para el formulario y mostrar mensajes de error en caso de que el
 * usuario ingrese datos incorrectos.*/

        

    document.getElementById('registroForm').addEventListener('submit', function(event) {
        event.preventDefault();
        validarFormulario();
    });


    function mostrarError(elementoId, mensaje) {
        const elementoError = document.getElementById(elementoId);
        elementoError.textContent = mensaje;
        elementoError.style.display = 'block';
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll('.error');
        errores.forEach(error => error.textContent = '');
    }


    function validarFormulario() {
        limpiarErrores();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmarPassword = document.getElementById('confirmarPassword').value;

    let esValido = true;

              // Validar nombre
    if (!nombre) {
        mostrarError('errorNombre', 'El nombre es requerido');
        esValido = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        mostrarError('errorNombre', 'Solo se permiten letras y espacios');
        esValido = false;
        }

              // Validar apellido
    if (!apellido) {
        mostrarError('errorApellido', 'El apellido es requerido');
        esValido = false;
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(apellido)) {
        mostrarError('errorApellido', 'Solo se permiten letras y espacios');
        esValido = false;
        }

              // Validar email
    if (!email) {
        mostrarError('errorEmail', 'El correo electrónico es requerido');
        esValido = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        mostrarError('errorEmail', 'Ingresa un correo electrónico válido');
        esValido = false;
        }

              // Validar contraseña
    if (!password) {
        mostrarError('errorPassword', 'La contraseña es requerida');
        esValido = false;
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!$\-_.,])[A-Za-z\d!$\-_.,]{8,}$/.test(password)) {
        mostrarError('errorPassword', 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial (!$-_.,)');
        esValido = false;
        }

              // Validar confirmación de contraseña
    if (!confirmarPassword) {
        mostrarError('errorConfirmarPassword', 'Debes confirmar tu contraseña');
        esValido = false;
        } else if (password !== confirmarPassword) {
        mostrarError('errorConfirmarPassword', 'Las contraseñas no coinciden');
        esValido = false;
        }

    if (esValido) {
                  // Simulación de envío exitoso
        const formulario = document.getElementById('registroForm');
        const boton = formulario.querySelector('button');
        boton.disabled = true;
        boton.textContent = 'Enviando...';

    setTimeout(() => {
        alert('¡Tu Registro ha sidoexitoso!');
        formulario.reset();
        boton.disabled = false;
        boton.textContent = 'Crear Cuenta';
                  }, 1500);
              }
          }