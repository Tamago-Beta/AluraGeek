import { productosServicios } from '../../services/producto-services.js';
import { sweetAlert } from '../../assets/js/sweetAlert.js';

const formProducto = document.querySelector('[data-form]');
const categoria = document.querySelector('[data-categoria]');

const obtenerCategoria = () => categoria.value;
categoria.addEventListener('change', obtenerCategoria)


formProducto.addEventListener('submit', async (e) => {
    e.preventDefault();
    const portada = document.querySelector('[data-imagen]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const categoria = obtenerCategoria();
    const precio = document.querySelector('[data-precio]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    const confirmacion = await sweetAlert
        .mensaje("Producto agregado correctamente", "success", "#b8c995")
    if (confirmacion) {
        productosServicios.crearProductos(portada,titulo,categoria,precio,descripcion)
        .then( () => {
            window.location.href = "../../lista-productos.html";
        }).catch((error) => console.log(error));
    }
})




