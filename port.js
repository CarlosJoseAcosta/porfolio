/*bg-gradient-to-b from-slate-500 to-slate-900 h-max**/
let nav = document.createElement("nav");
let columnaNav = document.createElement("div");
let enlacesNav = document.createElement("a");
let enlacesNav2 = document.createElement("a");
let enlacesNav3 = document.createElement("a");
let enlacesNav4 = document.createElement("a");
let textoNav = document.createElement("p");
let textoNav2 = document.createElement("p");
let textoNav3 = document.createElement("p");
let textoNav4 = document.createElement("p");

textoNav.textContent = "Introduccion";
textoNav2.textContent = "Estudios";
textoNav3.textContent = "Proyectos destacados";
textoNav4.textContent = "Tecnologia aprendida";

document.body.appendChild(nav);
nav.appendChild(columnaNav);
columnaNav.appendChild(enlacesNav);
enlacesNav.appendChild(textoNav);
columnaNav.appendChild(enlacesNav2);
enlacesNav2.appendChild(textoNav2);
columnaNav.appendChild(enlacesNav3);
enlacesNav3.appendChild(textoNav3);
columnaNav.appendChild(enlacesNav3);
enlacesNav3.appendChild(textoNav3);
columnaNav.appendChild(enlacesNav4);
enlacesNav4.appendChild(textoNav4);

document.body.classList.add(
    "bg-gradient-to-b",
    "from-slate-500",
    "to-slate-900",
    "bg-no-repeat",
    "bg-cover",
    "h-max"
);

nav.classList.add(
    "bg-purple-700",
    "px-14",
    "py-3",
    "text-white",
    "mx-14"
);

columnaNav.classList.add(
    "grid",
    "grid-cols-4",
    "gap-4"
);

enlacesNav.setAttribute("href", "#intro");
enlacesNav2.setAttribute("href", "#estudios");
enlacesNav3.setAttribute("href", "#proyectos");
enlacesNav4.setAttribute("href", "#");

/*FIN DEL NAV*/

let seccion = document.createElement("section");
let tituloSeccion = document.createElement("h3");
let textoPresentacion = document.createElement("p");

let hoy = new Date();
let anio = hoy.getFullYear();
let edad = anio - 1999;
console.log(edad);

tituloSeccion.textContent = "Introduccion";
textoPresentacion.textContent = "Buenas, me llamo Carlos Jose Acosta de Filippis, tengo " +edad+ ", tengo una titulacion en administracion de dispositivos en red y para cuando acabe el año esclar de 2024/2025 espero el de programador web, mis fortalezas es la adaptacion para cualquier hambiente de trabajo.";

document.body.appendChild(seccion);
seccion.appendChild(tituloSeccion);
seccion.appendChild(textoPresentacion);

seccion.classList.add(
    "my-2",
    "mx-14",
    "bg-center",
    "text-white",
    "intro"
);

tituloSeccion.classList.add(
    "text-2xl",
    "text-center",
    "font-bold"
);
seccion.setAttribute("id","intro");

//FIN DE LA INTRODUCCION

let seccionEstudio = document.createElement("section");
let tituloEstudio = document.createElement("h3");
let separador1 = document.createElement("div");
let separador2 = document.createElement("div");
let separador3 = document.createElement("div");
let centro1 = document.createElement("p");
let centro2 = document.createElement("p");
let centro3 = document.createElement("p");
let titu1 = document.createElement("p");
let titu2 = document.createElement("p");
let titu3 = document.createElement("p");
let sepa1 = document.createElement("br")

tituloEstudio.textContent = "Estudios";

centro1.textContent = "Centro: Sagrada Familia Nazaret";
centro2.textContent = "Centro: IES Eusebio Barreto";
centro3.textContent = "Centro: Josemaria Perez Pulido";
titu1.textContent = "Titulacion: Secundaria Obliugatoria";
titu2.textContent = "Titulacion: Bachillerato de ciencias tecnologicas";
titu3.textContent = "Titulacion: Tecnico superior de sistemas en red";

document.body.appendChild(seccionEstudio);
seccionEstudio.appendChild(tituloEstudio);
seccionEstudio.appendChild(separador1);
separador1.appendChild(centro1);
separador1.appendChild(titu1);
seccionEstudio.appendChild(separador2);
separador2.appendChild(centro2);
separador2.appendChild(titu2);
seccionEstudio.appendChild(separador3);
separador3.appendChild(centro3);
separador3.appendChild(titu3);
seccionEstudio.appendChild(sepa1);
seccionEstudio.appendChild(sepa1);

seccionEstudio.classList.add(
    "grid",
    "grid-cols-1",
    "text-center",
    "mx-3"
)
tituloEstudio.classList.add(
    "text-2xl",
    "text-white",
    "text-center",
    "font-bold"
);
centro1.classList.add(
    "text-white"
);
centro2.classList.add(
    "text-white"
);
centro3.classList.add(
    "text-white"
);
titu1.classList.add(
    "text-white"
);
titu2.classList.add(
    "text-white"
);
titu3.classList.add(
    "text-white",
    "mb-3"
);

seccionEstudio.setAttribute("id", "estudios");

//FIN DE ESTUDIOS

let SeccionProyecto = document.createElement("section");
let separaProy1 = document.createElement("div");
let separaProy2 = document.createElement("div");
let separaProy3 = document.createElement("div");
let separaProy4 = document.createElement("div");
let fondoPro1 = document.createElement("div");
let fondoPro2 = document.createElement("div");
let fondoPro3 = document.createElement("div");
let fondoPro4 = document.createElement("div");
let tituloProyectos = document.createElement("h3"); 
let titut11 = document.createElement("h3");
let titut12 = document.createElement("h3");
let titut13 = document.createElement("h3");
let titut14 = document.createElement("h3");
let descPro1 = document.createElement("p");
let descPro2 = document.createElement("p");
let descPro3 = document.createElement("p");
let descPro4 = document.createElement("p");
let botonPro1 = document.createElement("button");
let botonPro2 = document.createElement("button");
let botonPro3 = document.createElement("button");
let botonPro4 = document.createElement("button");

tituloProyectos.textContent = "Proyectos destacados";
titut11.textContent = "Encontrar la pareja";
titut12.textContent = 'Calcualdora "inteligente"';
titut13.textContent = "Tienda de boxeo";
titut14.textContent = "Pruebas con bootstrap";
descPro1.textContent = "Este proyecto trata de un juego de memoria donde el usuario puede encontrar parejas de cartas para ganar el juego";
descPro2.textContent = "En este proyecto podremos ver una calculadora donde se guardara los numeros introducidos, se guardara los resultados de los calculos a travez de cokies y como cualquier calculadora puedes hacer operaciones matematicas";
descPro3.textContent = "En este proyecto usamos el framework de diseño Tailwind donde nos dejaron una imagen de una tienda de boxeo y tuvimos que hacer su diseño tal cual, dicho diseño es responsivo ya que cambia el diseño dependidendo de si se movil u ordenador";
descPro4.textContent = "Este proyecto es la prueba de un panel de control diseñado en bootstrap, cabe decir que no es funcional, simplemente es el diseño";
botonPro1.textContent = "Ir a Proyecto";
botonPro2.textContent = "Ir a Proyecto";
botonPro3.textContent = "Ir a Proyecto";
botonPro4.textContent = "Ir a Proyecto";



document.body.appendChild(SeccionProyecto);
SeccionProyecto.appendChild(tituloProyectos);
SeccionProyecto.appendChild(separaProy1);
separaProy1.appendChild(fondoPro1);
separaProy1.appendChild(titut11);
separaProy1.appendChild(descPro1);
separaProy1.appendChild(botonPro1);
SeccionProyecto.appendChild(separaProy2);
separaProy2.appendChild(fondoPro2);
separaProy2.appendChild(titut12);
separaProy2.appendChild(descPro2);
separaProy2.appendChild(botonPro2);
SeccionProyecto.appendChild(separaProy3);
separaProy3.appendChild(fondoPro3);
separaProy3.appendChild(titut13);
separaProy3.appendChild(descPro3);
separaProy3.appendChild(botonPro3);
SeccionProyecto.appendChild(separaProy4);
separaProy4.appendChild(fondoPro4);
separaProy4.appendChild(titut14);
separaProy4.appendChild(descPro4);
separaProy4.appendChild(botonPro4);


SeccionProyecto.setAttribute("id", "proyectos");


SeccionProyecto.classList.add(
    "grid",
    "grid-cols-1",
    "text-center"
);
tituloProyectos.classList.add(
    "text-2xl",
    "text-white",
    "text-center",
    "font-bold",
    "my-2"
)
separaProy1.classList.add(
    "border-solid",
    "border-2",
    "border-indigo-500",
    "mx-5"
);
fondoPro1.classList.add(
    "my-2",
    "bg-[url(proyectos/capturas/pareja.png)]",
    "bg-no-repeat",
    "mx-5",
    "h-56",
    "bg-center"
);
titut11.classList.add(
    "text-xl",
    "text-white",
    "text-center"
);
descPro1.classList.add(
    "text-white"
);
botonPro1.classList.add(
    "bg-purple-700",
    "text-white",
    "px-4",
    "py-2",
    "mx-5",
    "my-2"
);
separaProy2.classList.add(
    "border-solid",
    "border-2",
    "border-indigo-500",
    "mx-5",
    "my-2"
);
fondoPro2.classList.add(
    "my-2",
    "bg-[url(proyectos/capturas/calculadora.png)]",
    "bg-no-repeat",
    "mx-5",
    "h-56",
    "bg-center"
);
titut12.classList.add(
    "text-xl",
    "text-white",
    "text-center"
);
descPro2.classList.add(
    "text-white"
);
botonPro2.classList.add(
    "bg-purple-700",
    "text-white",
    "px-4",
    "py-2",
    "mx-5",
    "my-2"
);
separaProy3.classList.add(
    "border-solid",
    "border-2",
    "border-indigo-500",
    "mx-5"
);
fondoPro3.classList.add(
    "my-2",
    "bg-[url(proyectos/capturas/tiendaBox.png)]",
    "bg-no-repeat",
    "mx-5",
    "h-56",
    "bg-center"
);
titut13.classList.add(
    "text-xl",
    "text-white",
    "text-center"
);
descPro3.classList.add(
    "text-white"
);
botonPro3.classList.add(
    "bg-purple-700",
    "text-white",
    "px-4",
    "py-2",
    "mx-5",
    "my-2"
);
separaProy4.classList.add(
    "my-2",
    "border-solid",
    "border-2",
    "border-indigo-500",
    "mx-5"
);
fondoPro4.classList.add(
    "my-2",
    "bg-[url(proyectos/capturas/pruebaBootstrap.png)]",
    "bg-no-repeat",
    "mx-5",
    "h-56",
    "bg-center"
);
titut14.classList.add(
    "text-xl",
    "text-white",
    "text-center"
);
descPro4.classList.add(
    "text-white"
);
botonPro4.classList.add(
    "bg-purple-700",
    "text-white",
    "px-4",
    "py-2",
    "mx-5",
    "my-2"
);