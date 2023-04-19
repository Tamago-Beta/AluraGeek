function confirmar(title, text, icon, iconColor) {
    return new Promise(resolve => {
        Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar',
            color: '#ffff',
            background: '#191a1c',
            iconColor
        }).then((result) => {
            resolve(result.isConfirmed);
        })
    })
}

function mensaje(title, icon, iconColor) {
    return new Promise(resolve => {
        Swal.fire({
            position: 'center',
            title,
            icon,
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            color: '#ffff',
            background: '#191a1c',
            iconColor
        }).then((result) => {
            resolve(result);
        })
    })
}

export const sweetAlert = {
    confirmar,
    mensaje
}