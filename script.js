/*==========================================
        VARIABLES
==========================================*/

let progreso = 0;

let puntaje = 0;

/*==========================================
        IR A LA UNIDAD 1
==========================================*/

function irUnidad(){

document.getElementById("unidad1").scrollIntoView({

behavior:"smooth"

});

}

/*==========================================
        CURIOSIDADES
==========================================*/

function mostrarCuriosidad(numero){

let caja=document.getElementById("c"+numero);

if(caja.style.display=="block"){

caja.style.display="none";

}else{

caja.style.display="block";

actualizarBarra();

}

}

/*==========================================
        BARRA DE PROGRESO
==========================================*/

function actualizarBarra(){

progreso+=5;

if(progreso>100){

progreso=100;

}

document.getElementById("progreso").style.width=progreso+"%";

document.getElementById("barra").style.width=progreso+"%";

document.getElementById("barra").innerHTML=progreso+"%";

}

/*==========================================
        TERMINAL BASH
==========================================*/

function ejecutar(){

let comando=document.getElementById("comando").value;

let pantalla=document.getElementById("pantalla");

let respuesta="";

switch(comando){

case "pwd":

respuesta="/home/usuario";

break;

case "ls":

respuesta="Documentos  Descargas  Imágenes  Música";

break;

case "cd":

respuesta="Cambiando de directorio...";

break;

case "mkdir":

respuesta="Carpeta creada correctamente";

break;

case "touch":

respuesta="Archivo creado";

break;

case "cp":

respuesta="Archivo copiado";

break;

case "mv":

respuesta="Archivo movido";

break;

case "rm":

respuesta="Archivo eliminado";

break;

case "cat":

respuesta="Mostrando contenido del archivo";

break;

case "grep":

respuesta="Texto encontrado";

break;

case "find":

respuesta="Buscando archivos...";

break;

case "history":

respuesta="1 pwd<br>2 ls<br>3 mkdir";

break;

case "clear":

pantalla.innerHTML="";

document.getElementById("comando").value="";

return;

case "date":

respuesta=new Date();

break;

case "whoami":

respuesta="usuario";

break;

case "hostname":

respuesta="linux-pc";

break;

case "uname":

respuesta="Linux Ubuntu";

break;

case "df":

respuesta="Disco utilizado: 45%";

break;

case "du":

respuesta="Tamaño: 1.4 GB";

break;

case "top":

respuesta="Monitor de procesos abierto";

break;

case "kill":

respuesta="Proceso finalizado";

break;

case "help":

respuesta=
"Comandos disponibles:<br><br>"+
"pwd<br>"+
"ls<br>"+
"cd<br>"+
"mkdir<br>"+
"touch<br>"+
"cp<br>"+
"mv<br>"+
"rm<br>"+
"cat<br>"+
"grep<br>"+
"find<br>"+
"history<br>"+
"clear<br>"+
"date<br>"+
"whoami<br>"+
"hostname<br>"+
"uname<br>"+
"df<br>"+
"du<br>"+
"top<br>"+
"kill";

break;

default:

respuesta="Comando no reconocido.<br>Escriba <b>help</b>";

}

pantalla.innerHTML+=

"<br><span style='color:yellow;'>$ "+comando+"</span><br>"+respuesta+"<br>";

pantalla.scrollTop=pantalla.scrollHeight;

document.getElementById("comando").value="";

actualizarBarra();

}

/*==========================================
        ENTER PARA EJECUTAR
==========================================*/

document.addEventListener("DOMContentLoaded",function(){

let caja=document.getElementById("comando");

if(caja){

caja.addEventListener("keypress",function(e){

if(e.key==="Enter"){

ejecutar();

}

});

}

});
/*==========================================
            MEMORAMA
==========================================*/

function memorama(){

const tarjetas=[

"pwd → Directorio actual",
"ls → Listar archivos",
"mkdir → Crear carpeta",
"touch → Crear archivo",
"cp → Copiar",
"mv → Mover",
"rm → Eliminar",
"grep → Buscar texto"

];

let texto="";

for(let i=0;i<tarjetas.length;i++){

texto+=tarjetas[i]+"\n\n";

}

alert(

"MEMORAMA\n\nEncuentra la pareja correcta.\n\n"+texto

);

actualizarBarra();

}

/*==========================================
              RULETA
==========================================*/

function ruleta(){

const comandos=[

"pwd",

"ls",

"cd",

"mkdir",

"touch",

"cp",

"mv",

"rm",

"grep",

"find",

"history",

"chmod",

"chown",

"uname",

"hostname",

"whoami",

"kill",

"top"

];

let aleatorio=Math.floor(Math.random()*comandos.length);

alert(

"La ruleta eligió:\n\n"+

comandos[aleatorio]

);

actualizarBarra();

}

/*==========================================
            FLASH CARDS
==========================================*/

function flashcards(){

const cartas=[

"pwd = Muestra el directorio actual",

"ls = Lista archivos",

"cd = Cambia de carpeta",

"mkdir = Crear carpeta",

"touch = Crear archivo",

"rm = Eliminar archivo",

"grep = Buscar texto",

"history = Historial",

"chmod = Cambiar permisos",

"chown = Cambiar propietario"

];

let numero=Math.floor(Math.random()*cartas.length);

alert(cartas[numero]);

actualizarBarra();

}

/*==========================================
         DISTRIBUCIONES LINUX
==========================================*/

function juegoDistribuciones(){

const distribuciones=[

"Ubuntu",

"Debian",

"Fedora",

"Arch Linux",

"Kali Linux",

"Linux Mint",

"CentOS",

"openSUSE"

];

let numero=Math.floor(Math.random()*distribuciones.length);

alert(

"Distribución seleccionada:\n\n"+

distribuciones[numero]

);

actualizarBarra();

}

/*==========================================
             AHORCADO
==========================================*/

function ahorcado(){

const palabras=[

"LINUX",

"BASH",

"UBUNTU",

"TERMINAL",

"KERNEL",

"FEDORA",

"DEBIAN",

"ARCH"

];

let palabra=palabras[Math.floor(Math.random()*palabras.length)];

let oculto="";

for(let i=0;i<palabra.length;i++){

oculto+="_ ";

}

alert(

"AHORCADO\n\n"+

oculto+

"\n\nPista:\nEs un concepto de Linux."

);

actualizarBarra();

}

/*==========================================
             PUZZLE
==========================================*/

function puzzle(){

alert(

"Puzzle Linux\n\nImagina que debes armar el logotipo de Linux (Tux).\n\nEn la siguiente versión podrás mover las piezas."

);

actualizarBarra();

}

/*==========================================
          DRAG & DROP
==========================================*/

function dragdrop(){

alert(

"Relaciona correctamente:\n\n"+

"pwd → Directorio\n"+

"mkdir → Carpeta\n"+

"touch → Archivo\n"+

"grep → Buscar texto\n"+

"rm → Eliminar"

);

actualizarBarra();

}
/*==========================================
            QUIZ LINUX
==========================================*/

const preguntas=[

{
pregunta:"¿Qué comando muestra el directorio actual?",
opciones:["pwd","mkdir","rm","touch"],
correcta:"pwd"
},

{
pregunta:"¿Qué comando lista archivos?",
opciones:["ls","grep","cp","mv"],
correcta:"ls"
},

{
pregunta:"¿Qué comando cambia de directorio?",
opciones:["cd","pwd","rm","mkdir"],
correcta:"cd"
},

{
pregunta:"¿Qué comando crea carpetas?",
opciones:["mkdir","touch","cp","cat"],
correcta:"mkdir"
},

{
pregunta:"¿Qué comando crea archivos?",
opciones:["touch","mv","find","kill"],
correcta:"touch"
},

{
pregunta:"¿Qué comando copia archivos?",
opciones:["cp","mv","rm","grep"],
correcta:"cp"
},

{
pregunta:"¿Qué comando mueve archivos?",
opciones:["mv","cp","pwd","df"],
correcta:"mv"
},

{
pregunta:"¿Qué comando elimina archivos?",
opciones:["rm","touch","ls","cd"],
correcta:"rm"
},

{
pregunta:"¿Qué comando busca texto?",
opciones:["grep","mkdir","top","whoami"],
correcta:"grep"
},

{
pregunta:"¿Qué comando busca archivos?",
opciones:["find","kill","cat","head"],
correcta:"find"
},

{
pregunta:"¿Qué comando muestra el historial?",
opciones:["history","hostname","pwd","du"],
correcta:"history"
},

{
pregunta:"¿Qué comando cambia permisos?",
opciones:["chmod","chown","ps","top"],
correcta:"chmod"
},

{
pregunta:"¿Qué comando cambia el propietario?",
opciones:["chown","chmod","mkdir","ls"],
correcta:"chown"
},

{
pregunta:"¿Qué comando muestra el usuario actual?",
opciones:["whoami","hostname","date","df"],
correcta:"whoami"
},

{
pregunta:"¿Qué comando muestra el nombre del equipo?",
opciones:["hostname","pwd","grep","kill"],
correcta:"hostname"
},

{
pregunta:"¿Qué comando muestra información del sistema?",
opciones:["uname","du","top","rm"],
correcta:"uname"
},

{
pregunta:"¿Qué comando monitorea procesos?",
opciones:["top","pwd","touch","grep"],
correcta:"top"
},

{
pregunta:"¿Qué comando termina procesos?",
opciones:["kill","find","cat","mv"],
correcta:"kill"
},

{
pregunta:"¿Qué comando muestra el espacio en disco?",
opciones:["df","ls","head","tail"],
correcta:"df"
},

{
pregunta:"¿Qué comando calcula el tamaño de carpetas?",
opciones:["du","cp","nano","less"],
correcta:"du"
}

];

let indice=0;

function cargarPregunta(){

if(indice>=preguntas.length){

finalizarQuiz();

return;

}

document.getElementById("pregunta").innerHTML=preguntas[indice].pregunta;

let botones=document.querySelectorAll("#quiz button");

for(let i=0;i<4;i++){

botones[i].innerHTML=preguntas[indice].opciones[i];

}

}

function respuesta(opcion){

if(opcion==preguntas[indice].correcta){

puntaje++;

}

indice++;

document.getElementById("puntos").innerHTML=puntaje;

actualizarBarra();

cargarPregunta();

}

/*==========================================
        FINAL DEL QUIZ
==========================================*/

function finalizarQuiz(){

let mensaje="";

if(puntaje>=18){

mensaje="🏆 Excelente. Dominas Bash.";

}

else if(puntaje>=14){

mensaje="🥇 Muy buen trabajo.";

}

else if(puntaje>=10){

mensaje="🙂 Buen intento.";

}

else{

mensaje="📚 Sigue practicando.";

}

alert(

"Quiz terminado\n\n"+

"Puntaje: "+puntaje+

"/20\n\n"+

mensaje

);

guardarProgreso();

}

/*==========================================
        CERTIFICADO
==========================================*/

function certificado(){

let nombre=document.getElementById("nombreAlumno").value;

if(nombre==""){

alert("Escriba su nombre.");

return;

}

document.getElementById("resultado").innerHTML=

"<br><br>"+

"<h2>"+nombre+"</h2>"+

"<h3>Ha completado exitosamente el Curso Interactivo de Linux y Bash</h3>"+

"<br>"+

"<h2>🎓 FELICIDADES 🎓</h2>";

actualizarBarra();

}

/*==========================================
        GUARDAR PROGRESO
==========================================*/

function guardarProgreso(){

localStorage.setItem("progresoLinux",progreso);

localStorage.setItem("puntajeLinux",puntaje);

}

/*==========================================
        CARGAR PROGRESO
==========================================*/

window.onload=function(){

let p=localStorage.getItem("progresoLinux");

let s=localStorage.getItem("puntajeLinux");

if(p!=null){

progreso=parseInt(p);

document.getElementById("progreso").style.width=progreso+"%";

document.getElementById("barra").style.width=progreso+"%";

document.getElementById("barra").innerHTML=progreso+"%";

}

if(s!=null){

puntaje=parseInt(s);

document.getElementById("puntos").innerHTML=puntaje;

}

cargarPregunta();

}

/*==========================================
        EFECTO SCROLL
==========================================*/

window.addEventListener("scroll",function(){

let total=document.documentElement.scrollHeight-window.innerHeight;

let porcentaje=(window.scrollY/total)*100;

document.getElementById("progreso").style.width=porcentaje+"%";

});

/*==========================================
        MENSAJE DE BIENVENIDA
==========================================*/

setTimeout(function(){

alert(

"🐧 Bienvenido al Curso Interactivo de Linux y Bash.\n\nExplora las unidades, juega, responde el quiz y obtén tu certificado."

);

},1200);
/*=====================================================
        MODO OSCURO / CLARO
======================================================*/

let modoOscuro=true;

function cambiarModo(){

const body=document.body;

if(modoOscuro){

body.style.background="#f4f4f4";
body.style.color="#222";
modoOscuro=false;

}else{

body.style.background="linear-gradient(135deg,#07131f,#0b2942,#113b5c,#06111d)";
body.style.color="white";
modoOscuro=true;

}

}

/*=====================================================
        BUSCADOR DE COMANDOS
======================================================*/

const comandosLinux={

pwd:"Muestra el directorio actual.",

ls:"Lista archivos y carpetas.",

cd:"Cambia de directorio.",

mkdir:"Crea carpetas.",

touch:"Crea archivos.",

cp:"Copia archivos.",

mv:"Mueve o renombra archivos.",

rm:"Elimina archivos.",

grep:"Busca texto.",

find:"Busca archivos.",

history:"Historial de comandos.",

chmod:"Modifica permisos.",

chown:"Cambia propietario.",

whoami:"Usuario actual.",

hostname:"Nombre del equipo.",

uname:"Información del sistema.",

top:"Monitor de procesos.",

kill:"Finaliza procesos.",

df:"Espacio disponible en disco.",

du:"Uso del disco."

};

function buscarComando(){

let comando=prompt("¿Qué comando deseas buscar?");

if(comando==null)return;

comando=comando.toLowerCase();

if(comandosLinux[comando]){

alert(

comando.toUpperCase()+"\n\n"+

comandosLinux[comando]

);

}else{

alert("No existe información para ese comando.");

}

}

/*=====================================================
        INSIGNIAS
======================================================*/

let insignias=[];

function desbloquear(nombre){

if(insignias.includes(nombre))return;

insignias.push(nombre);

alert("🏅 Nueva insignia desbloqueada:\n\n"+nombre);

}

/*=====================================================
        ESTADÍSTICAS
======================================================*/

function estadisticas(){

let texto="";

texto+="Progreso: "+progreso+"%\n";

texto+="Puntaje: "+puntaje+"/20\n";

texto+="Insignias: "+insignias.length+"\n";

texto+="Comandos aprendidos: "+Object.keys(comandosLinux).length+"\n";

alert(texto);

}

/*=====================================================
        EFECTOS DE TARJETAS
======================================================*/

window.addEventListener("DOMContentLoaded",()=>{

const tarjetas=document.querySelectorAll(".card");

tarjetas.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

});

/*=====================================================
        CONTADOR DE VISITAS
======================================================*/

let visitas=localStorage.getItem("visitasLinux");

if(visitas==null){

visitas=1;

}else{

visitas=parseInt(visitas)+1;

}

localStorage.setItem("visitasLinux",visitas);

console.log("Visitas: "+visitas);

/*=====================================================
        FRASES ALEATORIAS
======================================================*/

const frases=[

"🐧 Linux es libertad.",

"💻 Practicar comandos mejora tus habilidades.",

"🚀 Bash permite automatizar tareas.",

"⚡ La terminal suele ser más rápida que la interfaz gráfica.",

"🎯 Aprender Linux abre muchas oportunidades laborales."

];

function fraseDia(){

let numero=Math.floor(Math.random()*frases.length);

alert(frases[numero]);

}

/*=====================================================
        RELOJ DIGITAL
======================================================*/

function reloj(){

const ahora=new Date();

let hora=ahora.toLocaleTimeString();

let reloj=document.getElementById("reloj");

if(reloj){

reloj.innerHTML=hora;

}

}

setInterval(reloj,1000);

/*=====================================================
        SONIDO
======================================================*/

function sonido(){

let audio=new Audio("audio/click.mp3");

audio.play();

}

/*=====================================================
        ATAJOS DEL TECLADO
======================================================*/

document.addEventListener("keydown",function(e){

if(e.key==="F1"){

e.preventDefault();

buscarComando();

}

if(e.key==="F2"){

e.preventDefault();

estadisticas();

}

if(e.key==="F3"){

e.preventDefault();

fraseDia();

}

});

/*=====================================================
        INSIGNIAS AUTOMÁTICAS
======================================================*/

if(progreso>=25){

desbloquear("Principiante Linux");

}

if(progreso>=50){

desbloquear("Explorador Bash");

}

if(progreso>=75){

desbloquear("Administrador Linux");

}

if(progreso>=100){

desbloquear("Experto Bash");

}