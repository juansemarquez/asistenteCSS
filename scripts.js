/* #########################
Funciones de texto 
############################*/

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
		quitar(cb.value);	
	}
}
function colorTexto(color) {
    quitarColor('color:');
    if(color.value!='Sin especificar' && color.value.length!=0) {
        agregar('color: #'+color.value+';\n')    
    }
}

/* #########################
Funciones de fondo 
############################*/
function habilitar_color_fondo() {
	if(document.getElementById("color_fondo").value!='Sin especificar'&&document.getElementById("color_fondo").value.length!=0) {
		document.getElementById("transparencia_fondo").disabled=false;
		document.getElementById("generar_fondo").disabled=false;	
	}
	else {
		document.getElementById("transparencia_fondo").value=1;		
		document.getElementById("transparencia_fondo").disabled=true;
		if(document.getElementById("imagen_fondo").value=='Sin especificar' || document.getElementById("imagen_fondo").value.length==0) 
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
	var aux = document.getElementById("color_fondo");
	if (aux.value.length!=0 && aux.value != 'Sin especificar') {
		cadena = cadena + "background-color: #" + aux.value + ";\n";	
	}
	else {
		quitar('background-color:');	
	}
	var aux2 = document.getElementById("transparencia_fondo").value;
	if (aux2!=1 && aux2.length!=0 && aux.value.length!=0 && aux.value != 'Sin especificar') {
		cadena = cadena + "background-color: rgba(" + document.getElementById("RGBFondo").value+ "," + aux2 + ");\n"; 	
	}
	else {
		quitar('background-color: rgba');
	}
	aux = document.getElementById("imagen_fondo").value;
	if (aux.length != 0 && aux!="Sin especificar") {
		cadena = cadena + "background-image: url('" + aux + "');\n";
	}
	else {
		quitar('background-image:');
		quitar('background_repeat:');
		quitar("background-position:");
		quitar('background-attachment');
		document.getElementById("repetir").value='nada';
		document.getElementById("ubic_fondo").value='nada';
		document.getElementById("fixed").checked=true;
	}
	aux = document.getElementById("repetir").value;
	if (aux != "nada") {
		cadena = cadena + "background-repeat: " + aux + ";\n";	
	}
	else {
		quitar('background_repeat:');
	}
	aux = document.getElementById("ubic_fondo").value;
	if (aux != "nada") {
		cadena = cadena + "background-position: " + aux + ";\n";	
	}
	else {
		quitar("background-position:");
	}
	if(document.getElementById("fixed").checked==false) {
		cadena = cadena + "background-attachment: fixed;\n";
	}
	else	{
		quitar('background-attachment');	
	}
	agregar(cadena);
}
function colorFondoRGB(color) {
	document.getElementById('RGBFondo').value= Math.round(color.rgb[0]*10000)/100+'%,'+Math.round(color.rgb[1]*10000)/100+'%,'+Math.round(color.rgb[2]*10000)/100+'%';
}

/* #########################
Funciones de borde:
#########################*/
function habilitarBordes(esUnoSolo) {
    var radius=salvarRadius();    
    quitar('border');
    agregar(radius);    
	if(esUnoSolo) {
		document.getElementById("bordeUnico").style.display="block";
		document.getElementById("arriba").style.display="none";
		document.getElementById("derecha").style.display="none";
		document.getElementById("abajo").style.display="none";
		document.getElementById("izquierda").style.display="none";
		document.getElementById("botonCuatroBordes").style.display="none";
	}
	else {
		document.getElementById("bordeUnico").style.display="none";
		document.getElementById("arriba").style.display="block";
		document.getElementById("derecha").style.display="block";
		document.getElementById("abajo").style.display="block";
		document.getElementById("izquierda").style.display="block";
		document.getElementById("botonCuatroBordes").style.display="block";	
	}
}

function habilitarEsquinas(tipo, lugar) {
    quitar('radius');
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
			pos='DERECHA';		
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
		quitar(pref+'style:');
		quitar(pref + 'width:');
		quitar(pref + 'color:');
		/*alert(pos);
		alert('tipo_borde' + pos);
		alert(document.getElementById('tipo_borde' + pos).value);*/
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
		if(document.getElementById('color_borde' + pos).value == 'Sin especificar'||document.getElementById('color_borde' + pos).value.length == 0) {
			quitar(pref + 'color:');			
		}
		else {
			cadena = cadena + pref + 'color: #' + document.getElementById('color_borde' + pos).value + ';\n';				
		    if(document.getElementById('transparencia_borde' + pos).value == 1 || document.getElementById('transparencia_borde' + pos).value.length == 0) {
			quitar(pref + 'color: rgba(');			
		    }
		    else {
                cadena = cadena + pref + 'color: rgba('+document.getElementById('bordeRGB'+pos).value+','+ document.getElementById('transparencia_borde' + pos).value + ');\n';				
            }		
		}					
	}	
	agregar(cadena);
	document.getElementById("muestra_bordes").style = cadena;
}
function colorBordeRGB(color) {
    document.getElementById('bordeRGB').value = Math.round(color.rgb[0]*10000)/100+'%,'+Math.round(color.rgb[1]*10000)/100+'%,'+Math.round(color.rgb[2]*10000)/100+'%';
}
function generarEsquinas(cant) {
	 quitar('radius');	 
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
		   if(document.getElementById("tipo_esquina"+pos).value=="circ" && document.getElementById("radio" + pos).value.length!=0) {
		       cadena = cadena + pref + document.getElementById("radio" + pos).value + "px;\n";		       		   
		   }
		   else if(document.getElementById("tipo_esquina"+pos).value=="elipse" && document.getElementById("radio" + pos).value !=0 && document.getElementById("radio2" + pos).value!=0) {
			    cadena = cadena + pref + document.getElementById("radio" + pos).value +'px '+ document.getElementById("radio2" + pos).value + "px;\n";	
		   }	   	
    }
    agregar(cadena);
    document.getElementById("muestra_bordes").style = cadena;
}
function salvarRadius() {
    var codigo=document.getElementById("codigo").value.split("\n");
    var radius='';
    var regla;
    for (var i=0; i<codigo.length; i++) {
        regla=codigo[i];
        if(regla.indexOf('radius')==-1) {
			radius = radius + regla;
		}
    }
    //Agrego saltos de línea:
		//Primero reemplazo ; por zxc
	var aux=radius.replace(';','zxc');	
	while (radius!=aux) {		
		radius=aux;		
		aux=radius.replace(';','zxc');	
	}
		//Luego reemplazo zxc por ;\n
	aux=radius.replace('zxc',';\n');	
	while (radius!=aux) {		
		radius=aux;		
		aux=radius.replace('zxc',';\n');	
	}
	return radius;       
}
/*###########################
     Funciones de caja
############################*/
function agregarSelect(elemento) {
    quitar(elemento.id);    
    var cadena = elemento.id + ': ' + elemento.value + ';\n';
    agregar(cadena);
}
function inputText(elemento, tieneUnidad) {    
    if(elemento.id.indexOf("_unidades")==-1) {
        //Fue invocada porque se escribió un número
        quitarColor(elemento.id);    
        if(elemento.value.length!=0 && elemento.value != '' && elemento.value != ' '&& elemento.value != '  ') {    
            var cadena = elemento.id + ': ' + elemento.value;
            if(tieneUnidad) {
                var ident = elemento.id+"_unidades";
                cadena += document.getElementById(ident).value + ';\n';            
            }
            else {
                cadena += ';\n';
            }
            agregar(cadena);
        }
    }
    else {
        //Fue invocada porque se cambió la opción del select de la unidad
        var lugar = elemento.id.indexOf("_unidades");
        var n = elemento.id.substr(0,lugar);
        var ele = document.getElementById(n);
        quitarColor(ele.id);    
        if(ele.value.length!=0 && ele.value != '' && ele.value != ' '&& ele.value != '  ') {    
            var cadena = ele.id + ': ' + ele.value;
            if(tieneUnidad) {
                cadena += elemento.value + ';\n';            
            }
            else {
                cadena += ';\n';
            }
            agregar(cadena);
        }
    }
}

function habilitarPosicionamiento(elemento) {
    if(elemento.value=='nada' || elemento.value=='static') {
        document.getElementById("top").value='';
        document.getElementById("bottom").value='';
        document.getElementById("right").value='';
        document.getElementById("left").value='';        
        quitarColor('top:');
        quitarColor('bottom:');
        quitarColor('right:');
        quitarColor('left:');        
        document.getElementById("top").disabled=true;
        document.getElementById("bottom").disabled=true;
        document.getElementById("right").disabled=true;
        document.getElementById("left").disabled=true;        
        document.getElementById("top_unidades").disabled=true;
        document.getElementById("bottom_unidades").disabled=true;
        document.getElementById("right_unidades").disabled=true;
        document.getElementById("left_unidades").disabled=true;
    }
    else {
        document.getElementById("top").disabled=false;
        document.getElementById("bottom").disabled=false;
        document.getElementById("right").disabled=false;
        document.getElementById("left").disabled=false;
        document.getElementById("top_unidades").disabled=false;
        document.getElementById("bottom_unidades").disabled=false;
        document.getElementById("right_unidades").disabled=false;
        document.getElementById("left_unidades").disabled=false;
    }
}

/*###########################
     Funciones de lista
############################*/    

function agregarImagenLista(elemento) {
    quitar('list-style-image:');
    if(elemento.value!="Sin especificar" && elemento.value.length!=0 && elemento.value!='') {
            agregar('list-style-image: ' + elemento.value + ';\n');
    }
}

/*###########################
     Funciones generales
############################*/
function agregar(valor) {
	if(valor.indexOf("nada;\n")==-1) {
	  	document.getElementById("codigo").value=document.getElementById("codigo").value+valor;
	}
	else {
		var principio=valor.substr(0,(valor.indexOf(":")+1));
		quitar(principio);	
	}
}
function quitar(cadena)
{	
	//Quita el/los renglón/es que tenga/n "cadena" en el textarea id="codigo"
	var regla;	
	var nueva='';	
	var anterior = document.getElementById("codigo").value;
	//Convierto el contenido del textarea en un array, separando por \n	
	var vector = anterior.split("\n");
	//Recorro el array		
	for (var i=0; i<vector.length; i++)
	{
		//Asigno el elemento en la variable regla
		regla = vector[i];
		//Si "cadena" no está en "regla", agrego la regla a la nueva cadena. 
		if(regla.indexOf(cadena)==-1) {
			nueva = nueva + regla;
		}		
	}
	//Agrego saltos de línea:
		//Primero reemplazo ; por zxc
	var aux=nueva.replace(';','zxc');	
	while (nueva!=aux) {		
		nueva=aux;		
		aux=nueva.replace(';','zxc');	
		//alert('aux: '+aux+'\nnueva: '+nueva);
	}
		//Luego reemplazo zxc por ;\n
	aux=nueva.replace('zxc',';\n');	
	while (nueva!=aux) {		
		nueva=aux;		
		aux=nueva.replace('zxc',';\n');	
		//alert('aux: '+aux+'\nnueva: '+nueva);
	}
	//"nueva" es el nuevo contenido del textarea.
	document.getElementById("codigo").value = nueva;
}
function quitarColor(cadena) {
	//Quita el/los renglón/es que EMPIECE/N con "cadena" en el textarea id="codigo"
	var regla;	
	var nueva='';	
	var anterior = document.getElementById("codigo").value;
	//Convierto el contenido del textarea en un array, separando por \n	
	var vector = anterior.split("\n");
	//Recorro el array		
	for (var i=0; i<vector.length; i++)
	{
		//Asigno el elemento en la variable regla
		regla = vector[i];
		//Si "cadena" no está en "regla", agrego la regla a la nueva cadena. 
		if(regla.indexOf(cadena)!=0) {
			nueva = nueva + regla;
		}		
	}
	//Agrego saltos de línea:
		//Primero reemplazo ; por zxc
	var aux=nueva.replace(';','zxc');	
	while (nueva!=aux) {		
		nueva=aux;		
		aux=nueva.replace(';','zxc');	
		//alert('aux: '+aux+'\nnueva: '+nueva);
	}
		//Luego reemplazo zxc por ;\n
	aux=nueva.replace('zxc',';\n');	
	while (nueva!=aux) {		
		nueva=aux;		
		aux=nueva.replace('zxc',';\n');	
		//alert('aux: '+aux+'\nnueva: '+nueva);
	}
	//"nueva" es el nuevo contenido del textarea.
	document.getElementById("codigo").value = nueva;
}

function mostrarPestania(ident) {
    //Obtengo el id de la pestaña a mostrar:    
    var ident2=ident.substr(0,ident.indexOf("_pest"));    
    var tab = document.getElementById(ident2);
    //Oculto todas las pestañas:
    document.getElementById("texto").style.display="none";
    document.getElementById("fondo").style.display="none";
    document.getElementById("borde").style.display="none";
    document.getElementById("caja").style.display="none";
    document.getElementById("lista").style.display="none";
    //Muestro a pestaña:
    tab.style.display="block";    
}