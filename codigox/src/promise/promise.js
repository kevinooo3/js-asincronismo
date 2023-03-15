//promise 
 const promise = new Promise (function (resolve,reject){
    resolve('gaaa')
 })
 promise.then((resultado)=> {
    console.log(resultado);
 })
 //Ejemplo de situacion economica
    let miCuenta = 10;
    const promesa = new Promise(function(resolve,reject){
        if(miCuenta>=100) { 
            resolve('estas platudo causa')
     } 
     else{
        reject('taas mision imposible')
    }; 
    });
    promesa.then((resultado)=>{
        console.log(resultado);
    }).catch((resultadox)=>{
        console.log(resultadox);
    }).finally(()=>console.log('termino el promise'));

    /*Mi entendimiento de las promesas*/
    // promesa almacenado en una variable
        let promesita1 = new Promise((resolve,reject)=>{
            resolve('una suma cualquiera:'+(2+2));
        })
        promesita1.then((resultado)=>{
            console.log(resultado);
        }).catch((errorCatch)=>{
            console.log(errorCatch)
        }).finally(()=>{
            console.log("finalizado");
        })
        
        function sumaPromesa(){
            let respuesta = 2+2;
            return new Promise((resolve)=>{
                resolve(respuesta)
            })
        }
        sumaPromesa().then((resultadox)=>{
            console.log(resultadox);
        })
        // let sumPromResp = sumaPromesa(); // tambien puede ser utilizado desde otra variable q almacena otra funcion
        // sumPromResp.then((resultadox)=>{
        //     console.log(resultadox);
        // })
        