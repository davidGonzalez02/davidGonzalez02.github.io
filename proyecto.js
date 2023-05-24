var sonido=new Audio();/*un audio global para poder pararlo y que ademas no suenen todos a la vez*/

function reproducir(nombre){
	sonido.src = nombre;
	sonido.play();
}

function pararRepro(){
	sonido.pause();
}

/*Programacion del minijuego*/

var imagenes=["a.jpg","mat.jpg","rex.jpg","nik.jpeg","gli.jpg","sh.jpg"];
var preguntasEnun=["Ante una situación de peligro, ¿Que haces?","¿Eres una persona solitaria o disfrutas de la compañía?","Cuando estoy de vacaciones dedico mi tiampo a...:","Si me tocara la loteria...: ","Mi comida favorita es...:","Si algo me preocupa suelo...:"];
var preguntaA=["Analizo la situación","Prefiero estar solo","Me dedico a estudiar","Ahorraría todo lo que pudiera","Ensalada","Reflexionar sobre todas las posibilidades"];
var preguntaB=["Voy directo al peligro","Prefiero tener muchos amigos","Suelo dormir todo el rato","Me lo gastaría en viajar por el mundo","Hamburguesa","Enfrentarme a los problemas de frente"];
var preguntaC=["Mantengo la distancia","No me gusta mucho estar acompañado,pero lo puedo disfrutar","Me quedo en casa","No haria nada especial","Filete de carne","Pensar de manera fría"];
var preguntaD=["Salgo corriendo","Me agobia la compañía","Dedico mi tiempo a mi pasatiempo","Lo escondería todo para no perderlo","Helado","Preocuparme en exceso"];
var contador;
var personajes;

/*
	lista de personajes posibles y su posicion en el array:
	0-> a
	1-> matthew
	2-> rex
	3-> nikkol
*/

function sumar(personaje){
	if(contador<=6){
		personajes[personaje]++;
	}
}

function colocar(){
	if(contador<6){
		document.getElementById("imagen").src=imagenes[contador];
		document.getElementById("pregunta").innerHTML=preguntasEnun[contador];
		document.getElementById("a").value=preguntaA[contador];
		document.getElementById("b").value=preguntaB[contador];
		document.getElementById("c").value=preguntaC[contador];
		document.getElementById("d").value=preguntaD[contador];
		contador++;
		document.getElementById("turno").value=contador;/*Solo actualizamos el valor de contador en pantalla en estas ocasiones, aunque luego aumente nu se mostrara*/
	}
	else{
		contador++;
		document.getElementById("fin").style.visibility="visible";
	}
	
	/*No ponemos contador aqui porque sino no muestra bien al usar la funcion cargar()*/
}

function iniciar(){
	contador=0;
	colocar();
	document.getElementById("fin").style.visibility="Hidden";
	personajes=[0,0,0,0];
	
}

function indiceMayor(lista){
	var mayor=lista[0];
	for(let i=1;i<lista.length;i++){
		if(lista[i]>mayor){
			mayor=lista[i];
		}
	}
	return lista.indexOf(mayor);
}

function terminar(){
	if(contador>=6){
		var nombre;
		var indice=indiceMayor(personajes);
		switch(indice){
			case 0:nombre="A";
			break;
			case 1:nombre="Matthew";
			break;
			case 2:nombre="Rex";
			break;
			case 3:nombre="Nikkol";
		}
		
		document.getElementById("imagenRes").src=imagenes[indice];
		document.getElementById("tituloRes").innerHTML=document.getElementById("tituloRes").innerHTML+nombre;
		document.getElementById("resultado").style.display="block";
	}
}

function ocultar(){
	document.getElementById("resultado").style.display = "none";
}




