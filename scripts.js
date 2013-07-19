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