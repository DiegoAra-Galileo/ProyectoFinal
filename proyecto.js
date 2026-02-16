/* Replace with your JS Code (Leave empty if not needed) *//* Replace with your JS Code (Leave empty if not needed) *///Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

var propiedades_recargo = 0.35; // 35%
var ingresos_recargo = 0.05; // 5%

//Variable para controlar el ciclo de cotizaciones
var continuar = "SI";

//Ciclo para realizar múltiples cotizaciones
while(continuar.toUpperCase() !== "SALIR"){
	//Recargo
	var recargo = 0;
	var recargo_total = 0;

	//Precio final 
	var precio_final = 0;

	//Mensajes de alerta para ingresar datos 
	var nombre = prompt("Ingrese su nombre, por favor")
	var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
	var edad_numero = parseInt(edad)

	while(edad_numero < 18){
		alert("El asegurado debe ser mayor de edad")
		edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
		edad_numero = parseInt(edad)
	} 
	var casado = prompt("¿Está casado actualmente?" , "si/no")
	//Comprobamos la edad del cónyuge, solamente si se está casado/a
	casado = casado.toUpperCase()
	while(casado !== "SI" && casado !== "NO"){
	  alert("Por favor responda 'si' o 'no'")
	  casado = prompt("¿Está casado actualmente?" , "si/no")
	}
	var edad_conyuge
	if("SI" == casado.toUpperCase()){
	  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
	}
	//convirtiendo las edades ingresadas a números 

	var edad_conyuge_numero = 0
	//convirtiendo la edad del cónyuge si se esta casado/a
	if("SI" == casado.toUpperCase()){
	  edad_conyuge_numero = parseInt(edad_conyuge)
	  
	  while(edad_conyuge_numero < 18){
		alert("El conyuge del asegurado debe ser mayor de edad")
		edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
		edad_conyuge_numero = parseInt(edad_conyuge)
		} 
	}

	var hijos = prompt("¿Tiene hijos o hijas?")
	//Comprobamos la cantidad de hijos solamente si los tienen
	var cantidad_hijos = 0
	/**
	 * 1. convierta la cantidad de hijos a numero
	 */
	if (hijos !== '') {
		cantidad_hijos = parseInt(hijos)
	} 
	
	
	//Propiedades e Ingresos
    var propiedades = prompt("¿Cuántas propiedades tiene?")
    var cantidad_propiedades = 0
    if (propiedades !== '') {
        cantidad_propiedades = parseInt(propiedades)
    }
    
    var ingresos = prompt("¿Cuál es su salario?")
    var salario = 0
    if (ingresos !== '') {
        salario = parseFloat(ingresos)
    }
	
	//Aquí debe calcular el recargo total basado en las respuestas ingresadas

	//Aquí es donde debe de calcular los recargos y el valor final
	//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
	if(edad_numero>=18 && edad_numero<25){
	  //Calculamos el recargo en base a la edad 
	  recargo = precio_base * edad_18
	  //Sumamos todos los recargos que hemos obtenido
	  recargo_total = recargo_total + recargo
	} else if (edad_numero>=25 && edad_numero<50){
	  recargo = precio_base * edad_25
	  recargo_total = recargo_total + recargo
	} else if (edad_numero>=50){
	  recargo = precio_base * edad_50
	  recargo_total = recargo_total + recargo
	}

	//aqui puede colocar un else if() con el siguiente rango

	/** 
	 * 2. Recargo por la edad del conyuge
	 */
	 
	 if("SI" == casado.toUpperCase()){
		if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
		  recargo = precio_base * casado_18
		  recargo_total = recargo_total + recargo
		} else if (edad_conyuge_numero>=25 && edad_conyuge_numero<50){
		  recargo = precio_base * casado_25
		  recargo_total = recargo_total + recargo
		} else if (edad_conyuge_numero>=50){
		  recargo = precio_base * casado_50
		  recargo_total = recargo_total + recargo
		}	 
	 }

	/**
	 * 3. Recargo por la cantidad de hijos 
	 */ 
	if(cantidad_hijos > 0){
	 
		for(var contador = 1 ; contador <= cantidad_hijos ; contador++){
			recargo = precio_base * hijos_recargo
			recargo_total = recargo_total + recargo
		}
	 
	}
	 
	 // 4. Recargo por cantidad de propiedades (35% por propiedad)
    if(cantidad_propiedades > 0){
        // Calculamos primero el precio con los recargos anteriores
        var precio_temporal = precio_base + recargo_total
        for(var i = 0; i < cantidad_propiedades; i++){
            recargo = precio_temporal * propiedades_recargo
            recargo_total = recargo_total + recargo
        }
    }
    
    // 5. Recargo por ingresos (5% del salario)
    if(salario > 0){
        recargo = salario * ingresos_recargo
        recargo_total = recargo_total + recargo
    }
	
	precio_final = precio_base + recargo_total
	//Resultado
	alert ("Para el asegurado "+nombre)
	alert ("El recargo total sera de: "+recargo_total)
	alert ("El precio sera de: "+precio_final)
//Preguntar si desea hacer otra cotización
    continuar = prompt("¿Desea realizar otra cotización? (Escriba 'Salir' para terminar)")
}

alert("Fin del proceso")
