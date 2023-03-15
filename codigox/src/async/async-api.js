// async api 
 import fetch from 'node-fetch'
  const API = 'https://api.escuelajs.co/api/v1'
  async function fetchData (urlApi){
    const response = await fetch(urlApi);
    const data =  await response.json()
    return data; 
  }
  const imprimirDatosApi = async (urlApi)=>{
    try{
    const products = await fetchData(`${urlApi}/products`);
    const producto = await fetchData(`${urlApi}/products/${products[3].id}`);
    const categoria = await fetchData(`${urlApi}/categories`);
        console.log(products);
        console.log(producto.title);
        console.log(categoria);
    }
    catch (error){
        console.error(error);
    }
  }
  imprimirDatosApi(API);