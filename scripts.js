/* #########################
Funciones de texto 
############################*/
function tipog(tipografia) {    
    if(tipografia.id=="tipografia"){
        quitar("font-family:");    
        var b=document.getElementById("tipog_pers");
        if(tipografia.value=="nada") {
        b.value='';
        b.readOnly=true;             
        }
        if(tipografia.value=="serif") {
            b.value='"Times New Roman", Times, serif';
            b.readOnly=true;
            agregar("font-family: " + b.value + ";\n");    
        }
        if(tipografia.value=="sans-serif") {
            b.value='Arial, Helvetica, sans-serif';
            b.readOnly=true;
            agregar("font-family: " + b.value + ";\n");        
        }
        if(tipografia.value=="monospace") {
            b.value='"Courier New", Courier, monospace';
            b.readOnly=true;
            agregar("font-family: " + b.value + ";\n");
        }
        if(tipografia.value=="personal") {
            b.value='';
            b.readOnly=false;
            b.focus();
        }
    }      
    else if(tipografia.value != '' && tipografia.value.length!=0) {  
        if(tipografia.readOnly) {return;}
        quitar("font-family:");
        agregar("font-family: '" + tipografia.value + "';\n");
    }
    else {
        quitar("font-family:");
    }
}
/*function habilitarBoton(elemento, boton) {
	if(elemento.value.length>0) {
			boton.disabled=false;	
	}
	else {
			boton.disabled=true;	
	}
}*/
/*function habilitarPersonalizado(a,b) {    
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
}*/
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
function anularDecoracion(cb) {
    if(cb.checked) {
        document.getElementById("deco_2").disabled=true;
        document.getElementById("deco_3").disabled=true;
        //document.getElementById("deco_4").disabled=true;
        document.getElementById("deco_5").disabled=true;
        quitar('text-decoration: ');
        agregar('text-decoration: none;\n');
    }
    else {
        document.getElementById("deco_2").disabled=false;
        document.getElementById("deco_3").disabled=false;
        //document.getElementById("deco_4").disabled=false;
        document.getElementById("deco_5").disabled=false;
        document.getElementById("deco_2").checked=false;
        document.getElementById("deco_3").checked=false;
        //document.getElementById("deco_4").checked=false;
        document.getElementById("deco_5").checked=false;
        quitar('text-decoration: none;');        
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
			document.getElementById("generar_fondo").disabled=true;
		}	
	}
		
}

function habilitar_todo_fondo() {
    document.getElementById("transparencia_fondo").disabled=false;
    document.getElementById("repetir").disabled=false;
    document.getElementById("ubic_fondo").disabled=false;
    document.getElementById("fixed").disabled=false;
    document.getElementById("generar_fondo").disabled=false;    
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
        if(regla.indexOf('radius')!=-1) {
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
            agregar("list-style-image: url('" + elemento.value + "');\n");
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



function esNumero(num) {
    if (num.value.length > 0 && !(num.value.match(/^[\-\+]?[\d\,]*\.?[\d]*$/))) {
        document.getElementById('advertNum').style.display='block';
        num.value=num.value.substr(0,num.value.length-1);
        num.focus();
        return false;
    }
    else { return true; }
}

/*###########################
  Funciones de pegar código
############################*/

function pegarCodigo() {
    var ta = document.getElementById("codigoPegado");
    ta.value='';    
    document.getElementById("pegarCodigo").style.display="block";
    ta.focus();    
}

function pegarCodigoListo() {
    var ta = document.getElementById("codigoPegado");
    var cod = document.getElementById("codigo");    
    if (analizarCodigo(ta.value)) {
        document.getElementById("pegarCodigo").style.display="none";
        cod.value=ta.value;
        ta.value='';  
    }    
}

function analizarCodigo(cod) {
    //Recibe el código pegado y setea las opciones correspondientes.
    //Quito saltos de línea:    
    var j;
    var aux='';    
    for(var i=0; i<cod.length; i++) {
        if (cod[i]!='\n') {
            aux += cod[i];        
        }    
    }
    cod=aux;
    //alert(cod);
    var reglas = cod.split(';')
    var unaRegla;
    var hayErrores = "No hay errores";    
    limpiarTodo();
    for(i=0;i<reglas.length;i++) {
        unaRegla = trim(reglas[i]);
        //alert(unaRegla.length);
        //var sarasa = setearInputs(unaRegla)
        //alert('Regla: ' + unaRegla + '\nResult: ' + sarasa);        
        if (!setearInputs(unaRegla)) {
        //if(!sarasa) {
            if(hayErrores=="No hay errores") {
                hayErrores="Hay error(es) en la(s) línea(s):\n";
            }
            j=i+1;
            hayErrores += j + ": " + unaRegla + ";\n";            
        }
    }    
    if(hayErrores=="No hay errores") {
        return true;
    }
    else {
        return confirm(hayErrores+"\n¿Desea continuar de todos modos?");
    }    
}

function setearInputs(regla) {
    //Si la regla está vacía, no pasa nada:
    if (regla.length==0) {return true;}
    //Si no hay dos puntos, la regla es errónea:    
    if (regla.indexOf(':')==-1) {return false;}
    //Separo propiedad: valor; 
    var prop = trim(regla.substr(0,regla.indexOf(":")));
    var valor = trim(regla.substr(regla.indexOf(':')+1));    
    
    //Ahora van toooooodos los if para poder setear los inputs como corresponda.
    
    //######################################
    //                 +TEXTO
    //######################################
    if (prop=="font-family") {
        document.getElementById("tipog_pers").value=valor;
        if (valor=="\"Times New Roman\", Times, serif") {
            document.getElementById("tipografia").value="serif";
            document.getElementById("tipog_pers").readonly=true;
        }
        else if (valor=="Arial, Helvetica, sans-serif") {
            document.getElementById("tipografia").value="sans-serif";
            document.getElementById("tipog_pers").readonly=true;
        }
        else if (valor=='"Courier New", Courier, monospace') {
            document.getElementById("tipografia").value="monospace";
            document.getElementById("tipog_pers").readonly=true;
        }
        else {
            document.getElementById("tipografia").value="personal";
            document.getElementById("tipog_pers").readonly=false;
        }
        return true;
    }
    else if (prop=="font-size") {
        return constaDeNumeroYUnidad(prop,valor);
    }
    else if (prop=="line-height") {
        return constaDeNumeroYUnidad(prop,valor);
    }
    else if (prop=="color") {        
        if(valor[0]!='#') {
            valor = convertirNombreColorHexa(valor);
            //alert(valor);
            if (valor=="Error") {return false;}       
        }
        if(valor.length==7||valor.length==4) {           
            //Si el color está expresado en tres caracteres, lo represento con 6 y quito el #:            
            if(valor.length==4) {
                var col=valor[1]+valor[1]+valor[2]+valor[2]+valor[3]+valor[3];                           
            }
            //Si no, le quito el # solamente
            else {
                var col=valor.substr(1);
            }
            //Valido que solo se use 0-9 A-F
            var validos = "0123456789ABCDEF";
            col=col.toUpperCase();
            for(var i=1; i<6; i++) {
                if(validos.indexOf(col[i])==-1) {
                    return false;
                }
            }
            document.getElementById("color_texto").value=col;
            return true;
        }
        else {
            return false;
        }
    }
    else if (prop == "font-weight") {
        if(valor=="normal"||valor=="bold"||valor=="bolder"||valor=="lighter") {
            document.getElementById("peso").value=valor;
            return true;
        }
        else {
            return false;
        }    
    }
    else if (prop == "font-style") {
        if(valor=="normal"||valor=="italic") {
            document.getElementById("estilo").value=valor;
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (prop == "text-transform") {
        if(valor=="lowercase"||valor=="uppercase"||valor=="capitalize"||valor=="none") {
            document.getElementById("may_min").value=valor;
            return true;
        }
        else
        {
            return false;
        }
    }    
    else if (prop == "text-align") {
        if(valor=="left"||valor=="right"||valor=="center"||valor=="justify") {
            document.getElementById("alineacion").value=valor;
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (prop == "text-decoration") {
        if (valor=="underline") {
            document.getElementById("deco_2").checked=true;
        }
        else if (valor=="overline") {
            document.getElementById("deco_3").checked=true;
        }        
        else if (valor=="line-through") {
            document.getElementById("deco_5").checked=true;
        }
        else if (valor=="none") {
            document.getElementById("deco_6").checked=true;
            anularDecoracion(document.getElementById("deco_6"));
            return true;        
        }
        else {
            return false;
        }
        return true;          
    }
    //######################################
    //                 +FONDO
    //######################################
    else if (prop=="background-color") {
        if (valor.indexOf("rgba(")==-1) {
            if(valor[0]!='#') {
                valor = convertirNombreColorHexa(valor);
                //alert(valor);
                if (valor=="Error") {return false;}       
            }
            if(valor.length==7||valor.length==4) {           
                //Si el color está expresado en tres caracteres, lo represento con 6 y quito #:            
                if(valor.length==4) {
                    var col = valor[1]+valor[1]+valor[2]+valor[2]+valor[3]+valor[3];
                }
                //Si no, le quito el # solamente
                else {
                    var col=valor.substr(1);
                }
                //Valido que solo se use 0-9 A-F
                var validos = "0123456789ABCDEF";
                col=col.toUpperCase();
                for(var i=1; i<6; i++) {
                    if(validos.indexOf(col[i])==-1) {
                        return false;
                    }
                }   
                document.getElementById("color_fondo").value=col;
                habilitar_todo_fondo();                
                var unEntero = parseInt(col, 16);
                var r = (unEntero >> 16) & 255;
                var g = (unEntero >> 8) & 255;
                var b = unEntero & 255;
                r = Math.round((r/255)*10000)/100;
                g = Math.round((g/255)*10000)/100;
                b = Math.round((b/255)*10000)/100;
                document.getElementById("RGBFondo").value=r + "%," + g + "%," + b + "%";
                return true;
            }
            else {
                return false;
            }
        }
        else {            
            //Obtengo el valor de la transparencia:
            var transp = valor.substr(valor.lastIndexOf(",")+1);
            //Le saco el parentesis final:
            transp = transp.substr(0,transp.length-1);
            //Habilito y asigno en controles
            habilitar_todo_fondo();
            document.getElementById("transparencia_fondo").value=transp;
            return true;
        }
    }
    else if (prop=="background-image") {
        //Obtengo el valor de la URL
        var url=valor.substr(valor.indexOf('url(')+5);
        url=url.substr(0,url.length-2);        
        habilitar_todo_fondo();
        document.getElementById("imagen_fondo").value=url;
        return true;
    }
    else if (prop=="background-repeat") {
        if(valor=="no-repeat"||valor=="repeat-x"||valor=="repeat-y"||valor=="repeat") {
            habilitar_todo_fondo();
            document.getElementById("repetir").value=valor;
            return true;        
        }
        else {
            return false;        
        }
    }
    else if (prop=="background-position") {
        if(valor=="left top"|| valor=="left center" || valor== "left bottom" ||
            valor=="center top" || valor=="center center" || valor=="center bottom" ||
            valor=="right top" || valor=="right center" || valor=="right bottom") {
            document.getElementById("ubic_fondo").value=valor;
            habilitar_todo_fondo();
            return true;
         }
         else {
            return false;         
         }        
    }
    else if (prop=="background-attachment") {
        if (valor=="fixed") {
            document.getElementById("fixed").checked=false;
            habilitar_todo_fondo();
            return true;       
        }
        else {
            return false;
        }            
    }
    //######################################
    //                 +BORDE
    //######################################
    else if (prop.indexOf("border")!=-1&&prop.indexOf("radius")==-1)
    {
        return bordePegarCodigo(prop,valor)
    }
    //######################################
    //                 +ESQUINAS
    //######################################
    else if(prop.indexOf("border")!=-1&&prop.indexOf("radius")!=-1) {
        var cuatroEsq=document.getElementById("cuatroEsq");
        var posicion;
        if(prop.indexOf("-top-right")!=-1) { posicion="-top-right";}
        else if(prop.indexOf("-top-left")!=-1) { posicion="-top-left";}
        else if(prop.indexOf("-bottom-right")!=-1) { posicion="-bottom-right";}
        else if(prop.indexOf("-bottom-left")!=-1) { posicion="-top-left";}
        else {posicion="";}        
        if((posicion=="" || posicion.length==0) && cuatroEsq.checked==false) {
            habilitarEsquinasMultiples(true);
            cuatroEsq.checked=true;
        }
        else if(posicion!="" && posicion.length>0 && cuatroEsq.checked==true) {
            habilitarEsquinasMultiples(false);
            cuatroEsq.checked=false;
        }
        return bordePegarEsquinas(valor, posicion);        
    }
    //######################################
    //                 +CAJA
    //######################################
    else if(prop=="display") {
        if(valor=="none"||valor=="inline"||valor=="block") {
            return cajaPegarCodigo(prop,valor);            
        }
        else {return false;}
    }
    else if(prop=="visibility") {
        if(valor=="hidden"||valor=="visible"||valor=="collapse") {
            return cajaPegarCodigo(prop,valor);            
        }
        else {return false;}       
    }
    else if(prop=="float") {
        if(valor=="none"||valor=="right"||valor=="left") {
            return cajaPegarCodigo(prop,valor);        
        }
        else {return false;}
    }
    else if(prop=="clear") {
        if(valor=="none"||valor=="right"||valor=="left"||valor=="both") {
            return cajaPegarCodigo(prop,valor);        
        }
        else {return false;}
    }
    else if(prop=="overflow") {
        if(valor=="visible"||valor=="hidden"||valor=="scroll"||valor=="auto") {
            return cajaPegarCodigo(prop,valor);        
        }
        else {return false;}
    }
    else if(prop=="z-index") {
        //TODO: Validar que sea numérico
        return cajaPegarCodigo(prop,valor);        
    }
    else if(prop=="width"||prop=="max-width"||prop=="min-width"||
             prop=="height"||prop=="max-height"||prop=="min-height"||
             prop=="margin-top"||prop=="margin-left"||prop=="margin-right"||prop=="margin-bottom"||
             prop=="padding-top"||prop=="padding-left"||prop=="padding-right"||prop=="padding-bottom"||
             prop=="top"||prop=="left"||prop=="right"||prop=="bottom") {
        return constaDeNumeroYUnidad(prop,valor);    
    }
    else if(prop=="position") {
        if(valor=="static" || valor=="fixed" || valor=="absolute" || valor=="relative") {
            document.getElementById(prop).value=valor;
            habilitarPosicionamiento(document.getElementById(prop));
            return true;
        }
        else { return false; }   
    }
    //######################################
    //                 +LISTA
    //######################################
    else if(prop=="list-style-type") {
        if(valor=="none"||valor=="disc"||valor=="circle"||valor=="square"||valor=="decimal"
           ||valor=="decimal-leading-zero"||valor=="lower-roman"||valor=="upper-roman"
           ||valor=="lower-alpha"||valor=="upper-alpha"||valor=="lower-greek") {
            return cajaPegarCodigo(prop,valor);        
        }
        else { return false;}
    }
    else if(prop=="list-style-image") {
        if(valor.indexOf("url('")==-1||valor[valor.length-1]!=')'||valor[valor.length-2]!="'") {
            return false;
        }
        else {
            var aux=valor.substr(valor.indexOf("'")+1,valor.lastIndexOf("'")-valor.indexOf("'")-1);
            document.getElementById("imagen_lista").value=aux;
            return true;
        }    
    }
    else if(prop=="list-style-position") {
        if(valor=="inside"||valor=="outside") { return cajaPegarCodigo(prop,valor); }
        else { return false; }
    }
    else {
        //Agoté todas las posibilidades y ninguna coincidió:        
        return false;
    }
}

function cajaPegarCodigo(prop,valor) {
    document.getElementById(prop).value=valor;
    return true;
}
 
function bordePegarCodigo(prop,valor) {    
    var posicion; 
    var pos;   
    if (prop.indexOf("top-")!=-1) {
        posicion="ARRIBA";
        pos="top-"
        habilitarBordes(false);
        document.getElementById("cuatroBordes").checked=false;
    }
    else if(prop.indexOf("bottom-")!=-1) {
        posicion="ABAJO";
        pos="bottom-";
        habilitarBordes(false);
        document.getElementById("cuatroBordes").checked=false;
    }
    else if(prop.indexOf("left-")!=-1) {
        posicion="IZQUIERDA";
        pos="left-";
        habilitarBordes(false);
        document.getElementById("cuatroBordes").checked=false;
    }
    else if(prop.indexOf("right-")!=-1) {
        posicion="DERECHA";
        pos="right-";
        habilitarBordes(false);
        document.getElementById("cuatroBordes").checked=false;    
    }
    else {
        posicion="";
        pos="";
        habilitarBordes(true);
        document.getElementById("cuatroBordes").checked=true;
    }    
    //alert(prop+' XXX '+valor+' XXX '+posicion+' XXX '+pos);
    if (prop=="border-"+pos+"style") {
        if(valor=="none"||valor=="hidden"||valor=="solid"||valor=="dotted"||valor=="outset"||
        valor=="dashed"||valor=="double"||valor=="groove"||valor=="ridge"||valor=="inset") {
            document.getElementById("tipo_borde"+posicion).value=valor;
            return true;        
        }
        else { return false; }
    }
    else if (prop=="border-"+pos+"width") {
        return constaDeNumeroYUnidad(prop,valor,"tamanoBorde",posicion);        
    }
    else if (prop=="border-"+pos+"color") {
        if (valor.indexOf("rgba(")==-1) {
            if(valor[0]!='#') {
                valor = convertirNombreColorHexa(valor);
                //alert(valor);
                if (valor=="Error") {return false;}       
            }
            if(valor.length==7||valor.length==4) {           
                //Si el color está expresado en tres caracteres, lo represento con 6 y quito #:            
                if(valor.length==4) {
                    var col = valor[1]+valor[1]+valor[2]+valor[2]+valor[3]+valor[3];
                }
                //Si no, le quito el # solamente
                else {
                    var col=valor.substr(1);
                }
                //Valido que solo se use 0-9 A-F
                var validos = "0123456789ABCDEF";
                col=col.toUpperCase();
                for(var i=1; i<6; i++) {
                    if(validos.indexOf(col[i])==-1) {
                        return false;
                    }
                }   
                document.getElementById("color_borde"+posicion).value=col;
                var unEntero = parseInt(col, 16);
                var r = (unEntero >> 16) & 255;
                var g = (unEntero >> 8) & 255;
                var b = unEntero & 255;
                r = Math.round((r/255)*10000)/100;
                g = Math.round((g/255)*10000)/100;
                b = Math.round((b/255)*10000)/100;
                document.getElementById("bordeRGB"+posicion).value=r + "%," + g + "%," + b + "%";
                return true;
            }
            else {
                return false;
            }
        }
        else {            
            //Obtengo el valor de la transparencia:
            var transp = valor.substr(valor.lastIndexOf(",")+1);
            //Le saco el parentesis final:
            transp = transp.substr(0,transp.length-1);
            //Asigno en controles            
            document.getElementById("transparencia_borde"+posicion).value=transp;
            return true;
        }
    }
}

function bordePegarEsquinas(valor,posicion) {
    if(valor.indexOf("px")==valor.lastIndexOf("px")) {
        //Tiene un solo radio.
        var aux = separarUnidadNumero(valor);
        if (aux[0]=="Error") {
            return false;                
        }
        else {
            //alert("radio"+posicion);             
            document.getElementById("radio"+posicion).value=aux[0];
            document.getElementById("radio"+posicion).disabled=false;
            document.getElementById("radio2"+posicion).disabled=true;                
            document.getElementById("tipo_esquina"+posicion).value="circ";
            return true;            
        }
    }
    else { //tiene 2 radios
        var r1=valor.substr(0,valor.indexOf("px"));
        var r2=valor.substr(valor.indexOf("px")+3);
        var aux=separarUnidadNumero(r2);
        document.getElementById("tipo_esquina"+posicion).value="elipse";
        document.getElementById("radio"+posicion).value=r1;
        document.getElementById("radio"+posicion).disabled=false;
        document.getElementById("radio2"+posicion).value=aux[0];
        document.getElementById("radio2"+posicion).disabled=false;
        return true;
    }
} 

function constaDeNumeroYUnidad(prop,valor,id="",posicion="") {
    if(id==""||id.length==0) {id=prop;}
    var aux = separarUnidadNumero(valor);
    if(aux[0]=="Error") {return false;}        
    var unidad = aux[1];
    var val = aux[0];
    document.getElementById(id+posicion).value=val;
    document.getElementById(id + "_unidades"+posicion).value=unidad;  
    return true;
}
    
function separarUnidadNumero(valor) {
    if(valor=="0") {
        var nroUnidad=new Array("0","px");
        return nroUnidad;
    }
    var unidad;
    var numero;                
    if (valor[valor.length-1]=="%") {
        numero=valor.substr(0,valor.length-1);
        unidad="%";            
    }
    else {
        unidad=valor[valor.length-2]+valor[valor.length-1];
        numero=valor.substr(0,valor.length-2);            
    }
    //alert(numero+' NU '+unidad);
    if (unidad!="%"&&unidad!="px"&&unidad!="em"&&unidad!="cm"&&unidad!="mm"&&unidad!="in"&&unidad!="pt"&&unidad!="ex") {
        //La unidad no es reconocida
        var nroUnidad=new Array("Error","Error");
    }
    else {
        var nroUnidad=new Array(numero,unidad);
    }
    //alert (nroUnidad[0] + 'NU' + nroUnidad[1]);
    return nroUnidad;
}

function trim(cadena) {
	return cadena.replace(/^\s+|\s+$/g,"");
}

function esEspacioEnBlanco(caracter) {
	var blancos = " \t\n\r\f";
	return (blancos.indexOf(caracter) != -1);
}

function convertirNombreColorHexa(nombreColor) {
    var colores = {"aliceblue":"#f0f8ff", "antiquewhite":"#faebd7", "aqua":"#00ffff", "aquamarine":"#7fffd4", "azure":"#f0ffff", "beige":"#f5f5dc", "bisque":"#ffe4c4", "black":"#000000", "blanchedalmond":"#ffebcd", "blue":"#0000ff", "blueviolet":"#8a2be2", "brown":"#a52a2a", "burlywood":"#deb887",    "cadetblue":"#5f9ea0", "chartreuse":"#7fff00", "chocolate":"#d2691e", "coral":"#ff7f50", "cornflowerblue":"#6495ed", "cornsilk":"#fff8dc", "crimson":"#dc143c", "cyan":"#00ffff",    "darkblue":"#00008b", "darkcyan":"#008b8b", "darkgoldenrod":"#b8860b", "darkgray":"#a9a9a9", "darkgreen":"#006400", "darkkhaki":"#bdb76b", "darkmagenta":"#8b008b", "darkolivegreen":"#556b2f",    "darkorange":"#ff8c00", "darkorchid":"#9932cc", "darkred":"#8b0000", "darksalmon":"#e9967a", "darkseagreen":"#8fbc8f", "darkslateblue":"#483d8b", "darkslategray":"#2f4f4f", "darkturquoise":"#00ced1",    "darkviolet":"#9400d3", "deeppink":"#ff1493", "deepskyblue":"#00bfff", "dimgray":"#696969", "dodgerblue":"#1e90ff", "firebrick":"#b22222", "floralwhite":"#fffaf0", "forestgreen":"#228b22", "fuchsia":"#ff00ff", "gainsboro":"#dcdcdc", "ghostwhite":"#f8f8ff", "gold":"#ffd700", "goldenrod":"#daa520", "gray":"#808080", "green":"#008000", "greenyellow":"#adff2f", "honeydew":"#f0fff0", "hotpink":"#ff69b4", "indianred ":"#cd5c5c", "indigo ":"#4b0082", "ivory":"#fffff0", "khaki":"#f0e68c", "lavender":"#e6e6fa", "lavenderblush":"#fff0f5", "lawngreen":"#7cfc00", "lemonchiffon":"#fffacd", "lightblue":"#add8e6", "lightcoral":"#f08080", "lightcyan":"#e0ffff", "lightgoldenrodyellow":"#fafad2", "lightgrey":"#d3d3d3", "lightgreen":"#90ee90", "lightpink":"#ffb6c1", "lightsalmon":"#ffa07a", "lightseagreen":"#20b2aa", "lightskyblue":"#87cefa", "lightslategray":"#778899", "lightsteelblue":"#b0c4de", "lightyellow":"#ffffe0", "lime":"#00ff00", "limegreen":"#32cd32", "linen":"#faf0e6", "magenta":"#ff00ff", "maroon":"#800000", "mediumaquamarine":"#66cdaa", "mediumblue":"#0000cd", "mediumorchid":"#ba55d3", "mediumpurple":"#9370d8", "mediumseagreen":"#3cb371", "mediumslateblue":"#7b68ee", "mediumspringgreen":"#00fa9a", "mediumturquoise":"#48d1cc", "mediumvioletred":"#c71585", "midnightblue":"#191970", "mintcream":"#f5fffa", "mistyose":"#ffe4e1", "moccasin":"#ffe4b5", "navajowhite":"#ffdead", "navy":"#000080", "oldlace":"#fdf5e6", "olive":"#808000", "olivedrab":"#6b8e23", "orange":"#ffa500", "orangered":"#ff4500", "orchid":"#da70d6", "palegoldenrod":"#eee8aa", "palegreen":"#98fb98", "paleturquoise":"#afeeee", "palevioletred":"#d87093", "papayawhip":"#ffefd5", "peachpuff":"#ffdab9", "peru":"#cd853f", "pink":"#ffc0cb", "plum":"#dda0dd", "powderblue":"#b0e0e6", "purple":"#800080", "red":"#ff0000", "rosybrown":"#bc8f8f", "royalblue":"#4169e1", "saddlebrown":"#8b4513", "salmon":"#fa8072", "sandybrown":"#f4a460", "seagreen":"#2e8b57", "seashell":"#fff5ee", "sienna":"#a0522d", "silver":"#c0c0c0", "skyblue":"#87ceeb", "slateblue":"#6a5acd", "slategray":"#708090", "snow":"#fffafa", "springgreen":"#00ff7f", "steelblue":"#4682b4", "tan":"#d2b48c", "teal":"#008080", "thistle":"#d8bfd8", "tomato":"#ff6347", "turquoise":"#40e0d0", "violet":"#ee82ee", "wheat":"#f5deb3", "white":"#ffffff", "whitesmoke":"#f5f5f5", "yellow":"#ffff00", "yellowgreen":"#9acd32"};
    //var x = colores[nombreColor.toLowerCase()];
    //alert(x);    
    if (typeof colores[nombreColor.toLowerCase()] != 'undefined') {
        return colores[nombreColor.toLowerCase()];
    }
    else {return "Error";}
}

function limpiarTodo() {
//Vuelve todos los inputs a su valor por defecto.
    ///////TEXTO///////
    document.getElementById("tipografia").value="nada";
    document.getElementById("tipog_pers").value="";
    document.getElementById("tipog_pers").readonly=true;    
    document.getElementById("font-size").value="";
    document.getElementById("line-height").value="";
    document.getElementById("color_texto").value="";
    document.getElementById("peso").value="nada";
    document.getElementById("estilo").value="nada";
    document.getElementById("may_min").value="nada";
    document.getElementById("alineacion").value="nada";
    document.getElementById("deco_2").checked=false;
    document.getElementById("deco_2").disabled=false;
    document.getElementById("deco_3").checked=false;
    document.getElementById("deco_3").disabled=false;
    document.getElementById("deco_5").checked=false;
    document.getElementById("deco_5").disabled=false;
    document.getElementById("deco_6").checked=false;
    ///////FONDO///////
    document.getElementById("color_fondo").value="";
    document.getElementById("RGBFondo").value="";
    document.getElementById("transparencia_fondo").value="";
    document.getElementById("transparencia_fondo").disabled=true;
    document.getElementById("imagen_fondo").value="";
    document.getElementById("repetir").value="nada";
    document.getElementById("repetir").disabled=true;
    document.getElementById("ubic_fondo").value="nada";
    document.getElementById("ubic_fondo").disabled=true;
    document.getElementById("fixed").checked=true;
    document.getElementById("fixed").disabled=true;
    document.getElementById("generar_fondo").disabled=true;
    ///////BORDE///////
    var lugar;
    for (var i=0; i<5; i++) {
        if (i==0) {lugar="";}
        else if (i==1) {lugar="ARRIBA";}
        else if (i==2) {lugar="DERECHA";}
        else if (i==3) {lugar="ABAJO";}
        else if (i==4) {lugar="IZQUIERDA";}
        document.getElementById("tipo_borde"+lugar).value="nada";
        document.getElementById("tamanoBorde"+lugar).value="";
        document.getElementById("color_borde"+lugar).value="";
        document.getElementById("bordeRGB"+lugar).value="";
        document.getElementById("transparencia_borde"+lugar).value="";
    }
    document.getElementById("cuatroBordes").checked=true;
    habilitarBordes(true);
    habilitarEsquinasMultiples(true);
    document.getElementById("cuatroEsq").checked=true;
    document.getElementById("tipo_esquina").value="nada";
    document.getElementById("radio").value="";
    document.getElementById("radio2").value="";
    ///////CAJA///////
    document.getElementById("display").value="nada";
    document.getElementById("visibility").value="nada";
    document.getElementById("float").value="nada";
    document.getElementById("clear").value="nada";
    document.getElementById("overflow").value="nada";
    document.getElementById("z-index").value="";
    document.getElementById("width").value="";
    document.getElementById("min-width").value="";
    document.getElementById("max-width").value="";
    document.getElementById("height").value="";
    document.getElementById("min-height").value="";
    document.getElementById("max-height").value="";
    document.getElementById("position").value="nada";    
    for(i=0;i<3;i++) {
        if (i==0) {lugar="";}
        else if (i==1) {lugar="margin-";}
        else if (i==2) {lugar="padding-";}
        document.getElementById(lugar+"top").value="";
        document.getElementById(lugar+"right").value="";
        document.getElementById(lugar+"bottom").value="";
        document.getElementById(lugar+"left").value="";
    }
    document.getElementById("top").disabled=true;
    document.getElementById("right").disabled=true;
    document.getElementById("bottom").disabled=true;
    document.getElementById("left").disabled=true;
    ///////LISTA///////
    document.getElementById("list-style-type").value="nada";
    document.getElementById("imagen_lista").value="Sin especificar";
    document.getElementById("list-style-position").value="nada";        
}
