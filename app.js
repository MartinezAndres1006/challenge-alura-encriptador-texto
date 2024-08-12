let elementoVisible = true; // Variable para rastrear el estado de visibilidad

let alternarVisibilidad = () => {
    let elementos = document.getElementsByClassName("elementoAEliminar");
    for (let i = 0; i < elementos.length; i++) { // Itera sobre la colección de elementos
        if (elementoVisible) {
            elementos[i].style.display = "none"; // Oculta cada elemento
        } else {
            elementos[i].style.display = "block"; // Muestra cada elemento
        }
    }

    elementoVisible = !elementoVisible; // Cambia el estado de visibilidad
};

document.getElementById("eliminarBoton").onclick = alternarVisibilidad;
