let txtNombre = document.getElementById (`nombre`).value;
let txtApellido = document.getElementById (`apellido`).value;
let txtPartido = document.getElementById (`partido`).value;
let antiguedad =document.getElementById (`antiguedad`).value;

let btn = document. getElementById (`enviar`);
btn.addEventListener (`click`, mostrarMensaje)
function mostrarMensaje (event){
    evt.preventDefault ();
    console.log(txtNombre);
    console.log(txtApellido);
    console.log(txtPartido);
    console.log(antiguedad);
    document.getElementById (`mensaje`).innerText= 
    "Bienvenido/a" +txtNombre+","+txtApellido+ "de"+ txtPartido;
}
