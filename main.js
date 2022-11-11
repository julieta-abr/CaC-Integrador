//VENTA DE TICKETS
//Valor total del ticket
const valorRealTicket=200;

//VALORES
let nombre=document.getElementById("nombre");
let apellido=document.getElementById("apellido");
let mail=document.getElementById("mail");
let cantTickets= document.getElementById("cantidadTickets");
let categoria= document.getElementById("categoriaSelect");
let btnCalcular= document.getElementById("botonResumen");
let totalCompra= document.getElementById("totalPago");


function resumen() {
    
    let expRegNP=/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    let expRegMail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    //VERIFICACIÓN DE CAMPOS
    
    //NOMBRE
    if (nombre.value === "") {
        nombre.classList.add("is-invalid");
        nombre.focus();
        return
    }else{
        nombre.classList.remove("is-invalid");
    }
    
    if(!expRegNP.test(nombre.value)){
        alert("El nombre ingresado no es válido");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return
    }else{
        nombre.classList.remove("is-invalid");
    }

    //APELLIDO
    if (apellido.value === "") {
        apellido.classList.add("is-invalid");
        apellido.focus();
        return
    }else{
        apellido.classList.remove("is-invalid");
    }
    if(!expRegNP.test(apellido.value)){
        alert("El apellido ingresado no es válido")
        apellido.classList.add("is-invalid");
        apellido.focus();
        return
    }else{
        apellido.classList.remove("is-invalid");
    }

    //MAIL
    if (mail.value === "") {
        mail.classList.add("is-invalid");
        mail.focus();
        return
    }else{
        mail.classList.remove("is-invalid");
    }

    if(!expRegMail.test(mail.value)){
        alert("El mail ingresado no es válido");
        mail.classList.add("is-invalid");
        mail.focus();
        return
    }else{
        mail.classList.remove("is-invalid");
    }

    //CANTIDAD INGRESADA
    if (cantTickets.value==0){
        cantTickets.classList.add("is-invalid");
        cantTickets.focus();
        return
    }else{
        cantTickets.classList.remove("is-invalid");
    }

    // CÁLCULO SEGÚN LA CATEGORÍA
    if (Number(cantTickets.value)){
        let totalDesc = (cantTickets.value * valorRealTicket) 
        switch(categoria.value){
            case"Estudiante": {
                totalDesc= totalDesc - (totalDesc * 0.80);
                break
            }
            case"Trainee":{
                totalDesc= totalDesc - (totalDesc * 0.50);
                break
            }
            case"Junior":{
                totalDesc= totalDesc - (totalDesc * 0.15);
                break
            }
            case"": {
                totalDesc=200;
            }
        }

        totalPago.innerHTML = totalDesc;
    }


}

//BORRAR EL VALOR
function reestablecerValor(){
    totalPago.innerHTML = "";
}

