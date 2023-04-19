

// FUNCION DEL SCROLL HEADER
const headerEl = document.querySelector('.nav');

window.addEventListener('scroll', () =>{
    if (window.scrollY > 50) {
        headerEl.classList.add("nav-scrolled");
    } else if(window.scrollY <= 50) {
        headerEl.classList.remove("nav-scrolled");
    }
})

// FUNCTION DEL VALIDAR FORMULARIO
const inputs = document.querySelectorAll('.inputs__input, .inputs__textarea');

inputs.forEach((input) => {
    input.addEventListener('blur', (parametro) => {
        validar(parametro.target);
            
    })
})

const validar = (parametro) => {
    const tipodeParametro = parametro.dataset.tipo;
    if (parametro.validity.valid) {
        parametro.classList.remove('formulario--error');
        parametro.parentElement.querySelector('.input__mensaje').innerHTML = ""
    } else {
        parametro.classList.add('formulario--error');
        parametro.parentElement.querySelector('.input__mensaje').innerHTML = 
        mostrarTipodeError(tipodeParametro, parametro);
    }
}

const tipodeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

const mensajeError = {
    name: {
        valueMissing: "Escriba su nombre.",
        patternMismatch: "Escribe solo letras.",
    },
    message: {
        valueMissing: "Escriba su mensaje.",
    },
    email: {
        valueMissing: "Escriba su correo.",
        typeMismatch: "El correo no es válido",
    },
    pass: {
        valueMissing: "Escriba su contraseña.",
    }
}

const mostrarTipodeError= (tipodeParametro, parametro) =>{
    let mensaje = "";
    tipodeErrores.forEach((error) => {
        if (parametro.validity[error]) {
            mensaje = mensajeError[tipodeParametro][error];
        }
    })
    return mensaje;
}
