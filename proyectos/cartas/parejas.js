tabla = document.querySelector("table");
tabla.addEventListener("click", pareja);
let boton = document.getElementById("limpio");
boton.addEventListener("click",() =>{localStorage.clear()});
function limpio(){
    
}
//https://www.google.com/search?q=carta+volteada+png&client=opera-gx&hs=DOZ&sca_esv=21c38533450dea46&udm=2&biw=1879&bih=1007&sxsrf=ADLYWIJ2vcuaGHDIkqMpaOrfrctDN9ZskQ%3A1731968409744&ei=mb07Z7aNLa2HkdUPsfHPyQc&ved=0ahUKEwj2vcyO9eaJAxWtQ6QEHbH4M3kQ4dUDCBA&uact=5&oq=carta+volteada+png&gs_lp=EgNpbWciEmNhcnRhIHZvbHRlYWRhIHBuZ0j6CVCmB1jDCHABeACQAQCYAWygAdIBqgEDMC4yuAEDyAEA-AEBmAIBoAJowgIEECMYJ5gDAOIDBRIBMSBAiAYBkgcDMC4xoAe9Ag&sclient=img#vhid=EOwUXVL_Lgh5RM&vssid=mosaic
// espacios = document.querySelectorAll("td");
// espacios.forEach(element => {
//     element.addEventListener("click", pareja);
// });
/*1: Homer
2: Marge
3: Bart
4: Maggie
5: appu
6: Disco Stu*/

function pareja(e) {
    let espacioId = e.target.id;
    let espacioClase = e.target.className;
    let espacio = e.target.classList;
    console.log(espacioId);
     switch (espacioClase){
         case "1":
             document.getElementById(espacioId).setAttribute("src", "cartas/homer.png");
             break;
         case "2":
             document.getElementById(espacioId).setAttribute("src", "cartas/marge.png");
             break;
         case "3":
             document.getElementById(espacioId).setAttribute("src", "cartas/bart.png");
             break;
         case "4":
             document.getElementById(espacioId).setAttribute("src", "cartas/maggie.png");
             break;
         case "5":
             document.getElementById(espacioId).setAttribute("src", "cartas/apu.png");
             break;
         case "6":
             document.getElementById(espacioId).setAttribute("src", "cartas/stu.png");
             break;
     }
    // document.getElementById(espacioId).innerHTML = "a";
    if (!localStorage.auxiliar) {
        if(espacioClase == "correcto"){

        }
        localStorage.setItem("auxiliar", espacioClase);
        localStorage.setItem("idAux", espacioId);
        // document.getElementById(espacioId).setAttribute("src", "cartas/");
        localStorage.setItem("auxClase", espacio);
        espacio.remove(espacioClase);
        espacio.add("volteado");
    } else {
        let aux = localStorage.getItem("auxiliar");
        let id = localStorage.getItem("idAux");
        let auxEspacio = localStorage.getItem("auxClase");
        console.log("auxiliar: " +auxEspacio);
        if (e.target.className == "volteado") {
            espacio.remove("volteado");
            espacio.add(aux);
        } else {
            espacio.remove(espacioClase);
            espacio.add("volteado");
        }
        if(aux == espacioClase){
            console.log("correcto");
        }else{
            console.log("incorrecto");
            document.getElementById(id).setAttribute("src", "cartas/carta.png");
            document.getElementById(espacioId).setAttribute("src", "cartas/carta.png");
            document.getElementById(espacioId).setAttribute("class",espacioClase);
            document.getElementById(id).setAttribute("class", aux);
        }
        
        localStorage.clear();
    }
}