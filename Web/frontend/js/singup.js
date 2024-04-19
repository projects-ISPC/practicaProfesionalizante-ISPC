
function main(){
    captura_boton();
}

function captura_boton(){
    document.querySelector("#crear").setAttribute("onclick", "dataRead()");
}

function dataRead(){
    let myObject = {
        nombre: document.querySelector("#nombresu").value,
        dni: document.querySelector("#dnisu").value,
        area: document.querySelector("#areasu").value,
        telefono: document.querySelector("#telefonosu").value,
        localidad: document.querySelector("#localidadsu").value,
        provincia: document.querySelector("#provinciasu").value,
        mail: document.querySelector("#mailsu").value,
        contrasena: document.querySelector("#contrasenasu").value,
    };
    save_localStorage(myObject);
}

function save_localStorage(myObject){
    localStorage.setItem("infoUser", JSON.stringify(myObject));
}

function read_localStorage(){
    let infoUser = localStorage.getItem("infoUser");
    //aca solo era para pasar todo a string y mostrarlo en consola...
    /* let myObject = JSON.parse(infoUser);
    console.log(myObject); */

    //aca solo demuestra que toma los datos y los devuelve correctamente...
    /* document.querySelector("#nombre").value = myObject.nombre;
    document.querySelector("#dni").value = myObject.dni;
    document.querySelector("#area").value = myObject.area;
    document.querySelector("#telefono").value = myObject.telefono;
    document.querySelector("#localidad").value =  myObject.localidad;
    document.querySelector("#provincia").value = myObject.provincia;
    document.querySelector("#mail").value = myObject.mail;
    document.querySelector("#contrasena").value = myObject.contrasena;*/
} 

main();

//--------------------------------------------------------------------------------------------
/* buttonCrearCuenta.addEventListener('click', (event)=>{
    event.preventDefault();
});  */

//forma con pattern y verifica cuando terminas de escribir en el input
const $form=document.querySelector('.formulario'),
$inputs = document.querySelectorAll('.formulario [required]');
$inputs.forEach(input =>{
   const $span = document.createElement('span');
   $span.id=input.name;
   $span.textContent=input.title;
   $span.classList.add('formulario-error','none')
   input.insertAdjacentElement('afterend',$span);
});

document.addEventListener('keyup',(e) =>{
   if(e.target.matches('.formulario [required]')){
       let $input = e.target;
       pattern = $input.pattern || $input.dataset.pattern;
       
       if(pattern){
           let regex = new RegExp(pattern);
           return !regex.exec($input.value)
           ? document.getElementById($input.name).classList.add('is-active')
           : document.getElementById($input.name).classList.remove('is-active');
       }
       if(!pattern){
           return $input.value ===''
           ? document.getElementById($input.name).classList.add('is-active')
           : document.getElementById($input.name).classList.remove('is-active');
       }
   }
});