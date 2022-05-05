$(function(){
    //
    // acción Botón mostrar - Ejercicio_01
    $("#mostrar_diagramas").click(function(){
        var imagen = document.createElement("img");
        imagen.setAttribute("src", "assets/img/diagramas_de_flujo.png");
        imagen.setAttribute("width", "1150");
        document.getElementById("insertar_imagen").appendChild(imagen);
    })
    // acción Botón ocultar - Ejercicio_01
    $("#ocultar_diagramas").click(function(){
        var divv = document.getElementById("insertar_imagen");
        while (divv.firstChild) divv.removeChild(divv.firstChild);
    })
    //
    //
    // acción Botón SUMA - Ejercicio_02
    $("#adicion").click(function(){
        var num1 = prompt("Ingrese el primer número a sumar:");
        var num2 = prompt("Ingrese el segundo número a sumar:");
        var result = parseFloat(num1) + parseFloat(num2);
        document.getElementById("titulo").innerHTML = "Suma dos números ingresados por el usuario";
        document.getElementById("nums_op").innerHTML =  `El primer número de la operación es: <span class="text-danger fs-4">${num1}</span>, y el segundo número es: <span class="text-danger fs-4">${num2}</span>`;
        document.getElementById("resultado").innerHTML = `El Resultado de la Suma es: ${result}`;
    })
    // acción Botón RESTA - Ejercicio_02
    $("#sustraccion").click(function(){
        var num1 = prompt("Ingrese el primer número a restar:");
        var num2 = prompt("Ingrese el segundo número a restar:");
        var result = parseFloat(num1) - parseFloat(num2);
        document.getElementById("titulo").innerHTML = "Resta dos números ingresados por el usuario";
        document.getElementById("nums_op").innerHTML =  `El primer número de la operación es: <span class="text-success fs-4">${num1}</span>, y el segundo número es: <span class="text-success fs-4">${num2}</span>`;
        document.getElementById("resultado").innerHTML = `El Resultado de la resta es: ${result}`;
    })
    // acción Botón MULTIPLICACION - Ejercicio_02
    $("#multiplix").click(function(){
        var num1 = prompt("Ingrese el primer número a multiplicar:");
        var num2 = prompt("Ingrese el segundo número a multiplicar:");
        var result = parseFloat(num1) * parseFloat(num2);
        document.getElementById("titulo").innerHTML = "Multiplica dos números ingresados por el usuario";
        document.getElementById("nums_op").innerHTML =  `El primer número de la operación es: <span class="text-primary fs-4">${num1}</span>, y el segundo número es: <span class="text-primary fs-4">${num2}</span>`;
        document.getElementById("resultado").innerHTML = `El Resultado de la multiplicación es: ${result}`;
    })
    // acción Botón DIVISION_Y_MODULO - Ejercicio_02
    $("#divix").click(function(){
        var num1 = prompt("Ingrese el primer número de la división (dividendo):");
        var num2 = prompt("Ingrese el segundo número de la división (divisor):");
        var result = parseInt(num1) / parseInt(num2);
        var modulo = parseInt(num1) % parseInt(num2);
        document.getElementById("titulo").innerHTML = "Divide dos números ingresados por el usuario";
        document.getElementById("nums_op").innerHTML =  `El dividendo es: <span class="text-danger fs-4">${num1}</span>, y el divisor es: <span class="text-danger fs-4">${num2}</span>`;
        document.getElementById("resultado").innerHTML = `El Resultado (cociente) de la división es: ${result}, <br> y el <span class="text-danger fs-2">Módulo</span> (o resto) es: ${modulo},`
    })
    // acción Botón BORRAR - Ejercicio_02
    $("#borrar_todo").click(function(){
        document.getElementById("titulo").innerHTML = "";
        document.getElementById("nums_op").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
    })
    //
    //
    //acción botón "°C a °F" - Ejercicio_03
    $("#inicio_conversor").click(function(){
        let conversion = prompt(`Seleccione el número correspondiente a la conversión deseada:
        1.- Celsius a Fahrenheit.
        2.- Celsius a Kelvin.
        3.- Fahrenheit a Celsius.
        4.- Fahrenheit a Kelvin.
        5.- Kelvin a Celsius.
        6.- Kelvin a Fahrenheit.`);
        let grados_fahrenheit = 0;
        let grados_celsius = 0;
        let grados_kelvin = 0;
        let grados_ini = parseFloat(prompt("Ingrese el valor de los grados a convertir: "));
        switch (parseInt(conversion)) {
            case 1 : // Celsius a Fahrenheit.
                grados_celsius = grados_ini;
                grados_fahrenheit = (grados_celsius * 9)/5 + 32;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Celsius a Fahrenheit.";
                document.getElementById("grados_resultado").innerHTML = `${grados_celsius}° Celsius corresponden a ${grados_fahrenheit}° Fahrenheit`;
                break
            case 2 : // Celsius a Kelvin.
                grados_celsius = grados_ini;
                grados_kelvin = grados_celsius + 273.15;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Celsius a Kelvin.";
                document.getElementById("grados_resultado").innerHTML = `${grados_celsius}° Celsius corresponden a ${grados_kelvin}° Kelvin`;
                break
            case 3 : // Fahrenheit a Celsius.
                grados_fahrenheit = grados_ini;
                grados_celsius = ((grados_fahrenheit-32)*5)/9;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Fahrenheit a Celsius.";
                document.getElementById("grados_resultado").innerHTML = `${grados_fahrenheit}° Fahrenheit corresponden a ${grados_celsius}° Celsius`;
                break
            case 4 : // Fahrenheit a Kelvin.
                grados_fahrenheit = grados_ini;
                grados_kelvin = (((grados_fahrenheit-32)*5)/9) + 273.15;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Fahrenheit a Kelvin.";
                document.getElementById("grados_resultado").innerHTML = `${grados_fahrenheit}° Fahrenheit corresponden a ${grados_kelvin}° Kelvin`;
                break
            case 5: // Kelvin a Celsius.
                grados_kelvin = grados_ini;
                grados_celsius = grados_kelvin - 273.15;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Kelvin a Celsius.";
                document.getElementById("grados_resultado").innerHTML = `${grados_kelvin}° Kelvin corresponden a ${grados_celsius}° Celsius`;
                break
            case 6: // Kelvin a Fahrenheit.
                grados_kelvin = grados_ini;
                grados_fahrenheit = ((grados_kelvin - 273.15) * 9)/5 + 32;
                document.getElementById("tipo_conversion").innerHTML = "Conversión Kelvin a Fahrenheit";
                document.getElementById("grados_resultado").innerHTML = `${grados_kelvin}° Kelvin corresponden a ${grados_fahrenheit}° Fahrenheit`;
                break
            default :  // Caso seleccion diferente a entre 1 y 6.
                document.getElementById("tipo_conversion").innerHTML = "la Conversión a seleccionar debe ser entre el 1 y el 6.";
                document.getElementById("grados_resultado").innerHTML = "";
                const redd = document.querySelector("#tipo_conversion");
                redd.classList.remove("text-success");
                redd.classList.add("text-danger");
                break
        }
    })
    // acción Botón borrar - Ejercicio_03
    $("#borrar_conversion").click(function(){
        document.getElementById("tipo_conversion").innerHTML = "";
        document.getElementById("grados_resultado").innerHTML = "";
    })
    //
    //
    // acción Botón OBTENER DIAS - Ejercicio_04
    $("#cantidad_dias").click(function(){
        let dias_convertir = prompt("Ingrese el número de días:");
        let cant_anhos = Math.floor(dias_convertir / 365);
        let cant_semanas = Math.floor((dias_convertir % 365) / 7);
        let cant_dias = ((dias_convertir % 365) % 7);
        document.getElementById("resultado_dias").innerHTML = `los ${dias_convertir} días ingresados 
        corresponden a ${cant_anhos} año(s), ${cant_semanas} semana(s) y ${cant_dias} día(s).`;
    })
    // acción Botón borrar - Ejercicio_04
    $("#borrar_dias").click(function(){
        document.getElementById("resultado_dias").innerHTML = "";
    })
    //
    //
    // acción Botón OBTENER NUMEROS - Ejercicio_05
    $ ("#iniciar_numeros").click(function(){
        let acumulado = 0;
        let arreglo_nums = [];
        for (let num = 0; num < 5; num++) {
            let num_ingresado = parseFloat(prompt(`Ingrese el número ${num + 1}:`));
            arreglo_nums.push(num_ingresado);
            acumulado = acumulado + num_ingresado;
        }
        let promedio = acumulado / 5;
        document.getElementById("resultado_numeros").innerHTML = `de los siguientes números ingresados: <span class="text-danger fs-3">[ ${arreglo_nums} ]</span>, 
        su sumatoria acumulada es: <span class="text-success fs-2">${acumulado}</span>; y el promedio es: <span class="text-primary fs-2">${promedio}</span>.`;
    })
    // acción Botón borrar - Ejercicio_05
    $("#borrar_numeros").click(function(){
        document.getElementById("resultado_numeros").innerHTML = "";
    })
    //




})