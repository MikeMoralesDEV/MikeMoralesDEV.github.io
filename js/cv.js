document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos todas las teclas con la clase "tecla"
  const teclas = document.querySelectorAll('.tecla');
  const textoModal = document.getElementById('texto-modal'); // Selector del contenido del modal
  const cuadroModal = document.getElementById('modal-teclado'); // Selector del contenido del modal
  const lightOverlay = document.querySelector(".light-overlay");
  // Selecciona todos los botones y las secciones
  const botonesMenu = document.querySelectorAll('.menu-lateral .secciones a');
  const secciones = document.querySelectorAll('.main-content section');
// Seleccionamos el botón hamburguesa y el menú lateral
  const menuToggle = document.querySelector(".menu-toggle");
  const menuLateral = document.querySelector(".menu-lateral");
  const enlacesMenu = document.querySelectorAll(".menu-lateral .secciones a");

  // Al hacer clic en el botón hamburguesa
  menuToggle.addEventListener("click", () => {
    menuLateral.classList.toggle("activo"); // Alternar la visibilidad del menú
  });

  // Al hacer clic en cualquier enlace del menú
  enlacesMenu.forEach(link => {
    link.addEventListener("click", () => {
      menuLateral.classList.remove("activo"); // Cerramos el menú
    });
  });


  // Seguir el movimiento del ratón y actualiza la posición del gradiente
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth * 100; // Porcentaje en ancho
    const y = e.clientY / window.innerHeight * 100; // Porcentaje en alto
    // Actualiza la posición del foco
    lightOverlay.style.background = `
      radial-gradient(circle at ${x}% ${y}%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 10%, rgba(255, 255, 255, 0) 15%)
      `;

  });

  const manejarSecciones = (idSeccion) => {
    // Ocultamos la sección actualmente visible
    secciones.forEach((seccion) => {
      if (!seccion.hidden) {
        seccion.classList.add('oculto'); // Animación de desaparición
        setTimeout(() => {
          seccion.hidden = true; // Después de la animación, se elimina del DOM
          seccion.classList.remove('oculto'); // Limpia para futuros cambios
        }, 400); // Tiempo de transición (sincronizado con CSS)
      }
    });

    // Mostramos la nueva sección tras la animación de salida
    setTimeout(() => {
      const nuevaSeccion = document.getElementById(idSeccion);
      if (nuevaSeccion) {
        nuevaSeccion.hidden = false; // Hacemos que esté en el DOM
        nuevaSeccion.style.opacity = "0"; // Preparamos el inicio de la animación
        setTimeout(() => {
          nuevaSeccion.style.opacity = "1"; // Suavemente aparece
        }, 10); // Pequeño retraso para asegurar que la transición se active
      }
    }, 400); // Este tiempo debe coincidir con el tiempo de desaparición
  };

  // Asociamos eventos de clic a los botones del menú
  botonesMenu.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      e.preventDefault(); // Cancelamos navegación por defecto
      const idSeccion = boton.getAttribute('href').slice(1); // Extraemos ID del enlace
      manejarSecciones(idSeccion); // Gestionamos las secciones activas
    });
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
