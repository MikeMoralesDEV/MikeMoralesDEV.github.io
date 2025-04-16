document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todas las teclas con la clase "tecla"
  const teclas = document.querySelectorAll('.tecla');
  const textoModal = document.getElementById('texto-modal'); // Selector del contenido del modal
  const cuadroModal = document.getElementById('modal-teclado'); // Selector del contenido del modal
  const lightOverlay = document.querySelector(".light-overlay");

  // Seguir el movimiento del ratón y actualiza la posición del gradiente
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth * 100; // Porcentaje en ancho
    const y = e.clientY / window.innerHeight * 100; // Porcentaje en alto
    console.log(x, y);
    // Actualiza la posición del foco
    lightOverlay.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 10%, rgba(255, 255, 255, 0) 15%)
      `;
    console.log(lightOverlay.style.background);

  });

// Cerramos el modal si se hace clic fuera de las teclas
  document.body.addEventListener('click', (event) => {
    // Verificamos si el clic NO ocurrió dentro de una tecla
    if (!event.target.closest('.tecla')) {
      cerrarModal(); // Llamamos a la función para cerrar el modal
    }
  });

  // Función para cerrar el modal
  const cerrarModal = () => {
    textoEscrito = ''; // Vaciar el texto acumulado
    textoModal.textContent = ''; // Borrar el contenido visible
    cuadroModal.hidden = true; // Ocultar el modal
  };

  // Variable para almacenar el texto que se irá escribiendo
  let textoEscrito = '';
  let closeTimeout;

  teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
      // Obtenemos el valor de la tecla (usamos data-tecla del elemento)
      const letra = tecla.querySelector('text')?.textContent;
      cuadroModal.hidden = false;
      // Concatenamos la letra al texto
      textoEscrito += letra;

      // Actualizamos el texto del modal
      textoModal.textContent = textoEscrito;

      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }

      // Configuramos un temporizador para ocultar el modal después de 5 segundos
      closeTimeout = setTimeout(() => {
        cerrarModal();
      }, 5000); // 5000ms = 5 segundos
    });


  });


});
