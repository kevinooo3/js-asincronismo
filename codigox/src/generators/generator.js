// generator
 function* generator(){
    yield 1;
    yield 2;
    yield 3;

 }
 const generator2 = generator();
 console.log(generator2.next().value);
 console.log(generator2.next().value);
 console.log(generator2.next().value);

 function* frutas(listafrutas){
    for(let fruta of listafrutas){
        yield fruta;
    }
 }
 let frutamix = ['pera','platano','manzana']
 const gaa =frutas(frutamix);
 console.log(gaa.next().value);

 console.log(gaa.next().value);
 console.log(gaa.next().value);