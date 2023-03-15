        const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;// para usar el smlhttprequest se debe usar en la terminal la instalcion de npm : npm i xmlhttprequest
        const API = 'https://api.escuelajs.co/api/v1';

        function fetchData(urlApi, callback) {
            let xhttp = new XMLHttpRequest();
            xhttp.open('GET',urlApi,true);
            xhttp.onreadystatechange = function (event){
                if(xhttp.readyState === 4){ // comprueba el estado de la peticion o el request si es 4 es que sta completo
                    if(xhttp.status === 200){ // comprueba el mensaje del servidor 200 significa ok tengo tu recurso
                        callback(null, JSON.parse(xhttp.responseText));
                    }
                    else{
                        const error = new Error('Error :'+ urlApi);
                        return callback(error, null);// null se pone por que no regresamos ningun dato 
                    }
                } 
            } 
            xhttp.send(); 
        }

        fetchData(`${API}/products`,function(error1,data1){
            if(error1){
                return console.error(error1);
            }
            fetchData(`${API}/products/${data1[0].id}`,function(error2, data2){
                if(error2){
                    return console.error(error2);
                }
                fetchData(`${API}/categories/${data2?.category?.id}`,function(error3, data3){
                    if(error3){
                        return console.error(error3);
                    }
                    console.log(data1[0]);
                    console.log(data2.title);
                    console.log(data3.name);   
                });
            });
        });
/*OBSERVACION ADICIONAL: TAMBIEN SE PUEDE correr este programa desde la consola mediante el comando : node callbacks/xmlhttprequest.js*/ 
/* npm run callback : esto se usa en la terminal para llamar al callback es un metodo adicional tiene la misma funcion del comando node */
    // const pinga = require('xmlhttprequest').XMLHttpRequest;
    // const API = 'https://api.escuelajs.co/api/v1';

    // function traerJasonApi(api, callback){
    //     let oSolicitud = new pinga();
    //     oSolicitud.open('GET',api,true);
    //     oSolicitud.onreadystatechange = (event)=>{
    //         if(oSolicitud.readyState === 4){
    //             if(oSolicitud.status === 200){
    //                 callback(null,JSON.parse(oSolicitud.responseText));
    //             }
    //             else {
    //                 let errorex = new Error(`error : ${api}`);
    //                 return callback(errorex, null);
    //             }
    //         }
    //     }
    //     oSolicitud.send();
    // }
    // traerJasonApi(`${API}/products`,(errox1, dato1)=>{
    //     if (errox1){
    //         console.error(errox1);
    //     }
    //     traerJasonApi(`${API}/products/${dato1[0].id}`,(errox2,dato2)=>{
    //         if (errox2){
    //         console.error(errox2);
    //         }
    //     traerJasonApi(`${API}/products/${dato2?.category?.id}`,(errox3,dato3)=>{
    //         if (errox3){
    //             console.error(errox3);
    //             }
    //             console.log(dato1[0]);
    //             console.log(dato2.title);
    //             console.log(dato3.name);
    //         });
    //     });
    // });

