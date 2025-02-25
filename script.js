// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los botones del acordeón
    const accordions = document.querySelectorAll(".accordion");

    // Añade un event listener a cada botón
    accordions.forEach((accordion) => {
        accordion.addEventListener("click", function () {
            // Alternar la clase "active" en el botón
            this.classList.toggle("active");

            // Seleccionar el panel asociado al botón
            const panel = this.nextElementSibling;

            // Alternar la visibilidad del panel
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null; // Cierra el panel
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // Abre el panel
            }
        });
    });
});
// Función para filtrar canales
function searchChannels() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase(); // Convertir a mayúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
    const channelsGrid = document.querySelector('.channels-grid');
    const channels = channelsGrid.getElementsByClassName('channel');

    // Recorrer todos los canales y ocultar los que no coincidan
    for (let i = 0; i < channels.length; i++) {
        const channelName = channels[i].querySelector('.accordion').textContent.toUpperCase();
        if (channelName.includes(filter)) {
            channels[i].style.display = ''; // Mostrar el canal
        } else {
            channels[i].style.display = 'none'; // Ocultar el canal
        }
    }
}

// Escuchar el evento de entrada en el campo de búsqueda
document.getElementById('searchInput').addEventListener('input', searchChannels);
// Script para mostrar/ocultar el texto de DMCA
document.getElementById('dmcaButton').addEventListener('click', function() {
    var dmcaText = document.getElementById('dmcaText');
    if (dmcaText.style.display === 'none' || dmcaText.style.display === '') {
        dmcaText.style.display = 'block';
    } else {
        dmcaText.style.display = 'none';
    }
});

// Agrega un evento al botón DMCA para desplazar la página
document.getElementById('dmcaButton').addEventListener('click', function() {
    document.getElementById('dmcaText').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('donateButton').addEventListener('click', function() {
    window.location.href='donaciones.html';
});

function closeBanner() {
    document.getElementById("donationBanner").style.display = "none";
    
}

document.getElementById('proximospartidos').addEventListener('click', function() {
    window.location.href = 'partidos.html'; // Cambia a la misma pestaña
});


document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirige a la página de inicio
});
