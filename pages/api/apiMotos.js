import { useEffect, useState} from "react";

const useMotoApi = () => {
    const [motos, setMotos] = useState([]);  
    

  useEffect( () => {
    async function fetchApi(){
    const response = await fetch('https://parallelum.com.br/fipe/api/v1/motos/marcas');
    const data = await response.json();

    setMotos(data);
  }
  fetchApi();
},[]);  
   

  return{
    motos
  };

};

export default useMotoApi;