function habilitarBoton(elemento, boton) {
	if(elemento.value.length>0) {
			boton.disabled=false;	
	}
	else {
			boton.disabled=true;	
	}
}
function habilitarPersonalizado(a,b) {    
    if(a.value=="nada") {
        b.value='';
        b.readOnly=true;
        quitar("font-family:");
        document.getElementById("boton_tipog").disabled=true;     
    }
    if(a.value=="serif") {
        b.value='"Times New Roman", Times, serif';
        b.readOnly=true;    
        document.getElementById("boton_tipog").disabled=false;
    }
    if(a.value=="sans-serif") {
        b.value='Arial, Helvetica, sans-serif';
        b.readOnly=true;
        document.getElementById("boton_tipog").disabled=false;
    }
    if(a.value=="monospace") {
        b.value='"Courier New", Courier, monospace';
        b.readOnly=true;
        document.getElementById("boton_tipog").disabled=false;
    }
    if(a.value=="personal") {
        b.value='';
        b.readOnly=false;
        b.focus();
        document.getElementById("boton_tipog").disabled=false;
    }        
}
function opcionCheckbox(cb) {
	if(cb.checked==true) {
		agregar(cb.value + "\n");
	}
	else {
		quitarExacto(cb.value + "\n");	
	}

	
}
function agregar(valor) {
	if(valor.indexOf("nada;\n")==-1) {
	  	document.getElementById("codigo").innerHTML=document.getElementById("codigo").innerHTML+valor;
	}
	else {
		var principio=valor.substr(0,(valor.indexOf(":")+1));
		quitar(principio);	
	}
}
/*Funciones de fondo */
function habilitar_color_fondo() {
	if(document.getElementById("color_fondo").value!='Sin especificar') {
		document.getElementById("transparencia_fondo").disabled=false;
		document.getElementById("generar_fondo").disabled=false;	
	}
	else {
		document.getElementById("transparencia_fondo").value=1;		
		document.getElementById("transparencia_fondo").disabled=true;
		if(document.getElementById("imagen_fondo").value=='Sin especificar' && document.getElementById("imagen_fondo").value.length==0) 
		{ document.getElementById("generar_fondo").disabled=true;	}		
	}
}
function habilitar_imagen_fondo() {
	if(document.getElementById("imagen_fondo").value!='Sin especificar' && document.getElementById("imagen_fondo").value.length!=0) {
		document.getElementById("repetir").disabled=false;
		document.getElementById("ubic_fondo").disabled=false;
		document.getElementById("fixed").disabled=false;
		document.getElementById("generar_fondo").disabled=false;	
	}
	else {
		document.getElementById("repetir").disabled=true;
		document.getElementById("ubic_fondo").disabled=true;
		document.getElementById("fixed").disabled=true;
		if(document.getElementById("color_fondo").value=='Sin especificar') {		
			document.getElementById("generar_fondo").disabled=false;
		}	
	}
		
}
function fondo() {
	quitar('background');
	var cadena= "";
	var aux = document.getElementById("color_fondo").value;
	if (aux.length!=0) {
		cadena = cadena + "background-color: rgb(" + aux + ");\n";	
	}
	/*else {
		quitar('background-color:');	
	}*/
	var aux2 = document.getElementById("transparencia_fondo").value;
	if (aux2!=1 && aux2.length!=0) {
		cadena = cadena + "background-color: rgba(" + aux+ "," + aux2 + ");\n"; 	
	}
	/*else {
		quitar('background-color: rgba');
	}	*/
	aux = document.getElementById("imagen_fondo").value;
	if (aux.length != 0) {
		cadena = cadena + "background-image: url('" + aux + "');\n";
	}
	else {
		/*quitar('background-image:');
		quitar('background_repeat:');
		quitar("background-position:");
		quitar('background-attachment');*/
		document.getElementById("repetir").value='nada';
		document.getElementById("ubic_fondo").value='nada';
		document.getElementById("fixed").checked=true;
	}
	aux = document.getElementById("repetir").value;
	if (aux != "nada") {
		cadena = cadena + "background-repeat: " + aux + ";\n";	
	}
	/*else {
		quitar('background_repeat:');
	}*/
	aux = document.getElementById("ubic_fondo").value;
	if (aux != "nada") {
		cadena = cadena + "background-position: " + aux + ";\n";	
	}
	/*else {
		quitar("background-position:");
	}*/
	if(document.getElementById("fixed").checked==false) {
		cadena = cadena + "background-attachment: fixed;\n";
	}
	/*else	{
		quitar('background-attachment');	
	}*/
	agregar(cadena);
}
function quitarExacto(cadena)
{
	// TODO:
	//Quita "cadena" (exacta) del textarea id="codigo"	
}
function quitar(cadena)
{
	// TODO: 
	//Quita el renglón que comienza con "cadena" del textarea id="codigo"	
}
function colorPicker(elemento) {
	//TODO:	
	//Buscar alguno hecho

	//Para probar:	
	var colorDevuelto= 'rgb(150,150,150)';
	elemento.value=colorDevuelto;	
	document.getElementById("muestra_color_texto").style.backgroundColor=colorDevuelto;
	agregar("color: "+ colorDevuelto + ";\n");
}