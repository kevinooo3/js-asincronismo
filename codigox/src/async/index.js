//  async await
    function gritoGuerra(){
        return new Promise((resolve,reject)=>{
            (true)
            ? setTimeout(()=>{resolve('gaaa')},2000) 
            : reject( new Error("error chupetin trujillo vas a caer!!!!"))
        })
    }
    async function imprimirGritos(){
        console.log('gox');
          const grito = await gritoGuerra();
          console.log(grito); 
           
    }
    console.log('before');
    imprimirGritos();
    console.log('after');



    function raaa (){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("i wanna know");
            },2000)
        })
    }
    const gritarRaaa= async ()=>{
        console.log("futbol");
        const almacenRaa = await raaa();
        console.log(almacenRaa);

    }
    console.log("ANTES");
    gritarRaaa();
    console.log("DESPUES");