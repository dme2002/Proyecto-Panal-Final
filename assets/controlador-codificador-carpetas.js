var usuarios = [];
var proyectos = [];
var carpetas = [];
var planes = [];
var proyectoSeleccionado = null;

document.getElementById("contenedor-tabla").style.display = "block";
document.getElementById("contenedor-carpetas").style.display = "none";
var botoncalendario = document.getElementById("calendario")


function mostrarModalUsuario() {
  const logoUsuario = document.getElementById("logo-usuario");
  const modalUsuario = new bootstrap.Modal(
    document.getElementById("modalUsuario")
  );

  // Agrega un evento de clic al logo de usuario
  logoUsuario.addEventListener("click", () => {
    // Muestra el modal al hacer clic
    modalUsuario.show();

    // Cambia el color de fondo y agrega la clase 'activo' al logo-usuario
    logoUsuario.style.backgroundColor = "#B3BC47CC"; // El mismo color del modal
    logoUsuario.classList.add("activo");
  });

  // Agrega un evento de ocultación al modal para limpiar el estado
  modalUsuario._element.addEventListener("hidden.bs.modal", () => {
    // Limpia el fondo y la clase 'activo' del logo-usuario al cerrar el modal
    logoUsuario.style.backgroundColor = "";
    logoUsuario.classList.remove("activo");
  });
}

function mostrarModalNuevoProyecto() {
  var modalNuevoProyecto = new bootstrap.Modal(
    document.getElementById("modalNuevoProyecto")
  );

  // Mostrar la modal
  modalNuevoProyecto.show();
}




// Función para mostrar el modal con el calendario
  // Mostrar el modal
  function mostrarCalendario() {
    var modal = new bootstrap.Modal(document.getElementById('calendario-modal'));
    modal.show();
    inicializarCalendario();
  }


//   function MostrarContenidoProyecto(){
//     document.getElementById('contenedor-tabla').style.display = 'none';
//     document.getElementById('contenedor-carpetas').style.display = 'block';
// console.log("Presionaste un Proyecto");

// //console.log("Presionaste el proyecto con id:" proyecto.id)

//     }

function mostrarModalConfiguracion() {
  var modalConfiguracion = new bootstrap.Modal(
    document.getElementById("preprocesadoresModal")
  );

  // Mostrar la modal
  modalConfiguracion.show();
}

function mostrarCodificador(){
  //redireccionando a codificador.html
  window.location.href = "codificador.html";
}


//Traer los usuarios
const obtenerUsuarios = async () => {
  let resultado = await fetch("http://localhost:4000/usuarios", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let informacion = await resultado.json();
  usuarios = informacion;
  console.log(usuarios);

  // console.log(usuarios);
};

//traer los proyectos
const obtenerProyectos = async () => {
  let resultado = await fetch("http://localhost:4000/proyectos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let informacion = await resultado.json();
  proyectos = informacion;
  console.log(proyectos);
  renderizarProyectos();
};

//traer las carpetas
const obtenerCarpetas = async () => {
  let resultado = await fetch("http://localhost:4000/carpetas", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let informacion = await resultado.json();
  carpetas = informacion;
  console.log(informacion);
  //renderizarCarpetas();
};

//traer los planes
const obtenerPlanes = async () => {
  let resultado = await fetch("http://localhost:4000/planes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let informacion = await resultado.json();
  planes = informacion;
  console.log(informacion);
};

const obtenerPlandeUnUsuario = async (id) => {
  let resultado = await fetch(`http://localhost:4000/usuarios/${id}/planes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let informacion = await resultado.json();
  planUsuario = informacion;
  console.log(informacion);
};

const obtenerProyectodeUnUsuario = async (id) => {
  let resultado = await fetch(
    `http://localhost:4000/usuarios/${id}/proyectos`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let informacion = await resultado.json();
  proyectosUsuario = informacion;
  console.log(informacion);
};

// Obteniendo las carpetas de un Proyecto
const obtenerCarpetasdeUnProyecto = async (id) => {
  let resultado = await fetch(
    `http://localhost:4000/proyectos/${id}/carpetas`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let informacion = await resultado.json();
  carpetasProyecto = informacion;
  console.log(informacion);
};

//Obteniendo los archivos de una carpeta

//Renderizando los proyectos
const renderizarProyectos = () => {
  // let contenedorProyectos = document.getElementById("contenedor-tabla");

  proyectos.forEach((proyecto) => {
    document.getElementById(
      "contenedor-tabla"
    ).innerHTML += `<div id="proyecto" onclick="seleccionarProyecto('${proyecto._id}')">
    <h1>${proyecto.nombreProyecto}</h1>
  </div>`;
  });
};

//Renderizando las carpetas

// const renderizarCarpetas = () => {
//   // let contenedorProyectos = document.getElementById("contenedor-tabla");

//    carpetas.forEach((carpeta) => {
//      document.getElementById("contenedor-table").innerHTML += `<div id="proyecto" >
//      <h1>${carpeta.nombreCarpeta}</h1>
//    </div>`
//    })
//  }

//  const renderizarCarpetasdeUnProyecto = () => {

//  }

const seleccionarProyecto = async (id) => {
  document.getElementById("contenedor-tabla").style.display = "none";
  document.getElementById("contenedor-carpetas").style.display = "block";
  idProyectoSeleccionado = id;
  console.log(idProyectoSeleccionado);

  let resultado = await fetch("http://localhost:4000/proyectos/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  proyectoSeleccionado = await resultado.json();
  console.log(proyectoSeleccionado);
  const carpetas = proyectoSeleccionado.carpetas;
  console.log(carpetas);

  carpetas.forEach((idCarpeta) => {
    let carpetaProyecto = getInfoCarpeta(idCarpeta);
    document.getElementById(
      "contenedor-table"
    ).innerHTML += `<div id="proyecto" >
          <h1>${carpetaProyecto.nombreCarpeta}</h1>
        </div>`;
  });
};

function getInfoCarpeta(idCarpeta) {
  const { nombreCarpeta } = carpetas.find((crpt) => crpt._id == idCarpeta);

  return { nombreCarpeta };
}

const agregarProyecto = (async) => {
  console.log("Quieres crear un proyecto");
  let nombreProyecto = document.getElementById("nombreProyecto").value;
  let descripcionProyecto = document.getElementById(
    "descripcionProyecto"
  ).value;

  console.log("el nombre del proyecto es:" + nombreProyecto);
  console.log("la descripcion del proyecto es:" + descripcionProyecto);
};

//<-------------------------CODIFICADOR DE HTML Y CSS, JS---------------------------------------------------------->///

function renderizarCodigo() {
  //tomando el valor de los textarea
  var html = document.getElementById("texto-HTML").value;
  var css = document.getElementById("texto-CSS").value;
  var js = document.getElementById("texto-JS").value;

  console.log("El codigo HTML ES:" + html);
  console.log("El codigo CSS ES:" + css);
  console.log("El codigo JS ES:" + js);

  //RENDERIZANDO EL CODIGO EN EL IFRAME
  var iframe = document.getElementById("outputFrame").contentWindow.document;

  iframe.open();
  iframe.write("");
  iframe.close();

  // Escribir el código en el iframe y aplicar estilos
  //iframe.open();
  iframe.write("<html><head><style>" + css + "</style></head><body>");
  //  iframe.write(html + js);
  iframe.write(html);
  iframe.write("<script>" + js + "</script>");
  iframe.write("</body></html>");
}

function descargarArchivos() {
  const html = document.documentElement.outerHTML;
  const css = Array.from(document.styleSheets)
      .map(styleSheet => Array.from(styleSheet.cssRules).map(rule => rule.cssText).join('\n'))
      .join('\n');
  const js = Array.from(document.scripts).map(script => script.text).join('\n');

  fetch('/guardar-archivos', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          html,
          css,
          js,
      }),
  })
  .then(response => response.text())
  .then(message => {
      alert(message);
      window.location.href = '/archivos_guardados.zip'; // Redirige a la ubicación del ZIP
  })
  .catch(error => console.error('Error al guardar archivos:', error));



  console.log("Ya se descargaron los archivos");
}

function redirigirAProyectos() {
  window.location.href = "carpetas.html";
}
 
// los proyectos de un solo usuario 















//Funcion para renderizar proyectos y carpetas de un usuario

//mostrando el calendario 
function inicializarCalendario() {
  var calendarioElement = document.getElementById('calendario-simple');
  var fechaHoy = new Date();  // Obtener la fecha actual
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  calendarioElement.innerHTML = `<p>Fecha Actual: ${fechaHoy.toLocaleDateString('es-ES', options)}</p>`;

  // Añadir días del mes al calendario
  for (var i = 1; i <= 31; i++) {
    calendarioElement.innerHTML += `<div>${i}</div>`;
  }
}






//obtenerCarpetasdeUnProyecto("656ff49b2c3f856a333a1591")
obtenerUsuarios();
obtenerProyectos();
obtenerCarpetas();
obtenerPlanes();

//Renderizar los proyectos

// function renderizarProyectos(){
//   document.getElementById("")

// }

//Renderizar las carpetas dentro

//Renderizar los archivos dentro de las carpetas
