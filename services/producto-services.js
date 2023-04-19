const listaProductos = () =>
    fetch('http://localhost:3000/productos').then((res) => res.json());


const crearProductos = (portada, titulo,categoria, precio, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({portada, titulo,categoria, precio, descripcion, id: uuid.v4()})
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/productos/`+ id, {
        method: "DELETE"
    })
}

const detalleProducto = (id) => fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => respuesta.json());

const actualizarProducto = (portada, titulo,categoria, precio, descripcion, id) =>{
    return fetch(`http://localhost:3000/productos/`+ id, {
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