import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';
 
    function postData(urlApi,data){
        const response = fetch(urlApi,{
            method :'POST',
            mode : 'cors',
            credentials: 'same-origin',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        return response;
    }
    const data = {
        "title": "FARAON LOVE SHADY RAAAA",
        "price": 69696969,
        "description": "El producto faron love shady es bueno para aliviar el estres",
        "categoryId": 1,
        "images": ["https://placeimg.com/640/480/any"]
    }
     postData(`${API}/products`,data)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
        })