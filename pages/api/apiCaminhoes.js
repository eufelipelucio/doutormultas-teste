import { useEffect, useState} from "react";

const useCamiApi = () => {
    const [caminhoes, setCaminhoes] = useState([]);  
    

  useEffect( () => {
    async function fetchApi(){
    const response = await fetch('https://parallelum.com.br/fipe/api/v1/caminhoes/marcas');
    const data = await response.json();

    setCaminhoes(data);
  }
  fetchApi()
},[]);  
   

  return{
    caminhoes
  };

};

export default useCamiApi;