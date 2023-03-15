//Un callback es cuando se usa una funcion como argumento de otra funcion.
    function saludar(nombre){
        console.log(`Hola ${nombre} como estas`);
    };
    function registroIngreso(funcione,name){
            funcione(name);
    };
    registroIngreso(saludar,'kevinoo');// cuando usamos la funcion como parametro , debemos llamarla sin parentesis siempre.
//-------------------------------------------------------------
// Entendiendo SETTIMEOUT
    //primer ejemplo: con funcion anonima adentro
        setTimeout(function(){
            console.log(`Hola settimeout como estas`)
        },2000);// el 2000 hace referencia a 2segundos aprox
    //segundo ejemplo usando settimeout con callbacks
        function atenderHospital(paciente){
            console.log(`Se encuentra el paciente: ${paciente} ? `);
        };
        setTimeout(atenderHospital,5000,'Victor'); // en los argumentos siempre se pone primero la funcion , despues el tiempo que quieres que demore en ejecutarse y ultimo el parametro de la funcion

    //EJEMPLO esta es la mia propia , mi manera de entender callback
        //primer caso : callback como funcion definida
        function primero(callback){
            console.log("primeron")
            callback;
        }
        function segundo(){
            console.log("segundo");
        }
        primero(segundo());
        //wdo caso : callback como funcion anonima 
        function primero(callback){
            console.log("primeron")
            callback();
        }
        primero(()=>console.log("segundo"));
        //3er caso : funcion con parametro normales y callbacks 
          function suma(x,y,callback){ // se ´puede usar los parametros normales como parametros del callback
            return callback(x,y);
        }    
        function sumita(a,b){
                return a+b;
            }
            console.log(suma(2,2,sumita));
