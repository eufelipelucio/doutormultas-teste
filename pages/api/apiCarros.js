import { useEffect, useState} from "react";

const carApi = () => {
    const [carros, setCarros] = useState([]);  
    

  useEffect( () => {
    async function fetchApi(){
    const response = await fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas');
    const data = await response.json();

    setCarros(data);
  }
  fetchApi();
},[]);  
   

  return{
    carros
  };

};

export default carApi;