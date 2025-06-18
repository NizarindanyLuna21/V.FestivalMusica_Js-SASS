document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
})

// Funciones
function crearGaleria () {
    const cantidadImagenes = 16;
    const ulGaleria = document.querySelector('.galeria-imagenes');
    
    for( let i=1; i<= cantidadImagenes; i++ ) {
        const imagen = document.createElement('IMG');

        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen Galeria';
        
        imagen.onclick = function() {
            mostrarImagen(i);
        }

        ulGaleria.appendChild(imagen);
    }
}

function mostrarImagen(indice) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${indice}.jpg`;
    imagen.alt = 'imagen Galeria';

    const btnCerrar = document.createElement('P');
    btnCerrar.textContent = 'X';
    btnCerrar.onclick = cerrarModal;

    const modal = document.createElement('DIV');
    modal.appendChild(imagen);
    modal.appendChild(btnCerrar);
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    const bodyModal = document.querySelector('body');
    bodyModal.classList.add('overflow-hidden');
    bodyModal.appendChild(modal)

}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove();    //Si existe ELIMINALO

        const bodyModal = document.querySelector('body');
        bodyModal.classList.remove('overflow-hidden');
    }, 500);
}


