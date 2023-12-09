
var usuarios = [];
let botonIngresar = document.getElementById("btnAcceder");

let usuariotxt = document.getElementById("accesoCorreo");
let passwordtxt = document.getElementById("accesoContraseña");




botonIngresar.addEventListener("click", () => {
  loginUsuario(usuariotxt.value, passwordtxt.value);
});

//var usuarioAutenticado="";

const seleccionarOpcionMenu = (opcion, etiqueta) => {
    document.querySelectorAll('.opcion-menu').forEach(item =>{
        item.classList.remove('seleccionado');
    });
    etiqueta.classList.add('seleccionado');

    document.getElementById('seccion-0').style.display = 'none';   
    //document.getElementById('seccion-1').style.display = 'none';
    document.getElementById('seccion-2').style.display = 'none';
    document.getElementById('seccion-3').style.display = 'none';
    document.getElementById('seccion-4').style.display = 'none';
    document.getElementById('seccion-5').style.display = 'none';
    document.getElementById('seccion-' + opcion).style.display = 'block'

};


//obtener usuarios
const obtenetUsuarios = async () =>{
    let resultado = await fetch('http://localhost:4000/usuarios',{
        method: "GET",
        headers: {
            "Content-Type": "applicacion/json",
        },
    });
    let informacion = await resultado.json()
;
usuarios = informacion;
console.log(usuarios);

};



//redireccionar a registro usuarios
function redirigirARegistro() {
    window.location.href = "registro.html";
  }
   
// redireccionar a acceso
function redirigirAAcceder() {
    window.location.href = "acceder.html"; 
  }

 
 //renderizar carrucel
function redirigirAConocenos() {
    window.location.href = "carrucel.html"; // Reemplaza con tu nombre de archivo real
  }

  
  //elegor el plan e ir a acceder:
  const seleccionarOpcionMenu2 = (opcion) => {
    switch (opcion) {
        case 1:
            window.location.href = 'registro.html';
            break;
        case 2:
            window.location.href = 'registro.html';
            break;
        case 3:
            window.location.href = 'registro.html';
            break;
        default:
            break;
    }
};


//para agregar usuarios desde el formulario:


function registrarUsuario() {
    // Obtén los valores del formulario
    const nombreCompleto = document.getElementById('usuarioInputNombre').value;
    const correo = document.getElementById('usuarioInputcorreo').value;
    const contraseña = document.getElementById('contrasenaInputContraseña').value;
    const confirmarContraseña = document.getElementById('contrasenaInputConfirmar').value;
  

    if (contraseña !== confirmarContraseña) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      nombreCompleto: nombreCompleto,
      correo: correo,
      contrasena: contraseña,
    };
  
    // Realiza la solicitud POST al backend
    fetch('http://localhost:4000/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoUsuario),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del backend:', data);
      })
      .catch(error => {

        console.error('Error al comunicarse con el backend:', error);
      });
  }
  

  const loginUsuario = async (email, password) => {
    // const email = document.getElementById("accesoCorreo").value;
    // const password = document.getElementById("accesoContraseña").value;
  
    try {
      let respuesta = await fetch(`http://localhost:4000/usuarios/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "correo": `${email}`,
          "contrasena": `${password}`,
        }),
      });
  
      let data = await respuesta.json();
      console.log(usuariotxt.value);
  
      if (data.exito) {
        // Redirige a la página especificada en la respuesta del servidor
        window.location.href = data.redireccionar;
      } else {
        console.log(data.mensaje);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Error al iniciar sesión. Por favor, inténtalo nuevamente.');
    }
    
  };


  




//funcion para obtener los proyectos de un solo usuario
const obtenerProyectosUsuario = async (id) =>{
  let resultado = await fetch(`http://localhost:4000/usuarios/${id}/proyectos`,{
      method: "GET",
      headers: {
          "Content-Type": "applicacion/json",
      },
  });
  let informacion = await resultado.json()
  console.log(informacion);
}




//console.log(usuarioAutenticado);
obtenetUsuarios();








