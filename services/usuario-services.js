const mostrarUsuarios = () =>
    fetch("https://apialurageek.onrender.com/usuario").then(resp => resp.json());

const validarUsuario = () =>{
    return fetch("https://apialurageek.onrender.com/usuario", {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    }).then(resp => resp.json());
}



export const usuarioServicios = {
    mostrarUsuarios,
    validarUsuario
}