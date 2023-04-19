
import { productosServicios } from '../../services/producto-services.js';
import { sweetAlert } from '../../assets/js/sweetAlert.js';

const cardsProducto = document.getElementById('cardsProducto');
const templateProductos = document.getElementById('templateProductos').content;
const fragment = document.createDocumentFragment();


productosServicios.listaProductos().then((data) => {
    data.forEach(item => {
        templateProductos.querySelector('[data-portada]').setAttribute('src', item.portada);
        templateProductos.querySelector('[data-titulo]').textContent = item.titulo;
        templateProductos.querySelector('[data-precio] span').textContent = item.precio;
        templateProductos.querySelector('[data-id] span').textContent = item.id;
        templateProductos.querySelector('[data-detalle]').textContent = item.descripcion;
        templateProductos.querySelector('[data-delete]').dataset.id = item.id;
        templateProductos.querySelector('[data-edit]').dataset.id = item.id;
        const clone = templateProductos.cloneNode(true);
        fragment.appendChild(clone);
    })
    cardsProducto.appendChild(fragment);
    
}).catch(() => alert('Salio un error'))



cardsProducto.addEventListener('click', e =>{
    e.preventDefault();
    eliminar(e);
    editar(e);
})

const eliminar = async (e) => {
    if (e.target.dataset.delete == "delete") {
        const id = e.target.dataset.id;
        const confirmacion = await sweetAlert.confirmar(
            "Confirmar", "¿Seguro que deseas borrar este producto?","question", "#dcc55f");
        if (confirmacion) {
            productosServicios.eliminarProducto(id).then(() => {}).catch(() => alert('Ocurrio un error'));
        }
    }
}

const editar = (e) => {
    if (e.target.dataset.edit == "edit") {
        const id = e.target.dataset.id;
        window.location.href ='../../admin/editar-producto.html?id='+id;
    }
}

