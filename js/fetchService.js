const contenidosDidacticos = {
  jsonplaceholder: `
  <h3>Introducción a JSONPlaceholder y Métodos HTTP</h3>
  <p>
    JSONPlaceholder es un servicio gratuito que ofrece una API para probar y simular operaciones CRUD (Crear, Leer, Actualizar,
    Eliminar) en desarrollo web. Con esta API podemos realizar diferentes solicitudes HTTP como <code>GET</code>, <code>POST</code>, <code>PUT</code>,
    <code>PATCH</code>, y <code>DELETE</code>. Aquí exploramos sus funcionalidades y cómo funcionan estos métodos.
  </p>

  <h4>1. ¿Qué es JSONPlaceholder?</h4>
  <p>
    Es un API REST pública y gratuita diseñada para pruebas. Nos permite interactuar con recursos ficticios como usuarios,
    posts, comentarios, álbumes, tareas y fotos. Esto nos ayuda a simular interacciones reales entre el cliente (frontend) y
    un servidor (backend) sin necesidad de construir la infraestructura completa.
  </p>
  <p>El endpoint base de esta API es: <a href="https://jsonplaceholder.typicode.com" target="_blank">https://jsonplaceholder.typicode.com</a>.</p>

  <h4>2. Métodos HTTP Explicados</h4>
  <p>
    Los métodos HTTP nos permiten interactuar con un servidor. Aquí detallamos los más comunes:
  </p>
  <ul>
    <li>
      <strong>GET:</strong> Recupera datos del servidor. Estos datos pueden estar en formato JSON o texto, según el recurso
      solicitado. Ejemplo: Obtener los posts usando <code>GET /posts</code>.
    </li>
    <li>
      <strong>POST:</strong> Envía datos al servidor para crear un recurso nuevo. Por ejemplo, podemos enviar un nuevo post usando
      <code>POST /posts</code>.
    </li>
    <li>
      <strong>PUT:</strong> Actualiza completamente un recurso existente. Ejemplo: Actualizar un post con <code>PUT /posts/1</code>.
    </li>
    <li>
      <strong>PATCH:</strong> Realiza una actualización parcial de un recurso. Por ejemplo, modificar solo un campo del post
      con <code>PATCH /posts/1</code>.
    </li>
    <li>
      <strong>DELETE:</strong> Elimina un recurso del servidor. Por ejemplo, podemos eliminar un post con <code>DELETE /posts/1</code>.
    </li>
  </ul>

  <h4>3. Ejemplo Práctico: GET y POST</h4>

  <h5>GET: Obtención de datos</h5>
  <p>
    Vamos a recuperar una lista de posts utilizando <code>fetch</code>. Este es el código para obtener los datos:
  </p>
  <pre><code>
  async function obtenerPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) throw new Error('Error en la solicitud');

      const posts = await response.json();
      console.log(posts);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  </code></pre>
  <p>
    Aquí estamos llamando al endpoint <code>/posts</code>, obteniendo los datos en formato JSON y mostrándolos en la consola.
  </p>

  <h5>POST: Envío de datos</h5>
  <p>
    Vamos a enviar un nuevo recurso (post) al servidor. Este es el código:
  </p>
  <pre><code>
  async function crearPost() {
    try {
      const nuevoPost = {
        title: 'Mi nuevo post',
        body: 'Este es el contenido de mi nuevo post.',
        userId: 1
      };

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoPost)
      });

      if (!response.ok) throw new Error('Error en el envío');

      const postCreado = await response.json();
      console.log(postCreado);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  </code></pre>
  <p>
    Aquí estamos enviando un post al endpoint <code>/posts</code> con un título, cuerpo y userId. La respuesta del servidor
    incluye el recurso recién creado, normalmente con un <code>id</code> único asignado por el backend.
  </p>

  <h4>4. Diferencias entre Métodos HTTP</h4>
  <table style="width: 100%; border-collapse: collapse; text-align: left;">
    <thead>
      <tr>
        <th style="border: 1px solid black; padding: 8px;">Método</th>
        <th style="border: 1px solid black; padding: 8px;">Propósito</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">GET</td>
        <td style="border: 1px solid black; padding: 8px;">Recupera datos del servidor.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">POST</td>
        <td style="border: 1px solid black; padding: 8px;">Envía datos al servidor para crear un recurso nuevo.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">PUT</td>
        <td style="border: 1px solid black; padding: 8px;">Actualiza completamente un recurso existente.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">PATCH</td>
        <td style="border: 1px solid black; padding: 8px;">Actualiza parcialmente un recurso existente.</td>
      </tr>
      <tr>
        <td style="border: 1px solid black; padding: 8px;">DELETE</td>
        <td style="border: 1px solid black; padding: 8px;">Elimina un recurso del servidor.</td>
      </tr>
    </tbody>
  </table>

  <h4>5. Aplicaciones Reales</h4>
  <p>
    Con JSONPlaceholder hemos aprendido cómo estas solicitudes funcionan en un entorno de prueba, pero en aplicaciones reales interactuaríamos
    con un backend, bases de datos y sistemas más complejos. Estos métodos se usan para manejar:
  </p>
  <ul>
    <li>Autenticación y datos de usuario (<code>POST /login</code>).</li>
    <li>Gestión de archivos (por ejemplo, cargando imágenes al servidor).</li>
    <li>Actualizaciones en tiempo real mediante APIs REST.</li>
  </ul>
  <p>Practicar con JSONPlaceholder nos prepara para estas implementaciones en la vida real.</p>
  `,
  alumnos: `
  <h3>Lectura de Alumnos desde XML y la Importancia de un Backend</h3>
  <p>
    Cuando trabajamos en el desarrollo web, una de las tareas más comunes es leer datos externos para mostrarlos en nuestra interfaz.
    En este caso, hemos aprendido cómo leer información desde un archivo XML utilizando la función <code>fetch</code>. A continuación,
    explicamos cada parte en detalle.
  </p>

  <h4>1. Leer un XML usando Fetch</h4>
  <p>
    La función <code>fetch</code> nos permite realizar solicitudes HTTP y obtener los datos remotos, en este caso, el archivo <code>alumnos.xml</code>.
    Una vez que obtenemos el archivo, lo procesamos de la siguiente manera:
  </p>
  <ul>
    <li>
      <strong>Transformarlo a texto:</strong> <code>response.text()</code> nos convierte el contenido del archivo en un string.
    </li>
    <li>
      <strong>Parsearlo a XML:</strong> Utilizamos el objeto <code>DOMParser</code> para convertir ese string en un documento XML manejable por JavaScript.
    </li>
    <li>
      <strong>Extraer datos importantes:</strong> Accedemos a las etiquetas del XML como <code>nombre</code>, <code>apellido</code> y <code>curso</code>,
      y las usamos para crear instancias de la clase <code>Alumno</code>.
    </li>
  </ul>

  <h4>2. Adaptándolo a un Modelo</h4>
  <p>
    Una buena práctica es convertir los datos del archivo en objetos que sigan un modelo definido. En este caso, usamos una clase <code>Alumno</code>
    con un constructor que recibe <code>nombre</code>, <code>apellido</code> y <code>curso</code>. Este esquema:
  </p>
  <blockquote>
    <code>
      class Alumno {<br>
        &nbsp;&nbsp;constructor(nombre, apellido, curso) {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;this.nombre = nombre;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;this.apellido = apellido;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;this.curso = curso;<br>
        &nbsp;&nbsp;}<br><br>
        &nbsp;&nbsp;describir() {<br>
        &nbsp;&nbsp;&nbsp;&nbsp;return \`\${this.nombre} \${this.apellido} está inscrito en \${this.curso}.\`;<br>
        &nbsp;&nbsp;}<br>
      }
    </code>
  </blockquote>
  <p>
    Esto nos permite manejar los datos de cada alumno de forma estructurada y reutilizable. También facilita el trabajo futuro al centralizar la lógica
    dentro de los métodos de la clase.
  </p>

  <h4>3. Por qué no se consigue Persistencia</h4>
  <p>
    Aunque podamos agregar un nuevo alumno a nuestra lista, este cambio no se guarda de forma permanente. Esto sucede porque el archivo XML que estamos
    cargando es estático, y los datos modificados en el navegador no se escriben de regreso al archivo fuente. En otras palabras:
  </p>
  <ul>
    <li>El archivo XML solo se lee desde el cliente (el navegador) y no puede actualizarse directamente desde él.</li>
    <li>No existe comunicación con un servidor/backend para guardar los nuevos datos.</li>
  </ul>

  <h4>4. La Importancia del Backend</h4>
  <p>
    Para lograr persistencia en las aplicaciones web, es necesario que el cliente (navegador) se comunique con un backend. El backend se encarga de recibir,
    procesar y almacenar la información de forma permanente. Algunos aspectos clave de un backend son:
  </p>
  <ul>
    <li>
      <strong>Recibir datos:</strong> Un backend puede recibir solicitudes HTTP utilizando métodos como <code>POST</code> o <code>PUT</code>, y guardar los nuevos registros en una base de datos.
    </li>
    <li>
      <strong>Almacenar datos:</strong> La información recibida se guarda en una base de datos que puede gestionarse fácilmente (por ejemplo, MySQL, PostgreSQL, MongoDB).
    </li>
    <li>
      <strong>Servir datos:</strong> El backend también puede proveer endpoints para retornar datos a los clientes en formato JSON o XML.
    </li>
    <li>
      <strong>Seguridad:</strong> Permite proteger los datos confidenciales mediante autentificación y autorización.
    </li>
  </ul>

  <h4>5. Uso de un Servlet</h4>
  <p>
    En aplicaciones construidas con tecnologías como Java, los <strong>Servlets</strong> son una herramienta común para manejar esta lógica del backend.
    Un servlet es una clase Java que responde a solicitudes HTTP y puede ejecutar operaciones como:
  </p>
  <ul>
    <li>Leer parámetros enviados por el cliente.</li>
    <li>Consultar o actualizar una base de datos.</li>
    <li>Devolver una respuesta en formato HTML, JSON o XML.</li>
  </ul>
  <p>
    En este caso, un servlet podría reemplazar el archivo <code>alumnos.xml</code> estático, permitiendo leer y escribir alumnos directamente desde/para
    una base de datos. Esto resultaría en una solución más robusta y escalable.
  </p>

  <h4>6. Nota Final</h4>
  <p>
    Aunque trabajar con archivos estáticos como XML es útil para aprender conceptos básicos sobre lectura y renderizado de datos,
    en aplicaciones reales es imprescindible integrar un backend para:
  </p>
  <ul>
    <li>Garantizar la persistencia de los datos.</li>
    <li>Manejar grandes volúmenes de información de forma eficiente.</li>
    <li>Asegurar la seguridad y autenticación del sistema.</li>
  </ul>
  <p>¡Y aquí es donde tus conocimientos de frontend y backend se unen para crear aplicaciones web completas!</p>
`,
  fetch: `
    <p>Bienvenido a esta ayuda didáctica interactiva. Aquí podrás aprender conceptos clave relacionados con el uso de
    <strong>fetch</strong>, <strong>async/await</strong> y <strong>promesas</strong>.</p>

    <h4>¿Qué es fetch?</h4>
    <p>La API <code>fetch</code> nos permite realizar solicitudes HTTP de manera sencilla. Es una alternativa moderna
    a <code>XMLHttpRequest</code>. Usa promesas para manejar respuestas y errores.</p>
    <h4>¿Qué es async/await?</h4>
    <p>Async/await es una forma más intuitiva de trabajar con funciones asíncronas. Permite escribir código que parece
    síncrono mientras manejamos promesas. Por ejemplo:</p>
    <pre><code>
    async function cargarDatos() {
      const respuesta = await fetch('datos.json');
      const datos = await respuesta.json();
      console.log(datos);
    }
    </code></pre>

    <h4>¿Qué son las promesas?</h4>
    <p>Las <strong>promesas</strong> son objetos que representan el resultado eventual de una operación asíncrona, ya sea
    un éxito o un error. Por ejemplo:</p>
    <pre><code>
    new Promise((resolve, reject) => {
      let exito = true;
      if (exito) {
        resolve('¡Éxito!');
      } else {
        reject('¡Error!');
      }
    });
    </code></pre>
  `,

  xhr: `
    <p>Bienvenido a esta guía sobre <strong>XMLHttpRequest (XHR)</strong>. Aquí aprenderás cómo realizar solicitudes asíncronas
    para cargar contenido desde archivos locales o remotos como <code>.json</code>, <code>.txt</code>, entre otros formatos.</p>

    <h4>¿Qué es XMLHttpRequest?</h4>
    <p><code>XMLHttpRequest</code> es una API que permite realizar solicitudes HTTP asíncronas. Este fue el método principal
    para solicitudes en aplicaciones web antes de la incorporación de <code>fetch</code>.</p>

    <h4>Ejemplo de uso básico con XHR</h4>
    <pre><code>
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'archivo.txt', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error('Error:', xhr.status);
      }
    };
    xhr.onerror = function () {
      console.error('Error con la solicitud.');
    };
    xhr.send();
    </code></pre>

    <h4>Ventajas de XMLHttpRequest frente a fetch:</h4>
    <ul>
      <li>Compatible con navegadores más antiguos (pre-2015).</li>
      <li>Acceso a características como el seguimiento de progreso con <code>xhr.onprogress</code>.</li>
      <li>Extremadamente configurable.</li>
    </ul>

    <h4>Inconvenientes de XMLHttpRequest frente a fetch:</h4>
    <ul>
      <li>Sin soporte nativo para <strong>promesas</strong>. Utiliza callbacks, lo cual puede generar código menos legible.</li>
      <li>Más verboso que <code>fetch</code>.</li>
      <li>Funciones adicionales como <code>response.json()</code> no están integradas de forma directa.</li>
    </ul>

    <h4>Ejemplo práctico con diferentes formatos</h4>
    <p>Aquí tienes un ejemplo de cómo usar <code>XMLHttpRequest</code> para cargar un archivo JSON:</p>
    <pre><code>
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'datos.json', true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        const datos = JSON.parse(xhr.responseText);
        console.log(datos);
      } else {
        console.error('Error al cargar JSON:', xhr.status);
      }
    };
    xhr.send();
    </code></pre>
  `,
  externo: `
<h2 class="titulo" style="color: #2c3e50; font-family: 'Poppins', sans-serif; font-weight: 800;">Problemas de seguridad (CORS) y cómo solucionarlos</h2>
<p class="texto" style="color: #34495e; font-family: 'Arial', sans-serif; line-height: 1.6;">
  Al realizar peticiones HTTP desde el cliente (navegador) a un servidor de origen diferente, los navegadores aplican una política de seguridad conocida como
  <strong>Same-Origin Policy</strong>. Esto impide que accedamos al recurso si el servidor no permite explícitamente dicha interacción. Este problema se conoce como
  <strong>CORS</strong> (Cross-Origin Resource Sharing).
</p>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">¿Cómo funciona CORS?</h3>
<p>
  Cuando intentas consumir un recurso externo desde un origen diferente (por ejemplo, tu localhost tratando de acceder a
  <a href="https://www.w3schools.com/xml/note.xml" target="_blank" style="color: #3498db;">https://www.w3schools.com/xml/note.xml</a>), el servidor debe responder con una cabecera HTTP específica que permita el acceso desde tu origen.
  Esta cabecera es: <code>Access-Control-Allow-Origin</code>.
</p>
<p>
  Si el servidor no devuelve esta cabecera, el navegador bloquea la respuesta por motivos de seguridad. Esto se debe a que muchos ataques pueden explotar la falta de esta restricción, como los ataques de tipo CSRF (Cross-Site Request Forgery).
</p>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">Cabecera de ejemplo</h3>
<p>Para que el navegador permita el acceso, el servidor remoto debe incluir esta cabecera en la respuesta:</p>
<pre style="background: #2d2d2d; color: #f8f8f2; padding: 10px; border-radius: 5px;">
<strong>Access-Control-Allow-Origin: *</strong>
</pre>
<p>El asterisco <code>*</code> indica que el recurso es accesible desde cualquier origen. Pero también se puede limitar el acceso a dominios específicos.</p>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">Solución al problema de CORS</h3>
<p>
  Si el servidor no incluye la cabecera necesaria y no tienes control sobre él, puedes utilizar un <strong>proxy</strong>. Un proxy actúa como un intermediario entre tu aplicación y la URL de destino.
  Este proxy realiza la petición por ti, recibe la respuesta y luego la reenvía con los encabezados de CORS correspondientes. Veamos un ejemplo:
</p>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">Ejemplo de implementación</h3>
<pre><code class="language-javascript">
//Fetch con problemas de CORS
// Para que no falle, la cabecera de HTTP debe llevar Access-Control-Allow-Origin: *.
async function fetchExterno() {
  // Intentar fetch de un archivo XML remoto
  // Solución a CORS (Proxy). Hay Proxies que requieren una solicitud de uso temporal, pero nos sirve de ejemplo.
  fetch('https://corsproxy.io/?url=https://www.w3schools.com/xml/note.xml')
    .then(response => {
      if (!response.ok) {
        throw new Error(\`Error en la solicitud: \${response.status}\`);
      }
      return response.text(); // Leer el XML como texto
    })
    .then(data => {
      // Mostrar el contenido XML (como string) en el DOM
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error.message);
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = error.message;
    });
}
</code></pre>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">Explicación del código</h3>
<p>
  En este ejemplo:
</p>
<ul>
  <li>Se utiliza un proxy de ejemplo: <a href="https://corsproxy.io/" target="_blank" style="color: #3498db;">CORS Proxy</a>.</li>
  <li>El proxy hace la solicitud al recurso remoto <code>https://www.w3schools.com/xml/note.xml</code>, la recibe, y luego devuelve la respuesta asegurándose de incluir los encabezados de CORS.</li>
  <li>El navegador, al ver la respuesta con los encabezados válidos, permite procesar el XML y lo muestra en nuestra página.</li>
</ul>

<h3 style="color: #1abc9c; font-family: 'Poppins', sans-serif;">¿Por qué es importante entender CORS?</h3>
<p>
  Las restricciones de CORS previenen muchos ataques potenciales, porque evitan que scripts maliciosos alojados en otros orígenes accedan a tus recursos.
  Sin embargo, como desarrolladores, debemos entender cómo solventar este problema de manera segura sin comprometer la seguridad de nuestras aplicaciones.
</p>
`

};

const snippets = {
  xhr: {
    html: `
// Función para cargar contenido desde un archivo HTML
function cargarHtml() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "contenido.html", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("contenido-html").innerHTML = xhr.responseText;
    } else {
      document.getElementById("contenido-html").innerHTML =
        \`<p class="text-danger">Error al cargar el archivo HTML.</p>\`;
    }
  };
  xhr.onerror = function () {
    document.getElementById("contenido-html").innerHTML =
      \`<p class="text-danger">Fallo en la conexión.</p>\`;
  };
  xhr.send();
}
    `,
    xml: `
// Función para cargar contenido desde un archivo XML
function cargarXml() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "contenido.xml", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let xmlDoc = xhr.responseXML;
      let titulo = xmlDoc.getElementsByTagName("titulo")[0].textContent;
      let mensaje = xmlDoc.getElementsByTagName("mensaje")[0].textContent;

      document.getElementById("contenido-xml").innerHTML = \`
            <h3>\${titulo}</h3>
            <p>\${mensaje}</p>
          \`;
    } else {
      document.getElementById("contenido-xml").innerHTML =
        \`<p class="text-danger">Error al cargar el archivo XML.</p>\`;
    }
  };
  xhr.onerror = function () {
    document.getElementById("contenido-xml").innerHTML =
      \`<p class="text-danger">Fallo en la conexión.</p>\`;
  };
  xhr.send();
}
    `,
    json: `
// Función para cargar contenido desde un archivo JSON
function cargarJson() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "contenido.json", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      let datos = JSON.parse(xhr.responseText);

      document.getElementById("contenido-json").innerHTML = \`
            <h3>\${datos.titulo}</h3>
            <p>\${datos.mensaje}</p>
          \`;
    } else {
      document.getElementById("contenido-json").innerHTML =
        \`<p class="text-danger">Error al cargar el archivo JSON.</p>\`;
    }
  };
  xhr.onerror = function () {
    document.getElementById("contenido-json").innerHTML =
      \`<p class="text-danger">Fallo en la conexión.</p>\`;
  };
  xhr.send();
}
    `,
    txt: `
// Función para cargar contenido desde un archivo TXT
function cargarTxt() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "contenido.txt", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("contenido-txt").innerText = xhr.responseText;
    } else {
      document.getElementById("contenido-txt").innerText =
        "Error al cargar el archivo TXT.";
    }
  };
  xhr.onerror = function () {
    document.getElementById("contenido-txt").innerText =
      "Fallo en la conexión.";
  };
  xhr.send();
}
    `
  },
  fetch: {
    html: `
async function cargarHtml() {
  const response = await fetch("contenido.html");
  const texto = await response.text();
  document.getElementById("contenido-html").innerHTML = texto;
}
    `,
    xml: `
async function cargarXml() {
  try {
    const response = await fetch("contenido.xml");
    if (!response.ok) throw new Error("Error al cargar el archivo XML");
    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const titulo = xmlDoc.getElementsByTagName("titulo")[0].textContent;
    const mensaje = xmlDoc.getElementsByTagName("mensaje")[0].textContent;
    document.getElementById("contenido-xml").innerHTML = \`
        <h3>\${titulo}</h3>
        <p>\${mensaje}</p>\`;
  } catch (error) {
    console.error(error);
  }
}
    `,
    json: `
async function cargarJson() {
  const response = await fetch("contenido.json");
  const datos = await response.json();
  document.getElementById("contenido-json").innerHTML = \`
      <h3>\${datos.titulo}</h3>
      <p>\${datos.mensaje}</p>\`;
}
    `,
    txt: `
async function cargarTxt() {
  const response = await fetch("contenido.txt");
  const texto = await response.text();
  document.getElementById("contenido-txt").innerText = texto;
}
    `
  },
  alumnos: {
    nuevoAlumno: `
      // Clase Alumno
      class Alumno {
        constructor(nombre, apellido, curso) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.curso = curso;
        }

        describir() {
          return \`\${this.nombre} \${this.apellido} está inscrito en \${this.curso}.\`;
        }
      }

      // Función para añadir un nuevo alumno
      function addAlumno(nombre, apellido, curso) {
        const nuevoAlumno = new Alumno(nombre, apellido, curso);

        // Aquí se debería enviar la información al servidor o actualizar el archivo XML
        console.log("Alumno agregado:", nuevoAlumno);

        // Retornamos el objeto del nuevo alumno
        return nuevoAlumno;
      }

      // Inicializar formulario para añadir...
      const form = document.getElementById('addAlumnoForm');
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const curso = document.getElementById('curso').value;

        // Agregar nuevo alumno
        const nuevoAlumno = addAlumno(nombre, apellido, curso);
        alumnos.push(nuevoAlumno);
        renderAlumnos(alumnos);

        form.reset(); // Limpiar formulario
      });
    `,

    // Snippet para "Listar Alumnos"
    listaAlumnos: `
      // Función para obtener alumnos desde un archivo XML
      async function fetchAlumnos() {
        const response = await fetch('./alumnos.xml'); // Ruta del archivo XML
        const data = await response.text(); // Obtenemos el contenido del archivo como texto
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "application/xml");

        // Convertir el XML en objetos de tipo Alumno
        const alumnos = [];
        const elementos = xmlDoc.getElementsByTagName("alumno");
        for (let elem of elementos) {
          const nombre = elem.getElementsByTagName("nombre")[0].textContent;
          const apellido = elem.getElementsByTagName("apellido")[0].textContent;
          const curso = elem.getElementsByTagName("curso")[0].textContent;
          alumnos.push(new Alumno(nombre, apellido, curso));
        }
        return alumnos;
      }

      // Renderizar alumnos en el contenedor
      function renderAlumnos(alumnos) {
        const container = document.getElementById('alumnos-container');

        // Asegurarnos de que el contenedor exista antes de modificarlo
        if (!container) {
          console.error('No se encontró el contenedor con id "alumnos-container".');
          return;
        }

        container.innerHTML = ''; // Limpiar contenido previo

        alumnos.forEach(alumno => {
          const div = document.createElement('div');
          div.classList.add('alert', 'alert-primary', 'mt-2');
          div.textContent = alumno.describir(); // Usar el método describir()
          container.appendChild(div);
        });
      }

      // Inicializar la página y cargar los alumnos al iniciar
      async function inicializarPagina() {
        const alumnos = await fetchAlumnos(); // Leer alumnos desde el archivo XML
        renderAlumnos(alumnos); // Renderizar los alumnos en el contenedor
      }

      // Llamar a inicializar al cargar
      inicializarPagina();
    `
  },
  externo: {
    fetch: `//Fetch con problemas de CORS
// Para que no falle, la cabecera de HTTP debe llevar Access-Control-Allow-Origin: *. Sino rechaza las peticiones por cuestiones de seguridad.
async function fetchExterno(){
  // Intentar fetch de un archivo XML remoto
  // Solución a CORS (Proxy). Hay Proxies que requieren una solicitud de uso temporal, pero nos sirve de ejemplo.
  fetch('https://corsproxy.io/?url=https://www.w3schools.com/xml/note.xml')
    .then(response => {
      if (!response.ok) {
        throw new Error(\`Error en la solicitud.\`);
      }
      return response.text(); // Leer el XML como texto
    })
    .then(data => {
      // Mostrar el contenido XML (como string) en el DOM
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error.message);
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = error.message;
    });
}
`
  },
  jsonplaceholder: {
    enviar: `
// Función para enviar un POST a JSONPlaceholder
async function enviarDatos(data) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(\`Error: \${response.status}\`);
    const result = await response.json();
    console.log('Post enviado:', result);
    return result;
  } catch (error) {
    console.error('Error al enviar datos:', error.message);
    throw error;
  }
}
      `,
    obtener: `
// Función para obtener datos desde JSONPlaceholder (GET)
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(\`Error: \${response.status}\`);
    const posts = await response.json();
    console.log('Posts obtenidos:', posts);
    return posts;
  } catch (error) {
    console.error('Error al obtener datos:', error.message);
    throw error;
  }
}
      `,
  }

};

// Clase padre/base
class MostrarContenido {
  // Método para mostrar contenido XML (genérico)
  mostrarXML() {
    console.warn("Método mostrarXML no implementado");
  }

  // Método para mostrar contenido JSON (genérico)
  mostrarJSON() {
    console.warn("Método mostrarJSON no implementado");
  }

  // Método para mostrar contenido TXT (genérico)
  mostrarTXT() {
    console.warn("Método mostrarTXT no implementado");
  }

  mostrarHTML() {
    console.warn("Método mostrarHTML no implementado");
  }
}

// Clase hija para XHR
class MostrarXHR extends MostrarContenido {
  mostrarXML() {
    console.log("Mostrando contenido XML usando XHR...");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "contenido.xml", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let xmlDoc = xhr.responseXML;
        let titulo = xmlDoc.getElementsByTagName("titulo")[0].textContent;
        let mensaje = xmlDoc.getElementsByTagName("mensaje")[0].textContent;

        document.getElementById("contenido-xml").innerHTML = `
            <h3>${titulo}</h3>
            <p>${mensaje}</p>
          `;
      } else {
        document.getElementById("contenido-xml").innerHTML =
          `<p class="text-danger">Error al cargar el archivo XML.</p>`;
      }
    };
    xhr.onerror = function () {
      document.getElementById("contenido-xml").innerHTML =
        `<p class="text-danger">Fallo en la conexión.</p>`;
    };
    xhr.send();
  }

  mostrarJSON() {
    console.log("Mostrando contenido JSON usando XHR...");
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "contenido.json", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        let datos = JSON.parse(xhr.responseText);

        document.getElementById("contenido-json").innerHTML = `
            <h3>${datos.titulo}</h3>
            <p>${datos.mensaje}</p>
          `;
      } else {
        document.getElementById("contenido-json").innerHTML =
          `<p class="text-danger">Error al cargar el archivo JSON.</p>`;
      }
    };
    xhr.onerror = function () {
      document.getElementById("contenido-json").innerHTML =
        `<p class="text-danger">Fallo en la conexión.</p>`;
    };
    xhr.send();
  }

  mostrarHTML() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "contenido.html", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        document.getElementById("contenido-html").innerHTML = xhr.responseText;
      } else {
        document.getElementById("contenido-html").innerHTML =
          `<p class="text-danger">Error al cargar el archivo HTML.</p>`;
      }
    };
    xhr.onerror = function () {
      document.getElementById("contenido-html").innerHTML =
        `<p class="text-danger">Fallo en la conexión.</p>`;
    };
    xhr.send();
  }

  mostrarTXT() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "contenido.txt", true);
    xhr.onload = function () {
      if (xhr.status === 200) {
        document.getElementById("contenido-txt").innerText = xhr.responseText;
      } else {
        document.getElementById("contenido-txt").innerText =
          "Error al cargar el archivo TXT.";
      }
    };
    xhr.onerror = function () {
      document.getElementById("contenido-txt").innerText =
        "Fallo en la conexión.";
    };
    xhr.send();
  }
}

// Clase hija para Fetch
class MostrarFetch extends MostrarContenido {
  async mostrarTXT() {
    const response = await fetch("contenido.txt");
    const texto = await response.text();
    document.getElementById("contenido-txt").innerText = texto;
  }

  async mostrarJSON() {
    const response = await fetch("contenido.json");
    const datos = await response.json();
    document.getElementById("contenido-json").innerHTML = `
          <h3>${datos.titulo}</h3>
          <p>${datos.mensaje}</p>`;
  }

  async mostrarXML() {
    try {
      const response = await fetch("contenido.xml");
      if (!response.ok) throw new Error("Error al cargar el archivo XML");

      const xmlText = await response.text(); // Obtener el XML como texto
      const parser = new DOMParser(); // Crear un DOMParser para analizar el XML
      const xmlDoc = parser.parseFromString(xmlText, "application/xml"); // Convertir el texto a documento XML

      // Acceder a los nodos del documento XML
      const titulo = xmlDoc.getElementsByTagName("titulo")[0].textContent;
      const mensaje = xmlDoc.getElementsByTagName("mensaje")[0].textContent;

      // Mostrar los datos en el HTML
      document.getElementById("contenido-xml").innerHTML = `
          <h3>${titulo}</h3>
          <p>${mensaje}</p>
        `;
    } catch (error) {
      document.getElementById("contenido-xml").innerHTML =
        `<p class="text-danger">${error.message}</p>`;
    }
  }

  async mostrarHTML() {
    const response = await fetch("contenido.html");
    const texto = await response.text();
    document.getElementById("contenido-html").innerHTML = texto;
  }
}

// Función genérica para el onclick de los mostrar
function mostrarGen(tipo) {
  let titulo = document.getElementById("tituloCabecera").innerText;
  let mostrarContenido;
  if (titulo.includes("XHR")) {
    mostrarContenido = new MostrarXHR();
  } else if (titulo.includes("Fetch")) {
    mostrarContenido = new MostrarFetch();
  } else {
    throw new Error("Archivo HTML no reconocido " + nombreArchivo.split(".")[0]);
  }
  console.log(
    "Mostrar contenido de tipo: ",
    tipo,
  )
  if (tipo === "xml") {
    mostrarContenido.mostrarXML();
  } else if (tipo === "json") {
    mostrarContenido.mostrarJSON();
  } else if (tipo === "txt") {
    mostrarContenido.mostrarTXT();
  } else if (tipo === "html") {
    mostrarContenido.mostrarHTML();
  }
}

// Función para abrir el menú lateral
function abrirMenu() {
  document.getElementById("menuLateral").style.width = "250px";
  document.getElementById("btnHamburguesa").hidden = true; // Ocultar el botón hamburguesa
}

// Función para cerrar el menú lateral
function cerrarMenu() {
  document.getElementById("menuLateral").style.width = "0";
  document.getElementById("btnHamburguesa").hidden = false; // Mostrar el botón hamburguesa
}

function wTipo() {
  const titulo = document.getElementById("tituloCabecera").innerHTML;
  if (titulo.includes("XHR")) {
    return "xhr";
  } else if (titulo.includes("Fetch")) {
    return "fetch";
  } else if (titulo.includes("Alumnos")){
    return "alumnos";
  } else if (titulo.includes("externo")){
    return "externo";
  } else if (titulo.includes("JSONPlaceholder")){
    return "jsonplaceholder";
  }
}

// Función para mostrar el modal con el código fuente
function mostrarCodigo(funcionalidad) {
  try {
    // Inicializa el modal
    const modal = new bootstrap.Modal(document.getElementById("modalCodigo"));
    let tipo;
    tipo = wTipo();
    // Busca el snippet correspondiente
    const codigo = snippets[tipo]?.[funcionalidad];
    if (!codigo) {
      alert("Funcionalidad no definida o código no encontrado.");
      return;
    }

    // Agrega el código al modal
    const codigoElemento = document.getElementById("codigoSnippet");
    if (!codigoElemento) {
      console.error("No se encontró el elemento con ID 'codigoSnippet'.");
      return;
    }

    // Estiliza el snippet y muestra el modal
    codigoElemento.textContent = codigo;

    // Resalta el contenido del código usando Prism.js
    if (window.Prism) {
      Prism.highlightElement(codigoElemento);
    } else {
      console.error("Prism.js no está disponible para resaltar el código.");
    }

    // Muestra el modal
    modal.show();
  } catch (error) {
    console.error("Error al mostrar el modal:", error);
  }
}

function copiarCodigo() {
  const codigo = document.getElementById("codigoSnippet")?.textContent || "";
  if (!codigo) {
    alert("No hay código para copiar.");
    return;
  }
  navigator.clipboard.writeText(codigo)
    .catch(err => {
      console.error("Error al copiar el código: ", err);
      alert("Error al copiar el código. Verifica los permisos.");
    });
}

// Mostrar la información didáctica cuando se pulsa el botón
function mostrarInformacionDidactica() {
  const modal = document.getElementById("modalInformacionDidactica");
  const contenido = document.getElementById("contenidoDidactico");
  const tipo = wTipo();
  // Insertamos el contenido didáctico
  contenido.innerHTML = contenidosDidacticos[tipo];

  // Mostramos el modal
  modal.style.display = "block";
}

// Cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("modalInformacionDidactica");
  modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function (event) {
  const modal = document.getElementById("modalInformacionDidactica");

  if (event.target === modal) {
    modal.style.display = "none";
  }
};

// Cargador de secciones
document.addEventListener("DOMContentLoaded", () => {
  const contentDiv = document.getElementById("content");
  const btnDidactico = document.getElementById("botonDidactico");
  fetch("inicio.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.text(); // Convertir la respuesta a texto
    })
    .then((html) => {
      contentDiv.innerHTML = html; // Reemplazar el contenido dinámico
      inicializarInicio();
    })
    .catch((error) => {
      console.error("Error al cargar el contenido:", error);
      contentDiv.innerHTML = `<p class="text-danger">No se pudo cargar el contenido.</p>`;
    });
  // Escucha los clics en todo el documento
  document.addEventListener("click", (event) => {
    // Encuentra el elemento <a> más cercano
    const enlace = event.target.closest("a");
    if (!enlace) return; // Ignorar eventos que no sean de un <a>

    // Ignorar enlaces sin un href válido o #cerrar
    const href = enlace.getAttribute("href") || "";
    if (href === "javascript:void(0)" || href === "#") return;

    event.preventDefault(); // Prevenir la navegación predeterminada

    // Procesar solo los enlaces que usan el prefijo #
    if (href.startsWith("#")) {
      const url = href.substring(1) + ".html"; // Convierte en el nombre del archivo HTML
      // Realizar fetch
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
          }
          return response.text(); // Convertir la respuesta a texto
        })
        .then((html) => {
          contentDiv.innerHTML = html; // Reemplazar el contenido dinámico
          btnDidactico.hidden = false;
          // Llama a la función de inicialización específica del nuevo contenido
          if(url === "anadirXHR.html") inicializarPagina();
          if(url === "post.html") inicializarPost();
          if(url === "inicio.html"){
            inicializarInicio();
            btnDidactico.hidden = true;
          }
          cerrarMenu();
        })
        .catch((error) => {
          console.error("Error al cargar el contenido:", error);
          contentDiv.innerHTML = `<p class="text-danger">No se pudo cargar el contenido.</p>`;
        });

    }

  });

});

// Función genérica que se ejecutará tras cargar nuevo contenido
async function inicializarPagina() {
  console.log("Inicializando scripts de la nueva página...");

  // El contenedor ya está disponible porque se espera a que cargue el DOM
  const alumnos = await fetchAlumnos(); // Leer alumnos desde el archivo XML
  renderAlumnos(alumnos); // Renderizar los alumnos en el contenedor

  // Conectar el formulario para añadir nuevos alumnos
  const form = document.getElementById('addAlumnoForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const curso = document.getElementById('curso').value;

    // Agregar nuevo alumno
    const nuevoAlumno = addAlumno(nombre, apellido, curso);
    alumnos.push(nuevoAlumno);
    renderAlumnos(alumnos);

    form.reset(); // Limpiar formulario
  });
}

// Generación clase Alumno
class Alumno {
  constructor(nombre, apellido, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
  }

  describir() {
    return `${this.nombre} ${this.apellido} está inscrito en ${this.curso}.`;
  }
}

async function fetchAlumnos() {
  const response = await fetch('./alumnos.xml'); // Ruta del archivo XML
  const data = await response.text(); // Obtenemos el contenido del archivo como texto
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(data, "application/xml");

  // Convertir el XML en objetos de tipo Alumno
  const alumnos = [];
  const elementos = xmlDoc.getElementsByTagName("alumno");
  for (let elem of elementos) {
    const nombre = elem.getElementsByTagName("nombre")[0].textContent;
    const apellido = elem.getElementsByTagName("apellido")[0].textContent;
    const curso = elem.getElementsByTagName("curso")[0].textContent;
    alumnos.push(new Alumno(nombre, apellido, curso));
  }
  return alumnos;
}

async function cargarAlumnos() {
  console.log("hola");

  const alumnos = await fetchAlumnos(); // Leer alumnos desde el archivo XML
  renderAlumnos(alumnos); // Renderizar los alumnos en el contenedor
}

// Función para renderizar en el DOM la lista de alumnos
function renderAlumnos(alumnos) {
  const container = document.getElementById('alumnos-container');

  // Asegurarnos de que el contenedor existe antes de intentar modificarlo
  if (!container) {
    console.error('No se encontró el contenedor con id "alumnos-container".');
    return;
  }

  container.innerHTML = ''; // Limpiar contenido previo

  alumnos.forEach(alumno => {
    const div = document.createElement('div');
    div.classList.add('alert', 'alert-primary', 'mt-2');
    div.textContent = alumno.describir(); // Usar el método describir()
    container.appendChild(div);
  });
}

// Simular agregar un nuevo alumno al archivo XML
function addAlumno(nombre, apellido, curso) {
  const nuevoAlumno = new Alumno(nombre, apellido, curso);

  // Aquí se debería enviar la información al servidor o actualizar el archivo XML
  console.log("Alumno agregado:", nuevoAlumno); // Simulación en consola

  // Retornamos el objeto del nuevo alumno
  return nuevoAlumno;
}

//Fetch con problemas de CORS
// Para que no falle, la cabecera de HTTP debe llevar Access-Control-Allow-Origin: *. Sino rechaza las peticiones por cuestiones de seguridad.
async function fetchExterno(){
  // Intentar fetch de un archivo XML remoto
  // Solución a CORS (Proxy). Hay Proxies que requieren una solicitud de uso temporal, pero nos sirve de ejemplo.
  fetch('https://corsproxy.io/?url=https://www.w3schools.com/xml/note.xml')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.text(); // Leer el XML como texto
    })
    .then(data => {
      // Mostrar el contenido XML (como string) en el DOM
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = data;
    })
    .catch(error => {
      console.error('Error:', error.message);
      const contenidoDiv = document.getElementById('consulta');
      contenidoDiv.textContent = error.message;
    });
}

// URL base de la API JSONPlaceholder
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Manejar el envío del formulario (POST)
async function inicializarPost(){
  document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recargar la página al enviar el formulario

    // Obtener valores del formulario
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;

    // Crear los datos a enviar
    const data = {
      title,
      body,
      userId: 1, // Se usa un ID de usuario de ejemplo
    };

    try {
      // Hacer la solicitud POST a la API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Indicar que se envía JSON
        },
        body: JSON.stringify(data), // Convertir los datos a JSON
      });

      // Verificar que la solicitud fue exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      // Obtener la respuesta en formato JSON
      const result = await response.json();

      // Mostrar el resultado en el div de respuesta
      const respuestaDiv = document.getElementById('respuesta');
      respuestaDiv.textContent = `Post enviado con éxito: ${JSON.stringify(result, null, 2)}`;

      // Limpia el formulario después de enviar
      document.getElementById('postForm').reset();
    } catch (error) {
      console.error('Error al enviar los datos:', error);

      // Mostrar el error en el div de respuesta
      const respuestaDiv = document.getElementById('respuesta');
      respuestaDiv.textContent = `Error al enviar los datos: ${error.message}`;
      respuestaDiv.style.color = 'red';
    }
  });
}

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar recargar la página al enviar el formulario

  // Obtener valores del formulario
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  // Crear los datos a enviar
  const data = {
    title,
    body,
    userId: 1, // Se usa un ID de usuario de ejemplo
  };

  try {
    // Hacer la solicitud POST a la API
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Indicar que se envía JSON
      },
      body: JSON.stringify(data), // Convertir los datos a JSON
    });

    // Verificar que la solicitud fue exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    // Obtener la respuesta en formato JSON
    const result = await response.json();

    // Mostrar el resultado en el div de respuesta
    const respuestaDiv = document.getElementById('respuesta');
    respuestaDiv.textContent = `Post enviado con éxito: ${JSON.stringify(result, null, 2)}`;

    // Limpia el formulario después de enviar
    document.getElementById('postForm').reset();
  } catch (error) {
    console.error('Error al enviar los datos:', error);

    // Mostrar el error en el div de respuesta
    const respuestaDiv = document.getElementById('respuesta');
    respuestaDiv.textContent = `Error al enviar los datos: ${error.message}`;
    respuestaDiv.style.color = 'red';
  }
});

// Función para obtener datos (GET)
async function obtenerDatos() {
  try {
    // Hacer la solicitud GET
    const response = await fetch(API_URL);

    // Verificar que la solicitud fue exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    // Obtener los datos en formato JSON
    const posts = await response.json();

    // Mostrar los posts en el div correspondiente
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = `
          <h2>Posts desde JSONPlaceholder:</h2>
          ${posts.slice(0, 5).map(post => `
            <div style="border: 1px solid #ddd; margin: 10px; padding: 10px;">
              <h3>${post.title}</h3>
              <p>${post.body}</p>
              <small><strong>ID Usuario:</strong> ${post.userId} | <strong>ID Post:</strong> ${post.id}</small>
            </div>
          `).join('')}
        `;
  } catch (error) {
    console.error('Error al obtener los datos:', error);

    // Mostrar el error en un alert
    alert(`Error al obtener los datos: ${error.message}`);
  }
}

//Scripts para el menu de inicio
function inicializarInicio(){
  // Obtén referencias a los elementos del DOM
  const menuToggle = document.getElementById("menuToggle");
  const menuDesplegable = document.getElementById("menuDesplegable");
  const contenidoApartado = document.getElementById("contenidoApartado");

// Mostrar o ocultar el menú desplegable
  menuToggle.addEventListener("click", () => {
    if (menuDesplegable.style.display === "block") {
      menuDesplegable.style.display = "none"; // Ocultar menú
    } else {
      menuDesplegable.style.display = "block"; // Mostrar menú
    }
  });

// Cambiar contenido según el apartado seleccionado
  menuDesplegable.addEventListener("click", (e) => {
    // Verifica que se haya hecho clic en un elemento <li>
    if (e.target.tagName === "LI") {
      const apartado = e.target.getAttribute("data-apartado");
      cambiarContenidoApartado(apartado); // Cambia el contenido
      menuDesplegable.style.display = "none"; // Ocultar menú después de seleccionar
    }


  });
  // Cerrar el menú al hacer clic fuera
  document.addEventListener("click", (event) => {
    if (
      !menuDesplegable.contains(event.target) && // Si no hizo clic dentro del menú
      event.target !== menuToggle // Si no hizo clic en el botón de abrir
    ) {
      menuDesplegable.style.display = "none"; // Cierra el menú
    }
  });

  }

// Función para actualizar el contenido dinámico
function cambiarContenidoApartado(apartado) {
  const contenidos = {
    1: `
<h2>¿Qué es <code>fetch</code> y para qué se utiliza?</h2>
<p>
  <code>fetch</code> es una API incluida en la mayoría de los navegadores modernos que permite realizar solicitudes HTTP de forma sencilla. Es una alternativa más limpia, moderna y versátil al uso de <code>XMLHttpRequest</code>, ofreciendo un enfoque basado en <em>Promesas</em>, lo que simplifica el manejo de resultados asíncronos y el flujo general del código.
</p>
<p>
  Con <code>fetch</code>, puedes enviar y recibir datos desde servidores de manera eficiente, lo que resulta esencial para aplicaciones web que dependen de datos dinámicos o requieren comunicación con servicios externos. Por ejemplo, es comúnmente utilizado para tareas como:
</p>
<ul>
  <li>Cargar datos desde archivos como <strong>XML</strong>, <strong>JSON</strong>, <strong>HTML</strong> o <strong>TXT</strong>. (<a href="#XHR">Taller XHR</a>, <a href="#fetch">Taller Fetch</a>)</li>
  <li>Recuperar información de bases de datos o APIs externas, como una lista de mensajes desde un JSONPlaceholder. (<a href="#post">Ejemplo: JSONPlaceholder</a>)</li>
  <li>Realizar operaciones HTTP como <strong>GET</strong> para obtener datos del servidor o <strong>POST</strong> para enviar datos. (<a href="#anadirXHR">Ejemplo: Simulación POST y GET</a>)</li>
</ul>
<p>
  Al utilizar <code>fetch</code>, los desarrolladores tienen acceso a capacidades avanzadas, como trabajar con encabezados personalizados, manejar respuestas JSON fácilmente y solucionar errores comunes, como los problemas de <code>CORS</code>. (<a href="ENLACE_VACÍO_CORS">Ejemplo sobre CORS</a>)
</p>
<h3>Imagen ilustrativa sobre <code>fetch</code></h3>
<p>
  A continuación, se incluye una imagen ilustrativa para mejor comprensión del funcionamiento de <code>fetch</code>:
</p>

<!-- Contenedor para imagen responsiva con sombra -->
<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
  <img src="/img/fetch.png" alt="Funcionamiento básico de fetch"
    style="
      max-width: 100%;  /* Responsividad */
      height: auto;     /* Mantener proporciones */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  /* Sombra elegante */
      border-radius: 8px;  /* Bordes redondeados */
    " />
</div>

<h3>Sintaxis básica de <code>fetch</code></h3>
<p>
  La sintaxis de <code>fetch</code> es muy sencilla y destaca por su fluidez gracias al uso de Promesas:
</p>
<pre>
<code>
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`Error de red: \${response.status}\`);
    }
    return response.json(); // Parsear la respuesta como JSON
  })
  .then((data) => {
    console.log('Datos recibidos:', data);
  })
  .catch((error) => {
    console.error('Hubo un problema con la solicitud:', error);
  });
</code>
</pre>

<h3>Ejemplo práctico utilizando <code>fetch</code></h3>
<p>
  A continuación, un ejemplo práctico sencillo que simula la obtención de datos de un archivo local, como una lista de estudiantes desde un archivo JSON, y los representa en una tabla:
</p>

<pre>
<code>
// Obtener datos desde un archivo JSON
fetch('alumnos.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo.');
    }
    return response.json(); // Parsear como JSON
  })
  .then((alumnos) => {
    // Generar tabla de alumnos
    let tabla = '<table><tr><th>Nombre</th><th>Edad</th></tr>';
    alumnos.forEach((alumno) => {
      tabla += \`<tr><td>\${alumno.nombre}</td><td>\${alumno.edad}</td></tr>\`;
    });
    tabla += '</table>';
    document.body.innerHTML = tabla; // Mostrarlo en la página
  })
  .catch((error) => {
    console.error('Error:', error);
  });
</code>
</pre>
<p>
  Este ejemplo podría vincularse al taller ya preparado donde se trabaja con <strong>XML</strong> y <strong>JSON</strong>. (<a href="#fetch">Cargar alumnos desde XML o JSON</a>)
</p>

<h3>Ventajas y diferencias respecto a <code>XMLHttpRequest</code></h3>
<ul>
  <li><strong>Más limpio y legible:</strong> Gracias al uso de Promesas, evita el callback hell o anidación excesiva.</li>
  <li><strong>Sintaxis moderna:</strong> Soporta <code>async/await</code>, lo que permite escribir código más lineal. Ejemplo:
    <pre>
<code>
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error al obtener los datos.');
    }
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error('Error:', error);
  }
}
obtenerDatos();
</code>
    </pre>
  </li>
  <li>
    <strong>Soporte nativo de Promesas:</strong> Gestiona tanto respuestas positivas como errores de forma simple.
  </li>
  <li>
    <strong>Mayor flexibilidad:</strong> Incluye soporte para propiedades como encabezados personalizados y <code>AbortController</code> para manejar timeouts.
  </li>
</ul>

<h3>Referencias externas y documentación adicional</h3>
<ul>
  <li>
    Documentación oficial de <code>fetch</code> en MDN Web Docs:
    <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer"
>MDN: Fetch API</a>
  </li>
  <li>
    Explicación sobre cómo manejar errores comunes y Promesas:
    <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous" target="_blank">MDN: JavaScript asíncrono</a>
  </li>
  <li>
    Repositorio ejemplo con simulaciones de <code>fetch</code> basadas en JSONPlaceholder:
    <a href="https://jsonplaceholder.typicode.com/" target="_blank">JSONPlaceholder</a>
  </li>
  <li>
    Artículo que explica detalladamente las diferencias entre <code>fetch</code> y <code>XMLHttpRequest</code>:
    <a href="https://blog.logrocket.com/xmlhttprequest-vs-fetch-the-differences-you-need-to-know/" target="_blank">LogRocket: XMLHttpRequest vs Fetch</a>
  </li>
</ul>

<h3>Casos prácticos del taller</h3>
<p>
  En el curso práctico, los siguientes ejemplos permiten entender el uso de <code>fetch</code> en diferentes escenarios:
</p>
<ol>
  <li>Taller Fetch para cargar contenidos desde archivos <strong>XML</strong>, <strong>TXT</strong>, <strong>JSON</strong> y <strong>HTML</strong>. (<a href="#fetch">Taller Fetch</a>)</li>
  <li>Simulación de peticiones <code>POST</code> y <code>GET</code>, utilizando la API JSONPlaceholder. (<a href="#post">Simulación POST y GET</a>)</li>
  <li>Manejo de errores relacionados con CORS y cómo solucionarlos. (<a href="#externo">Errores de CORS</a>)</li>
  <li>Ejemplo práctico sobre cargar estudiantes desde JSON/XML e incorporarlos a un modelo de clases, con persistencia ficticia. (<a href="#anadirXHR">Cargar alumnos</a>)</li>
</ol>
` ,
    2: `
<h2>Ventajas frente a <code>XMLHttpRequest</code></h2>
<p>
  <code>fetch</code> es una alternativa moderna y simplificada en comparación con el clásico <code>XMLHttpRequest</code>. Su diseño está basado en <strong>Promesas</strong>, lo que proporciona una sintaxis más limpia, legible y fácil de mantener. Estas son las principales ventajas de <code>fetch</code> frente a <code>XMLHttpRequest</code>:
</p>
<ul>
  <li>
    <strong>Diseño moderno y facilidad de uso:</strong> <code>fetch</code> utiliza <em>Promesas</em>, eliminando la necesidad de callbacks anidados o estructuras complejas. Esto permite que el código sea más legible y menos propenso a errores.
  </li>
  <li>
    <strong>Sintaxis compacta:</strong> Con <code>fetch</code>, las solicitudes HTTP típicas son más breves y claras. Además, el uso de <code>async/await</code> mejora todavía más la legibilidad, haciendo que el código sea más lineal y fácil de seguir:
    <pre>
<code>
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.error('Hubo un problema:', error);
  }
}
obtenerDatos();
</code>
    </pre>
  </li>
  <li>
    <strong>Mayor flexibilidad:</strong> A diferencia de <code>XMLHttpRequest</code>, que depende de un modelo más rígido, <code>fetch</code> proporciona objetos como <code>Request</code> y <code>Response</code> que pueden ser configurados de forma modular. Esto permite manejar de forma más natural características como los encabezados personalizados, cuerpos en formato JSON y métodos HTTP especializados.
  </li>
  <li>
    <strong>Mejor manejo de errores:</strong> Con <code>fetch</code>, puedes diferenciar claramente entre un error HTTP (como un estado 404) y los errores de la red. Esto ayuda a implementar una gestión de errores más detallada y simplificada:
    <pre>
<code>
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Datos recibidos:', data);
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });
</code>
    </pre>
  </li>
  <li>
    <strong>Soporte para Streams:</strong> <code>fetch</code> permite trabajar con contenido en streaming, lo que resulta ideal para descargar archivos grandes o manejar flujos de datos continuos. <code>XMLHttpRequest</code> no tiene soporte directo para esta funcionalidad.
  </li>
  <li>
    <strong>Compatibilidad con nuevas tecnologías:</strong> además de soportar estándares modernos de la web, <code>fetch</code> permite usar herramientas como <code>AbortController</code> para cancelar solicitudes pendientes y mejorar la experiencia del usuario en situaciones de red lenta.
  </li>
</ul>
<p>
  Pese a sus ventajas, es importante destacar que <code>fetch</code> no es compatible con navegadores antiguos como Internet Explorer. Sin embargo, este inconveniente puede resolverse utilizando <em>polyfills</em> como los disponibles en recursos externos:
  <a href="https://github.com/github/fetch" target="_blank" rel="noopener noreferrer">Polyfill para Fetch</a>.
</p>

<h3>Ejemplo práctico que demuestra la flexibilidad de <code>fetch</code></h3>
<p>
  Supongamos que necesitas cancelar una solicitud después de cierto tiempo, algo que con <code>fetch</code> puedes implementar fácilmente utilizando <code>AbortController</code>. Aquí tienes un ejemplo práctico:
</p>
<pre>
<code>
const controlador = new AbortController();
const signal = controlador.signal;

fetch('https://jsonplaceholder.typicode.com/todos', { signal })
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al obtener los datos.');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Datos:', data);
  })
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.error('Solicitud abortada');
    } else {
      console.error('Hubo un problema:', error);
    }
  });

// Cancelar la solicitud después de 5 segundos
setTimeout(() => {
  controlador.abort();
  console.log('Solicitud cancelada después de 5 segundos');
}, 5000);
</code>
</pre>
<p>
  Este ejemplo ilustra cómo <code>fetch</code> otorga un mayor control sobre solicitudes HTTP, algo que sería considerablemente más complejo de lograr con <code>XMLHttpRequest</code>.
</p>

<h3>Enlaces relacionados y documentación adicional</h3>
<ul>
  <li>
    Documentación oficial de <code>fetch</code> en MDN:
    <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">
      MDN: Fetch API
    </a>
  </li>
  <li>
    Explicación detallada sobre diferencias entre <code>fetch</code> y <code>XMLHttpRequest</code>:
    <a href="https://blog.logrocket.com/xmlhttprequest-vs-fetch-the-differences-you-need-to-know/" target="_blank" rel="noopener noreferrer">
      LogRocket: Comparativa
    </a>
  </li>
  <li>
    Ejemplo completo sobre cómo manejar errores con <code>fetch</code> y <code>AbortController</code>:
    <a href="https://developer.mozilla.org/es/docs/Web/API/AbortController" target="_blank" rel="noopener noreferrer">
      MDN: AbortController
    </a>
  </li>
</ul>
` ,
    3: `<h2>Sintaxis básica de <code>fetch</code>: <code>fetch(url).then().catch()</code></h2>
<p>
  La sintaxis básica de <code>fetch</code> está diseñada para ser simple e intuitiva, gracias al uso de <em>Promesas</em>. Consiste, a grandes rasgos, en:
</p>
<ul>
  <li><strong>Dos métodos principales:</strong>
    <code>.then()</code> y <code>.catch()</code>, usados para manejar el resultado de la solicitud y los errores, respectivamente.
  </li>
</ul>
<p>
  El uso de <code>fetch</code> sigue este flujo:
</p>
<ol>
  <li>Realizas una solicitud usando <code>fetch(url)</code>.</li>
  <li>El navegador devuelve una <em>Promesa</em> que se resuelve si obtiene una respuesta del servidor.</li>
  <li>Utilizas <code>.then()</code> para manejar la respuesta cuando esta tiene éxito (generalmente comprobando el estado <code>response.ok</code>).</li>
  <li>Si ocurre un error (como problemas de red o respuestas no deseadas), puedes capturarlo con <code>.catch()</code>.</li>
</ol>

<h3>Fragmento de código ilustrativo</h3>
<p>Este es un ejemplo básico de uso de <code>fetch</code> para obtener datos desde una URL:</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts') // Hacer solicitud
  .then((response) => {
    if (response.ok) {
      return response.json(); // Parsear respuesta como JSON
    }
    throw new Error(\`Error en la solicitud: \${response.status}\`);
  })
  .then((data) => {
    console.log('Datos obtenidos:', data); // Procesar datos
  })
  .catch((error) => {
    console.error('Hubo un problema:', error); // Manejo de errores
  });
</code>
</pre>

<h3>Explicación paso a paso</h3>
<p>A continuación, desglosamos el flujo del ejemplo anterior para una mejor comprensión:</p>
<ol>
  <li>
    <code>fetch('https://jsonplaceholder.typicode.com/posts')</code>: Inicia la solicitud HTTP hacia una URL.
  </li>
  <li>
    <code>.then((response) => { ... })</code>: Recibe la respuesta del servidor.
    Aquí verificamos si la respuesta es válida utilizando <code>response.ok</code>.
  </li>
  <li>
    Dentro del primer <code>.then()</code>, devolvemos <code>response.json()</code>,
    lo cual transforma los datos obtenidos en un formato JSON manipulable.
  </li>
  <li>
    <code>.then((data) => { ... })</code>: Procesamos el JSON obtenido en el paso anterior. Por ejemplo, lo imprimimos en la consola.
  </li>
  <li>
    <code>.catch((error) => { ... })</code>: Captura errores, como fallos de red o problemas en la respuesta. Esto es opcional pero altamente recomendado.
  </li>
</ol>

<h3>Estructura genérica</h3>
<p>Esta es la estructura más común para utilizar <code>fetch</code>:</p>
<pre>
<code>
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('¡Error en la respuesta! Código: ' + response.status);
    }
    return response.json(); // Parsear como JSON
  })
  .then((data) => {
    // Aquí procesamos los datos recibidos
  })
  .catch((error) => {
    // Aquí manejamos los errores
    console.error('Error capturado:', error);
  });
</code>
</pre>

<h3>Errores comunes en <code>fetch</code>:</h3>
<ul>
  <li>
    <strong>No se verificó el estado HTTP:</strong> Aunque <code>fetch</code> no lanza automáticamente errores por respuestas con
    códigos como 404 o 500, es importante verificar explícitamente si <code>response.ok</code> es <code>true</code>.
  </li>
  <li>
    <strong>Problemas de CORS:</strong> Si el servidor no permite solicitudes desde ciertos dominios, <code>fetch</code> puede fallar,
    resultando en un error relacionado con CORS.
  </li>
</ul>

<h3>Ejemplo práctico</h3>
<p>Un ejemplo sencillo sería cargar productos desde una API ficticia y mostrarlos en una lista HTML:</p>
<pre>
<code>
// Elemento HTML donde se añadirán productos
const lista = document.getElementById('productos');

fetch('https://fakestoreapi.com/products') // API simulada
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se pudo cargar la lista de productos.');
    }
    return response.json(); // Parsear respuesta
  })
  .then((productos) => {
    // Añadir productos a la lista
    productos.forEach((producto) => {
      const li = document.createElement('li');
      li.textContent = \`\${producto.title} - $ \${producto.price}\`;
      lista.appendChild(li);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
</code>
</pre>

<p>Este ejemplo es una forma sencilla y didáctica de ver cómo <code>fetch</code> trabaja con datos dinámicos para construir contenido HTML interactivo.</p>

<h3>Referencias útiles</h3>
<ul>
  <li>
    Artículo detallado sobre Promesas y manejo de errores en MDN:
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">
      MDN: Promesas en JavaScript
    </a>
  </li>
  <li>
    Documentación oficial de <code>fetch</code> API en MDN:
    <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API" target="_blank" rel="noopener noreferrer">MDN: Fetch API</a>
  </li>
  <li>
    Ejemplos avanzados de solicitudes HTTP con Fetch:
    <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous/Fetching_data" target="_blank" rel="noopener noreferrer">
      MDN: Obtener datos de forma asíncrona
    </a>
  </li>
</ul>
` ,
    4: `
<h2>Soporta Promesas y el manejo de errores de red o lógica</h2>
<p>
  Una de las características más relevantes de la API <code>fetch</code> es que está basada en el modelo de <strong>Promesas</strong>, lo que permite realizar operaciones de una forma no bloqueante, eficiente y manejable. Para entender por qué esto es importante, vamos a introducir primero qué es una <strong>Promesa</strong> y cómo se relaciona con las funciones asíncronas.
</p>

<h3>¿Qué es una Promesa?</h3>
<p>
  En JavaScript, una <strong>Promesa</strong> es un objeto que representa el resultado eventual (exitoso o fallido) de una operación asíncrona. Las operaciones asíncronas son aquellos procesos que no se ejecutan inmediatamente y que, en lugar de bloquear el flujo del programa, permiten que el código siga ejecutándose mientras esperan una respuesta.
</p>
<p>
  Una Promesa puede estar en uno de tres estados:
</p>
<ul>
  <li><strong>Pendiente (pending):</strong> El estado inicial, en el cual la operación aún no se ha completado ni ha producido un valor.</li>
  <li><strong>Resuelta (fulfilled):</strong> La operación fue completada con éxito y nos devuelve un valor.</li>
  <li><strong>Rechazada (rejected):</strong> La operación falló y nos devuelve un motivo del error.</li>
</ul>
<p>
  Puedes reaccionar a una Promesa utilizando los métodos <code>.then()</code>, <code>.catch()</code> y <code>.finally()</code>:
</p>
<pre>
<code>
const miPromesa = new Promise((resolve, reject) => {
  const exito = true; // Simulamos éxito o fallo
  if (exito) {
    resolve('Operación exitosa'); // Cambia estado a fulfilled
  } else {
    reject('Error en la operación'); // Cambia estado a rejected
  }
});

// Manejo de la Promesa
miPromesa
  .then((resultado) => console.log('Resultado:', resultado)) // Caso exitoso
  .catch((error) => console.error('Error:', error)) // Caso fallido
  .finally(() => console.log('Operación completada (exitosa o no).'));
</code>
</pre>

<h3>¿Qué es una función asíncrona en JavaScript?</h3>
<p>
  Una función <strong>asíncrona</strong> (definida con la palabra clave <code>async</code>) es una forma más moderna y legible de manejar Promesas. Cuando una función está marcada como <code>async</code>, automáticamente devuelve una Promesa. Dentro de estas funciones podemos usar la palabra clave <code>await</code>, que "pausa" la ejecución hasta que una Promesa se resuelve o se rechaza.
</p>
<pre>
<code>
async function ejemploAsincrono() {
  try {
    const resultado = await nuevaPromesa(); // Esperar hasta que se resuelva
    console.log('Resultado obtenido:', resultado);
  } catch (error) {
    console.error('Error capturado:', error); // Manejo de errores
  }
}
</code>
</pre>
<p>
  Usar <code>async/await</code> hace que el código sea más limpio y fácil de leer, especialmente cuando tienes varias operaciones en cascada.
</p>

<h3>Relación de <code>fetch</code> con Promesas</h3>
<p>
  La API <code>fetch</code> está diseñada para ser asíncrona, aprovechando plenamente las ventajas de las Promesas. Cuando realizas una solicitud con <code>fetch</code>, este devuelve automáticamente una Promesa. Esto te permite manejar tanto las respuestas exitosas como los errores de conexión o lógica de forma fluida.
</p>
<p>
  Ejemplo básico con Promesas:
</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    return response.json(); // Procesa la respuesta como JSON
  })
  .then((data) => {
    console.log('Datos obtenidos:', data); // Procesar datos obtenidos
  })
  .catch((error) => {
    console.error('Error de conexión o lógica:', error); // Manejo de errores
  });
</code>
</pre>

<h3>Ventajas del modelo basado en Promesas</h3>
<p>
  Las Promesas, combinadas con el uso de <code>fetch</code>, ofrecen varias ventajas para manejar operaciones asíncronas en JavaScript:
</p>
<ul>
  <li><strong>No bloqueante:</strong> Permiten que el navegador realice otros trabajos mientras espera la respuesta del servidor.</li>
  <li><strong>Sencillez:</strong> Al eliminar el uso de callbacks tradicionales, el código es más legible y fácil de depurar.</li>
  <li><strong>Encadenamiento:</strong> Puedes realizar múltiples operaciones asíncronas en secuencia mediante el encadenamiento de <code>.then()</code>.</li>
  <li><strong>Mejor manejo de errores:</strong> Captura errores de red, respuestas mal formateadas o fallos del servidor utilizando <code>.catch()</code>, evitando bloqueos inesperados.</li>
</ul>

<h3>Usando funciones asíncronas con <code>fetch</code></h3>
<p>
  Además de usar <code>.then()</code> y <code>.catch()</code>, un enfoque más limpio y moderno es utilizar funciones <code>async</code> para trabajar con <code>fetch</code>. Aquí tienes un ejemplo práctico:
</p>
<pre>
<code>
async function obtenerPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Hacer la solicitud
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    const post = await response.json(); // Procesar respuesta como JSON
    console.log('Post obtenido:', post);
  } catch (error) {
    console.error('Error capturado:', error); // Manejo de errores
  }
}

// Llamar a la función
obtenerPost();
</code>
</pre>

<h3>Posibilidades avanzadas</h3>
<p>
  Al combinar <code>fetch</code> con Promesas y funciones asíncronas, puedes realizar múltiples operaciones avanzadas como:
</p>
<ul>
  <li><strong>Solicitudes en paralelo:</strong> Ejecutar varias solicitudes al mismo tiempo usando <code>Promise.all()</code>. Por ejemplo:
    <pre>
<code>
const promesas = [
  fetch('https://jsonplaceholder.typicode.com/posts/1').then((r) => r.json()),
  fetch('https://jsonplaceholder.typicode.com/posts/2').then((r) => r.json())
];

Promise.all(promesas)
  .then((resultados) => console.log('Resultados:', resultados))
  .catch((error) => console.error('Error en alguna solicitud:', error));
</code>
    </pre>
  </li>
  <li><strong>Tiempo límite para solicitudes:</strong> Usar <code>AbortController</code> en combinación con <code>fetch</code> para establecer un timeout (consulta el punto 14).</li>
  <li><strong>Uso de flujo lineal:</strong> Con <code>async/await</code>, puedes combinar múltiples operaciones de manera más intuitiva para procesos complejos.</li>
</ul>
<p>
  En resumen, las Promesas y las funciones asíncronas son las bases del manejo moderno de operaciones asíncronas en JavaScript, y <code>fetch</code> saca provecho de ellas para simplificar la comunicación con servidores de forma efectiva y potente.
</p>
`,
    5: `
<h2>Métodos HTTP soportados: GET, POST, PUT, DELETE y más</h2>
<p>
  La API de <code>fetch</code> soporta todos los métodos HTTP usados comúnmente en aplicaciones web, como <strong>GET</strong>, <strong>POST</strong>, <strong>PUT</strong>, <strong>DELETE</strong>, entre otros.
</p>
<p>Por defecto, <code>fetch</code> utiliza el método <strong>GET</strong>, pero puedes definir cualquier método en la opción <code>method</code>:</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE', // Método HTTP definido
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('No se pudo eliminar.');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Elemento eliminado:', data);
  })
  .catch((error) => {
    console.error('Error HTTP:', error);
  });
</code>
</pre>
<p>
  Este ejemplo ejecuta un método <strong>DELETE</strong> para eliminar un recurso de un servidor simulado (<a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder</a>).
</p>
`,
    6: `
<h2>Puedes enviar encabezados personalizados usando la propiedad <code>headers</code> en las opciones</h2>
<p>
  Con <code>fetch</code> puedes enviar encabezados personalizados añadiendo el objeto <code>headers</code> en las opciones de configuración. Esto es útil cuando necesitas autenticarte o definir el tipo de contenido que estás enviando.
</p>
<pre>
<code>
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token123', // Token para autenticación
    'Content-Type': 'application/json', // Tipo de contenido
  },
})
  .then((response) => response.json())
  .then((data) => console.log('Datos:', data))
  .catch((error) => console.error('Error:', error));
</code>
</pre>
<p>
  Aquí, enviamos un encabezado de autenticación junto con la solicitud <strong>GET</strong>.
</p>
`,
    7: `
<h2>Enviar datos en el cuerpo de la solicitud se realiza usando la propiedad <code>body</code></h2>
<p>
  Para enviar datos al servidor (generalmente con <strong>POST</strong> o <strong>PUT</strong>), puedes usar la propiedad <code>body</code>. Esta propiedad acepta datos en formatos como JSON, texto o formularios.
</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ // Enviar datos como JSON
    title: 'Nuevo Post',
    body: 'Este es el contenido del post.',
    userId: 1,
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log('Post creado con éxito:', data))
  .catch((error) => console.error('Error al enviar datos:', error));
</code>
</pre>
`,
    8: `
<h2>Manejo de respuestas: métodos como <code>.json()</code> y <code>.text()</code> permiten procesar datos</h2>
<p>
  Dependiendo del formato de la respuesta del servidor, puedes usar métodos como <code>.json()</code> (para JSON) o <code>.text()</code> (para texto) para manejar los datos.
</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json()) // Procesar como JSON
  .then((post) => console.log('Post:', post))
  .catch((error) => console.error('Error:', error));

// Otro ejemplo con .text()
fetch('/archivo.txt')
  .then((response) => response.text()) // Procesar como texto
  .then((texto) => console.log('Contenido del archivo:', texto))
  .catch((error) => console.error('Error:', error));
</code>
</pre>
<p>
  La flexibilidad de <code>fetch</code> permite trabajar con múltiples formatos según sea necesario.
</p>
`,
    9: `
<h2>Puedes controlar errores HTTP (códigos estado) o de red con <code>catch</code></h2>
<p>
  Aunque <code>fetch</code> no lanza errores automáticos en códigos HTTP como 404 o 500, puedes manejarlos verificando <code>response.ok</code>. Los errores de red, como una desconexión, se manejan directamente con <code>.catch()</code>.
</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts/9999')
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    return response.json();
  })
  .then((data) => console.log('Datos:', data))
  .catch((error) => console.error('Error capturado:', error));
</code>
</pre>
`,
    10: `
<h2>Configuraciones avanzadas: credenciales y métodos HTTP personalizados</h2>
<p>
  <code>fetch</code> soporta configuraciones avanzadas como el envío de cookies (con <code>credentials</code>) o configuraciones adicionales para personalizar solicitudes.
</p>
<pre>
<code>
fetch('https://api.example.com/user', {
  method: 'POST',
  credentials: 'include', // Enviar cookies automáticamente
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ userId: 1 }),
})
  .then((response) => response.json())
  .then((data) => console.log('Datos protegidos:', data))
  .catch((error) => console.error('Error:', error));
</code>
</pre>
<p>
  Útil para aplicaciones autenticadas.
</p>
`,
    11: `
<h2>Diferencia entre el éxito de una solicitud (fetch no arroja errores en 4xx/5xx)</h2>
<p>
  Algo importante al trabajar con <code>fetch</code> es entender que no lanza errores automáticos para respuestas HTTP con códigos como <strong>4xx</strong> (errores del cliente) o <strong>5xx</strong> (errores del servidor). Estos deben ser manejados manualmente verificando la propiedad <code>response.ok</code>.
</p>
<pre>
<code>
fetch('https://jsonplaceholder.typicode.com/posts/9999') // Id inexistente
  .then((response) => {
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Datos recibidos:', data);
  })
  .catch((error) => {
    console.error('Error manejado manualmente:', error);
  });
</code>
</pre>
<p>
  En el ejemplo, se verifica el estado HTTP usando <code>response.ok</code>. Si no es <code>true</code>, se lanza un error de forma manual.
</p>
`,
    12: `
<h2>Usar <code>async/await</code> limpia el código para manejar operaciones fetch</h2>
<p>
  En lugar de manejar múltiples <code>.then()</code> y <code>.catch()</code>, puedes utilizar <code>async/await</code>, introducido en ES2017, para simplificar el código y hacerlo más legible.
</p>
<pre>
<code>
async function obtenerDatos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error(\`Error HTTP: \${response.status}\`);
    }
    const datos = await response.json(); // Procesar como JSON
    console.log('Datos recibidos:', datos);
  } catch (error) {
    console.error('Error capturado:', error);
  }
}

obtenerDatos();
</code>
</pre>
<p>
  Usar <code>async/await</code> mejora la legibilidad, especialmente en escenarios complejos donde manejas varias solicitudes en cascada.
</p>
`,
    13: `
<h2>Envía un formulario simulando un POST mediante <code>fetch</code> con datos en formato JSON</h2>
<p>
  Puedes usar <code>fetch</code> para simular el envío de un formulario mediante una solicitud <strong>POST</strong>. Se hace serializando los datos del formulario en formato JSON y enviándolos en el cuerpo de la solicitud (<code>body</code>).
</p>
<pre>
<code>
// Elemento del formulario
const formulario = document.querySelector('#miFormulario');

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Prevenir redirección

  const datos = {
    nombre: formulario.nombre.value,
    email: formulario.email.value,
    mensaje: formulario.mensaje.value,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datos), // Convertir datos a JSON
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Formulario enviado con éxito:', data);
    })
    .catch((error) => console.error('Error al enviar formulario:', error));
});
</code>
</pre>
<p>
  Este ejemplo es ideal para simular formularios dinámicos en aplicaciones frontend.
</p>
`,
    14: `
<h2>Utiliza <code>AbortController</code> para cancelar solicitudes con timeout</h2>
<p>
  <code>AbortController</code> es una herramienta avanzada que permite cancelar solicitudes <code>fetch</code>. Esto es útil en escenarios donde deseas establecer límites de tiempo (timeout) para tus solicitudes.
</p>
<pre>
<code>
// Crear un controlador para la solicitud
const controlador = new AbortController();
const signal = controlador.signal;

// Hacer solicitud fetch
fetch('https://jsonplaceholder.typicode.com/posts', { signal })
  .then((response) => response.json())
  .then((data) => {
    console.log('Datos obtenidos:', data);
  })
  .catch((error) => {
    if (error.name === 'AbortError') {
      console.error('Solicitud cancelada por timeout.');
    } else {
      console.error('Error:', error);
    }
  });

// Configurar timeout para cancelar solicitud
setTimeout(() => {
  controlador.abort(); // Cancelar solicitud
  console.log('Solicitud abortada.');
}, 5000); // Timeout de 5 segundos
</code>
</pre>
<p>
  En este ejemplo, si la solicitud tarda más de 5 segundos, será cancelada automáticamente mediante <code>AbortController</code>.
</p>
`,
    15: `
<h2>Consideraciones en CORS y CSRF para garantizar la seguridad</h2>
<p>
  Al trabajar con <code>fetch</code>, es importante comprender las implicaciones de seguridad relacionadas con <strong>CORS</strong> (Cross-Origin Resource Sharing) y <strong>CSRF</strong> (Cross-Site Request Forgery):
</p>
<ul>
  <li><strong>CORS:</strong> Para realizar solicitudes a dominios cruzados, el servidor debe permitirlas explícitamente configurando los encabezados HTTP apropiados, como <code>Access-Control-Allow-Origin</code>. Sin esta configuración, realizar solicitudes con <code>fetch</code> generará un error de CORS en el navegador.</li>
  <li><strong>CSRF:</strong> Las aplicaciones que manejan autenticación deben protegerse contra ataques CSRF mediante el uso de tokens de protección o encabezados personalizados.</li>
</ul>

<p>Ejemplo de envío seguro con encabezados relacionados con CORS:</p>
<pre>
<code>
fetch('https://api.ejemplo.com/secure-data', {
  method: 'POST',
  credentials: 'include', // Enviar cookies en solicitudes CORS
  headers: {
    'Authorization': 'Bearer tokenSeguro123',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ message: 'Hola' }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error al realizar la solicitud segura.');
    }
    return response.json();
  })
  .then((data) => console.log('Datos recibidos:', data))
  .catch((error) => console.error('Error de CORS o CSRF:', error));
</code>
</pre>
<p>Configurar correctamente CORS en el servidor es fundamental para evitar errores, y usar tokens o encabezados personalizados es esencial contra ataques CSRF.</p>
`,
    x: `Selecciona por dónde quieres comenzar usando el Menú de Apartados.`,
  };

  // Cambiar el contenido del div con el texto correspondiente
  contenidoApartado.innerHTML = contenidos[apartado] || "Contenido no disponible.";
}
