
 const miBoton = document.querySelector('.mi-boton');

miBoton.addEventListener('click', ()=>{
    
    const miEmail = document.querySelector('.mi-email').value;
    emailValido = validarEmail(miEmail);

 /* 
    correcto(); */


    //Validamos el correo
    if (!emailValido){
        alert('email incorrecto, ingresa uno válido')
    miEmail.focus;
    return;
    }

    //Validamos el Password
    const pass = document.querySelector('.mi-password').value;
    passwordValido = validarPassword(pass);
    if (!passwordValido){
        alert('Password debe tener al menos 8 caracteres');
        pass.focus;
        return;
    }



    if (passwordValido && emailValido){
    
        alert('Usuario y Contraseña Correctos');
    }

    
    if (regex.test(campo.value)) {
        alert('Contraseña Correcta');
      } else {
        alert('La contraseña debe tener al menos 2 mayúsculas, 1 minúscula, números y 1 caracter especial');
      }

    
    



    


});


function correcto(){
    if (passwordValido & emailValido){
    
        alert('Usuario y Contraseña Correctos');
    }
}


//Funcion para validar correo
function validarEmail(email) {
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   }



   //Funcion para validar password
   function validarPassword(miPassword){
    if(miPassword.length >=8)
    return true;
    else
    return false;

}



regex = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
 

 //Se muestra un texto válido/inválido a modo de ejemplo
 function valirdarcaracteres(miPassword){
    if (regex.test(campo.value)) {
        valido.innerText = "válido";
      } else {
        valido.innerText = "incorrecto";
      }
 }
