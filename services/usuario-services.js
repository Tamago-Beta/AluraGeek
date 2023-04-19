const mostrarUsuarios = () =>
    fetch("http://localhost:3000/usuario").then(resp => resp.json());

const validarUsuario = () =>{
    return fetch("http://localhost:3000/usuario", {
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