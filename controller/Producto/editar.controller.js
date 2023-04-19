import { productosServicios } from '../../services/producto-services.js';
import { sweetAlert } from './../../assets/js/sweetAlert.js';
const formulario = document.querySelector('[data-form]');

const obtenerProducto = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        console.log("Error");
    }

    const portada = document.querySelector('[data-imagen]');
    const titulo = document.querySelector('[data-titulo]');
    const categorias = document.querySelectorAll('option[value]');
    const precio = document.querySelector('[data-precio]');
    const detalle = document.querySelector('[data-descripcion]');

    try {
        const producto = await productosServicios.detalleProducto(id);
        if (producto.portada && producto.titulo && producto.precio && producto.categoria && producto.descripcion) {
            portada.value = producto.portada;
            titulo.value = producto.titulo;
            precio.value = producto.precio;
            for (let i = 0; i < categorias.length; i++) {
                if(categorias[i].value == producto.categoria){
                    categorias[i].setAttribute('selected', '')
                }   
            }
            detalle.value = producto.descripcion;

        } else{
            throw new Error();
        }
    } catch (error) {
        
    }
}

obtenerProducto();

const categoria = document.querySelector('[data-categoria]');

const obtenerCategoria = () => categoria.value;
categoria.addEventListener('change', obtenerCategoria)



formulario.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const portada = document.querySelector('[data-imagen]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const categoria = obtenerCategoria();
    const precio = document.querySelector('[data-precio]').value;
    const detalle = document.querySelector('[data-descripcion]').value;

    const confirmacion = await sweetAlert.mensaje("Producto editado correctamente", "success", "#b8c995");
    if (confirmacion) {
        productosServicios.actualizarProducto(portada,titulo,categoria,precio,detalle, id)
        .then(() =>{
            window.location.href = "../../admin/admin.html";
        })
    }
})

function mensaje(title, icon) {
    return new Promise(resolve => {
        Swal.fire({
            position: 'center',
            icon,
            title,
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true
          }).then((result) => {
            resolve(result);
        })
    })
}