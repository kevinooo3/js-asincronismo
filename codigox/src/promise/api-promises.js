// Es necesario instalar un recurso npm i node-fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
function fetchData(urlApi){
    return fetch(urlApi)
};
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => console.log(products))
//     .then(()=>{console.log('holi')})
//     .catch(error =>console.log(error))

    fetchData(`${API}/products`)
        .then((response)=>{
            return response.json()
        })
        .then((products)=>{
            console.log(products);
            console.log(`gaaa : ${API}/products/${products[0].id}`)
            return fetchData(`${API}/products/${products[0].id}`);
            
        })
        .then((response)=>{
            return response.json()
        })
        .then((products)=>{
            console.log("este es mano "+products.title);
            return fetchData(`${API}/categories`)
        })
        .then((response)=>{
            return response.json();
        })
        .then((categoria)=>{
            console.log(categoria);
            return fetchData(`${API}/categories/${categoria[0].id}`)
        })
        .then((response)=>{
            return response.json();
        })
        .then((valorImprimible)=>{
            console.log(valorImprimible.name);
        })
        .catch(err => console.log(err)) //detectar un error
        .finally(() => console.log('Finallyx')); //es opcional para mostrar que se terminó la solicitud

        //     return fetchData(`${API}/products/${products[0].id}`);
        // })
        // .then((response)=>{
        //     response.json()})
        // .then((titulo)=>{
        //     console.log(titulo.title);
        // })
        // .catch(()=>{
        //       console.log('sucedio un error loco')  
        // })
        

            // fetchData(`${API}/products`)
            //     .then(response => response.json()) //se hace la conversión a un objeto json
            //     .then(products => {
            //         console.log(products);
            //         return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
            //     })
            //     .then(response => response.json()) //se vuelve traer la data
            //     .then(product => {
            //         console.log(product.title);
            //         return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
            //     })
            //     .then(response => response.json())
            //     .then(category => {
            //         console.log(category.name);
            //     })
            //     .catch(err => console.log(err)) //detectar un error
            //     .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud
