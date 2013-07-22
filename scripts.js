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

/*Funciones de borde:*/
function habilitarEsquinas(tipo, lugar) {
	var ident= "radio" + lugar; 
	var ident2= "radio2" + lugar;		
	if (tipo.value=="nada") {			
			document.getElementById(ident).value='';			
			document.getElementById(ident).disabled=true;			
			document.getElementById(ident2).value='';			
			document.getElementById(ident2).disabled=true;
	}
	else if (tipo.value=="circ")
	{
			document.getElementById(ident).disabled=false;
			document.getElementById(ident2).value='';			
			document.getElementById(ident2).disabled=true;	
	}
	else if (tipo.value=="elipse") {
			document.getElementById(ident).disabled=false;
			document.getElementById(ident2).disabled=false;	
	}
}
function generarBordes(cant) {
	var cadena = '';	
	for (var i=1; i<=cant; i=i+1) {				
		var pref;
		var pos;	
		if (cant==1) {
			pref='border-';
			pos='';
		}
		else if(i==1) {
			pref= 'border-top-';
			pos='ARRIBA';		
		}
		else if(i==2) {
			pref= 'border-right-';
			pos='DERECHO';		
		}
		else if(i==3) {
			pref= 'border-bottom-';
			pos='ABAJO';		
		}
		else if(i==4) {
			pref= 'border-left-';
			pos='IZQUIERDA';		
		}
		else { return; }
		if(document.getElementById('tipo_borde' + pos).value=="nada") {
			quitar(pref + 'style:');				
		}
		else {
			cadena = cadena + pref + 'style: ' + document.getElementById('tipo_borde' + pos).value + ';\n';		
		}
		if(document.getElementById('tamanoBorde' + pos).value.length == 0) {
			quitar(pref + 'width:');			
		}
		else {
			cadena = cadena + pref + 'width: ' + document.getElementById('tamanoBorde' + pos).value + document.getElementById('tamanoBorde_unidades' + pos).value + ';\n';				
		}
		if(document.getElementById('color_borde' + pos).value == 'Sin especificar') {
			quitar(pref + 'color:');			
		}
		else {
			cadena = cadena + pref + 'color: ' + document.getElementById('color_borde' + pos).value + ';\n';				
		}
		if(document.getElementById('transparencia_borde' + pos).value == 1 || document.getElementById('transparencia_borde' + pos).value.length == 0) {
			quitar(pref + 'color: rgba(');			
		}
		else {
			//TODO : Corregir.			
			cadena = cadena + pref + 'color: rgba(' + document.getElementById('transparencia_borde' + pos).value + ');\n';				
		}

		if(document.getElementById('radio' + pos).disabled ||document.getElementById('radio2' + pos).disabled||document.getElementById('radio'+pos).value.length == 0) {
			quitar(pref + '-radius:');			
		}
		/* TODO
		else {
			cadena = cadena + pref + 'color: ' + document.getElementById('color' + pos).value + pos).value + ';\n';				
		}
		*/
				
	}	
		agregar(cadena);
		document.getElementById("muestra_bordes").style = cadena;
}
function generarEsquinas(cant) {
	 //TODO: Construir especialmente
	 // quitar('radius');    
    var cadena = '';	
	 for (var i=1; i<=cant; i=i+1) {				
        var p;
        var pref;
        var pos;
        if (cant==1) {
        	    pref='border-radius: ';
        	    pos='';        	    
        	}
        	else if(i==1) {
			    pref= 'border-top-right-radius: ';
			    pos='-top-right';
			}
		   else if(i==2) {
		   	pref= 'border-bottom-right-radius: ';
		   	pos='-bottom-right';
		   }
		   else if(i==3) {
		   	pref= 'border-bottom-left-radius: ';
		   	pos='-bottom-left';
		   }
		   else if(i==4) {
		   	pref= 'border-top-left-radius: ';
		   	pos='-top-left';
		   }
		   if(document.getElementById("tipo_esquina"+pos).value=="circ") {
		       cadena = cadena + pref + document.getElementById("radio" + pos).value + "px;\n";		       		   
		   }
		   else if(document.getElementById("tipo_esquina"+pos).value=="elipse") {
			    cadena = cadena + pref + document.getElementById("radio" + pos).value +'px '+ document.getElementById("radio2" + pos).value + "px;\n";	
		   }		   
    }
    agregar(cadena);
    document.getElementById("muestra_bordes").style = cadena;
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