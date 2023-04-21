const listaProductos = () =>
    fetch('https://apialurageek.onrender.com/productos').then((res) => res.json());


const crearProductos = (portada, titulo,categoria, precio, descripcion) => {
    return fetch("https://apialurageek.onrender.com/productos", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({portada, titulo,categoria, precio, descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`https://apialurageek.onrender.com/productos/`+ id, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => fetch(`https://apialurageek.onrender.com/productos/${id}`).then((respuesta) => respuesta.json());

const actualizarProducto = (portada, titulo,categoria, precio, descripcion, id) =>{
    return fetch(`https://apialurageek.onrender.com/productos/`+ id, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({portada, titulo,categoria, precio, descripcion})
    }).then(respuesta => respuesta).catch(error => console.log(error));
}


export const productosServicios = {
    listaProductos,
    crearProductos,
    eliminarProducto,
    detalleProducto,
    actualizarProducto
}