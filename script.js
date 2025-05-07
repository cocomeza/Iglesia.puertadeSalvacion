// Función para mostrar u ocultar la lista de eventos
function toggleEvents() {
    const eventList = document.getElementById('event-list');
    const button = document.getElementById('show-events');

    // Mostrar u ocultar los eventos
    if (eventList.style.display === "none") {
        eventList.style.display = "block"; // Muestra los eventos
        button.textContent = "Ocultar Eventos"; // Cambia el texto del botón
    } else {
        eventList.style.display = "none"; // Oculta los eventos
        button.textContent = "Mostrar Eventos"; // Cambia el texto del botón
    }
}

